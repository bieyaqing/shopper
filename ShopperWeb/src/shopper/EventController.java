package shopper;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class EventController {
	public static JSONObject createEvent(JSONObject inputJson){
		JSONObject json=new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		try {
			String title=(String)inputJson.get("title");
			String description=(String)inputJson.get("description");
			Date startTime=fmt.parse((String)inputJson.get("startTime"));
			int duration=Integer.parseInt((String)inputJson.get("duration"));
			String tag=(String)inputJson.get("tag");
			int peopleLimit=Integer.parseInt((String)inputJson.get("peopleLimit"));
			String location=(String)inputJson.get("location");
			long organizer=Long.parseLong((String)inputJson.get("organizer"));
			String publish=(String)inputJson.get("publish");
			String image = (String) inputJson.get("image");
			
			Event e=new Event(title, description,startTime,duration,tag,peopleLimit,location,organizer,publish,image);
			EventManager.addEvent(e);
			
			json.put("status", "1");
			json.put("message","event created successfully");
			json.put("event", e.toJson());
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		
		return json;
	}

	public static JSONObject getMyEvents(JSONObject inputJson) {
		JSONObject json=new JSONObject();
		JSONArray myCreatedEvents=new JSONArray();
		JSONArray myJoinedEvents=new JSONArray();
		try {
			long userId=Long.parseLong((String)inputJson.get("userId"));
			String uId=String.valueOf(userId);
			ArrayList<Event> events=EventManager.getAllEvents();
			for (Event e:events){
				if (e.getOrganizer() == userId) {
					myCreatedEvents.add(e.toJson());
				} else {
					String p=e.getParticipates();
					if (p.indexOf(uId)>-1) {
						myJoinedEvents.add(e.toJson());
					}
				}
			}
			json.put("myCreatedEvents", myCreatedEvents);
			json.put("myJoinedEvents", myJoinedEvents);
			json.put("status", "1");
			json.put("message", "get my events successfully");
			//return 2 JSONArray: myCreatedEvents, myJoinedEvents
			
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}

	public static JSONObject getDiscoverEvents(JSONObject inputJson) {
		JSONObject json=new JSONObject();
		JSONArray friendEvents=new JSONArray();
		JSONArray publicEvents=new JSONArray();
		try {
			long userId=Long.parseLong((String)inputJson.get("userId"));
			String uId=""+userId;
			ArrayList<Event> events=EventManager.getAllEvents();
			for (Event e:events){
				if (e.getOrganizer() != userId) {
					if (e.getPublish().equals("public")){
						publicEvents.add(e.toJson());
					}
					if (e.getPublish().equals("friend")){
						User organizer=UserManager.getUserById(e.getOrganizer());
						String orgFriends = organizer.getfriends();
						if(orgFriends != null){
							if ((organizer.getfriends()).contains(uId)){
								friendEvents.add(e.toJson());
							}
						}
					}
				}
			}
			json.put("friendEvents", friendEvents);
			json.put("publicEvents", publicEvents);
			json.put("status", "1");
			json.put("message", "get discover events successfully");
			
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}
	
	public static JSONObject cancelEvent(JSONObject inputJson){
		JSONObject returnJson = new JSONObject();
		
		try{
			long eventId = Long.parseLong((String)inputJson.get("eventId"));
			
			Event event = EventManager.getEventById(eventId);
			
			String participants = event.getParticipates();
			if(participants.length() == 1){
				event.setOrganizer(0);
				event.setParticipates("0");
			}else{
				String orgStr = event.getOrganizer()+",";
				participants = participants.substring(2);
				
				event.setOrganizer(Long.parseLong(participants.substring(0, 1)));
			}
			
			EventManager.modifyEvent(event);
			returnJson.put("status", "1");
			returnJson.put("message", "cancel success");
		}catch(Exception e){
			e.printStackTrace();
			returnJson.put("status", "0");
			returnJson.put("message", e.toString());
		}
		
		return returnJson;
	}
	
	public static JSONObject updateEvent(JSONObject inputJson){
		JSONObject outputJson = new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		try {
			long eventId = Long.parseLong((String)inputJson.get("eventId"));
			//String title=(String)inputJson.get("title");
			String description=(String)inputJson.get("description");
			Date startTime=fmt.parse((String)inputJson.get("startTime"));
			int duration=Integer.parseInt((String)inputJson.get("duration"));
			String tag=(String)inputJson.get("tag");
			int peopleLimit=Integer.parseInt((String)inputJson.get("peopleLimit"));
			//String location=(String)inputJson.get("location");
			long organizer=Long.parseLong((String)inputJson.get("organizer"));
			//String publish=(String)inputJson.get("publish");
			//String image = (String)inputJson.get("image");
			
			Event e = EventManager.getEventById(eventId);
			
			//e.setTitle(title);
			e.setDescription(description);
			e.setStartTime(startTime);
			e.setDuration(duration);
			e.setTag(tag);
			e.setPeopleLimit(peopleLimit);
			//e.setLocation(location);
			e.setOrganizer(organizer);
			//e.setPublish(publish);
			//e.setImage(image);
			
			EventManager.modifyEvent(e);
			
			outputJson.put("status", "1");
			outputJson.put("message", "user updated successfully");
			outputJson.put("user", e.toJson());
		}catch(Exception e){
			e.printStackTrace();
			outputJson.put("status", "0");
			outputJson.put("message", e.toString());
		}
		return outputJson;
	}
	
	public static JSONObject joinEvent(JSONObject inputJson){
		JSONObject returnJson = new JSONObject();
		try{
			long userId = Long.parseLong((String)inputJson.get("userId"));
			long eventId = Long.parseLong((String)inputJson.get("eventId"));
			
			Event event = EventManager.getEventById(eventId);
			String participants = event.getParticipates();
			participants = participants + "," + userId;
			event.setParticipates(participants);
			
			EventManager.modifyEvent(event);
			returnJson.put("status", 1);
			returnJson.put("message", "success");
		}catch(Exception e){
			e.printStackTrace();
			returnJson.put("status", 0);
			returnJson.put("message", e.toString());
		}
		
		return returnJson;
	}
	
	public static JSONObject getEventById(JSONObject inputJson){
		JSONObject returnJson = new JSONObject();
		
		try{
			long eventId = Long.parseLong((String)inputJson.get("eventId"));
			
			Event e = EventManager.getEventById(eventId);
			
			ArrayList<EventComment> ecArr = EventCommentManager.getAllEventComments();
			Iterator<EventComment> itr = ecArr.iterator();
			
			JSONArray ecJArr = new JSONArray();
			while(itr.hasNext()){
				EventComment tEC = itr.next();
				try{
					if(eventId == tEC.getEventId()){
						User tempU = UserManager.getUserById(tEC.getPoster());
						if(tempU != null){
							String tempComment = tEC.getContent();
							long diff = new Date().getTime() - (tEC.getTime()).getTime();
							long diffMinutes = diff / (60 * 1000) % 60;
							String tempUname = tempU.getUsername();
							String tempUphoto = tempU.getPhoto();
							JSONObject tempCommentJson = new JSONObject();
							
							tempCommentJson.put("duration", diffMinutes);
							tempCommentJson.put("photo", tempUphoto);
							tempCommentJson.put("username", tempUname);
							tempCommentJson.put("comment", tempComment);
							ecJArr.add(tempCommentJson);
						}
					}
				}catch(Exception ex){ex.printStackTrace();}
			}
			
			
			returnJson.put("status", "1");
			returnJson.put("message", e.toJson());
			returnJson.put("message2", ecJArr);
		}catch(Exception e){
			e.printStackTrace();
			returnJson.put("status", "0");
			returnJson.put("message", e.toString());
		}
		
		return returnJson;
	}
}
