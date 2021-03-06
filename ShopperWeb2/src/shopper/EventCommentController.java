package shopper;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONObject;

public class EventCommentController {
	
	public static JSONObject createEventComment(JSONObject inputJson) {
		JSONObject json = new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		try {
			String content=(String)inputJson.get("content");
			Date time=new Date();
			long poster=Long.parseLong((String)inputJson.get("poster"));
			long eventId=Long.parseLong((String)inputJson.get("eventId"));
			
			EventComment ec=new EventComment(content, time, poster, eventId);
			EventCommentManager.addEventComment(ec);
			
			json.put("status", "1");
			json.put("message","event comment created successfully");
			json.put("user", ec.toJson());
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}
	
	public static JSONObject getEventComment(JSONObject inputJson){
		JSONObject returnJson = new JSONObject();
		
		
		return returnJson;
	}

}
