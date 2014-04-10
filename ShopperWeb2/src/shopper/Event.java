package shopper;
import java.util.ArrayList;
import java.util.Date;
import java.text.SimpleDateFormat;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;



public class Event {
	private long eventId;
	private String title;
	private String description;
	private Date startTime;
	private int duration;
	private String tag;//eg. clothes
	private int peopleLimit;
	private String location;
	private String participates;
	private long organizer;
	private String publish;
	private String image;
	
	public Event(){
		
	}
	
	public Event(String title, String description, Date startTime, int duration, String tag, int peopleLimit, String location, long organizer, String publish, String image){
		this.title=title;
		this.description=description;
		this.startTime=startTime;
		this.duration=duration;
		this.tag=tag;
		this.peopleLimit=peopleLimit;
		this.location=location;
		this.organizer=organizer;
		participates=Long.toString(organizer);
		this.publish=publish;
		this.image=image;
	}
	
	public long getEventId(){
		return eventId;
	}
	
	public void setEventId(long eventId){
		this.eventId=eventId;
	}
	
	public String getTitle(){
		return title;
	}
	
	public void setTitle(String title){
		this.title=title;
	}
	
	public String getDescription(){
		return description;
	}
	
	public void setDescription(String description){
		this.description=description;
	}
	
	public Date getStartTime(){
		return startTime;
	}
	
	public void setStartTime(Date startTime){
		this.startTime=startTime;
	}
	
	public int getDuration(){
		return duration;
	}
	
	public void setDuration(int duration){
		this.duration=duration;
	}
	
	public String getTag(){
		return tag;
	}
	
	public void setTag(String tag){
		this.tag=tag;
	}
	
	public int getPeopleLimit(){
		return peopleLimit;
	}
	
	public void setPeopleLimit(int peopleLimit){
		this.peopleLimit=peopleLimit;
	}
	
	public String getLocation(){
		return location;
	}
	
	public void setLocation(String location){
		this.location=location;
	}
	
	public String getParticipates(){
		return participates;
	}
	
	public void setParticipates(String participates){
		this.participates=participates;
	}
	
	public long getOrganizer(){
		return organizer;
	}
	
	public void setOrganizer(long organizer){
		this.organizer=organizer;
	}
	
	public String getPublish(){
		return publish;
	}
	
	public void setPublish(String publish){
		this.publish=publish;
	}
	public String getImage(){
		return image;
	}
	
	public void setImage(String image){
		this.image=image;
	}
	
	public JSONObject toJson(){
		JSONObject json=new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		json.put("eventId", eventId);
		json.put("title", title);
		json.put("description", description);
		json.put("startTime", fmt.format(startTime));
		json.put("duration", duration);
		json.put("tag", tag);
		json.put("peopleLimit", peopleLimit);
		json.put("location", location);
		double lat1 = 1.296661;
		double lon1 = 103.849886;
		try{
			lat1 = Double.parseDouble(location.split(",")[0]);
			lon1 = Double.parseDouble(location.split(",")[1]);
		}catch(Exception e){
			
		}
		double lat2 = 1.296661;
		double lon2 = 103.849886;
		json.put("distance", ""+ShopperUtil.distance(lat1, lon1, lat2, lon2, 'K'));
		json.put("participates", participates);
		
		JSONArray participateArr = new JSONArray();
		if(participates.length() == 1){
			User u = UserManager.getUserById(Long.parseLong(participates));
			try{
				participateArr.add(u.toJson());
			}catch(Exception e){e.printStackTrace();}
		}else{
			String[] tSArr = participates.split(",");
			for(int i = 0; i < tSArr.length; i ++){
				User u = UserManager.getUserById(Long.parseLong(tSArr[i]));
				try{
					participateArr.add(u.toJson());
				}catch(Exception e){e.printStackTrace();}
			}
		}
		json.put("participateJArr", participateArr);
		
		json.put("organizer", organizer);
		json.put("publish", publish);
		json.put("image", image);
		
		return json;
	}
}
