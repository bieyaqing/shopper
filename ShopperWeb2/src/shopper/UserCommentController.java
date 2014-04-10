package shopper;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONObject;

public class UserCommentController {
	
	public static JSONObject createUserComment(JSONObject inputJson) {
		JSONObject json = new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		try {
			String content=(String)inputJson.get("content");
			Date time=fmt.parse((String)inputJson.get("time"));
			long poster=Long.parseLong((String)inputJson.get("poster"));
			long userId=Long.parseLong((String)inputJson.get("userId"));
			
			UserComment uc=new UserComment(content, time, poster, userId);
			UserCommentManager.addUserComment(uc);
			
			json.put("status", "1");
			json.put("message","user comment created successfully");
			json.put("user", uc.toJson());
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}
	
}
