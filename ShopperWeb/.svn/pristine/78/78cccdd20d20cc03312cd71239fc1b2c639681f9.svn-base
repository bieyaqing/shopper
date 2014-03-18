package shopper;
import org.json.simple.JSONObject;

public class LoginController {
	public static JSONObject login(JSONObject input){
		JSONObject json = new JSONObject();
		try{
			String username = (String) input.get("username");
			String password = (String) input.get("password");
			User u = UserManager.getUserByUserName(username);

			if(u==null){
				json.put("status", "0");
				json.put("message","invalid user");
				return json;
			}

			if(!u.getPassword().equals(password)){
				json.put("status", "0");
				json.put("message","invalid password");
				return json;
			}
			
			json.put("status","1");
			json.put("message","login successful");
			json.put("user",u.toJson());
			
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}
}
