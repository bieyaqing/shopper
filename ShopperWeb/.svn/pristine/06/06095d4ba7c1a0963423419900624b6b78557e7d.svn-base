package shopper;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

public class UserController {

	public static JSONObject createUser(JSONObject inputJson) {
		JSONObject json = new JSONObject();
		try {
			String username=(String)inputJson.get("username");
			String password=(String)inputJson.get("password");
			
			User u=new User(username, password);
			UserManager.addUser(u);
			
			json.put("status", "1");
			json.put("message","user created successfully");
			json.put("user", u.toJson());
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}
	
	public static JSONObject updateUser(JSONObject inputJson){
		JSONObject outputJson = new JSONObject();
		
		try {
			long userId=Long.parseLong((String)inputJson.get("userId"));
			User u = UserManager.getUserById(userId);
			
			if(inputJson.containsKey("username")){
				String username=(String)inputJson.get("username");
				u.setUsername(username);
			}
			if(inputJson.containsKey("password")){
				String password=(String)inputJson.get("password");
				u.setPassword(password);
			}
			if(inputJson.containsKey("phone")){
				String phone=(String)inputJson.get("phone");
				u.setPhone(phone);
			}
			if(inputJson.containsKey("email")){
				String email=(String)inputJson.get("email");
				u.setEmail(email);
			}
			if(inputJson.containsKey("country")){
				String country=(String)inputJson.get("country");
				u.setCountry(country);
			}
			if(inputJson.containsKey("interest")){
				String interests=(String)inputJson.get("interest");
				u.setInterests(interests);
			}
			if(inputJson.containsKey("photo")){
				String photo=(String)inputJson.get("photo");
				u.setPhoto(photo);
			}
			
			UserManager.modifyUser(u);
			
			outputJson.put("status", "1");
			outputJson.put("message", "user updated successfully");
			outputJson.put("user", u.toJson());
			
		}catch(Exception e){
			e.printStackTrace();
			outputJson.put("status", "0");
			outputJson.put("message", e.toString());
		}
		return outputJson;
	}
	
	public static JSONObject addFriend(JSONObject inputJson){
		JSONObject json = new JSONObject();
		try {
			long userId=Long.parseLong((String)inputJson.get("userId"));
			long friendId = Long.parseLong((String)inputJson.get("friendId"));
			User u=UserManager.getUserById(userId);
			
			String friendStr = "";
			try{
				friendStr = u.getfriends();
			}catch(Exception e){
			}
			if(friendStr == null){
				friendStr = "";
			}
			
			if(friendStr.length() == 0){
				friendStr = "" + friendId;
			}else{
				friendStr = friendStr + "," + friendId;
			}
			
			u.setFriends(friendStr);
			UserManager.modifyUser(u);
			
			json.put("status", "1");
			json.put("message","add friend success");
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}

	public static JSONObject getUserById(JSONObject inputJson) {
		JSONObject json = new JSONObject();
		try {
			long userId=Long.parseLong((String)inputJson.get("userId"));
			User u=UserManager.getUserById(userId);
			
			json.put("status", "1");
			json.put("message","get user successfully");
			json.put("user", u.toJson());
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}

	public static JSONObject getMyFriends(JSONObject inputJson) {
		JSONObject json=new JSONObject();
		JSONArray myFriends=new JSONArray();
		try {
			long userId = Long.parseLong((String)inputJson.get("userId"));
			User user =UserManager.getUserById(userId);
			
			String friends=user.getfriends();
			String[] arr = {};
			if(friends == null){
				
			}else if(friends.length() == 1){
				String[] tArr = {friends};
				arr = tArr;
			}else{
				arr=friends.split(",");
			}
			
			for (int i=0; i<arr.length; i++){
				long uid=Long.parseLong(arr[i]);
				User u=UserManager.getUserById(uid);
				myFriends.add(u.toJson());
			}
			
			json.put("status", "1");
			json.put("message","get friends successfully");
			json.put("myFriends", myFriends);
		}catch(Exception e){
			e.printStackTrace();
			json.put("status","0");
			json.put("message",e.toString());
		}
		return json;
	}

}
