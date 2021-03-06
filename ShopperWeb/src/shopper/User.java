package shopper;
import java.util.ArrayList;

import org.json.simple.JSONObject;


public class User {
	private long userId;
	private String username;
	private String password;
	private String phone;
	private String email;
	private String country;
	private String interests;
	private String friends;
	private int points;//used to calculate rating
	private String photo;
	private int good;
	private int bad;
	
	public User(){}
	
	public User(String username, String password){
		this.username=username;
		this.password=password;
		this.photo = "img/photo01.png";
	}
	
	public User(String username, String password, String phone, String email, String country, String interests, String photo){
		this.username=username;
		this.password=password;
		this.phone=phone;
		this.email=email;
		this.country=country;
		this.interests=interests;
		this.photo=photo;
		points=0;
		friends="";
		good=0;
		bad=0;
	}
	
	public long getUserId(){
		return userId;
	}
	
	public void setUserId(long userId){
		this.userId=userId;
	}
	
	public String getUsername(){
		return username;
	}
	
	public void setUsername(String username){
		this.username=username;
	}
	
	public String getPassword(){
		return password;
	}
	
	public void setPassword(String password){
		this.password=password;
	}
	
	public String getPhone(){
		return phone;
	}
	
	public void setPhone(String phone){
		this.phone=phone;
	}
	
	public String getEmail(){
		return email;
	}
	
	public void setEmail(String email){
		this.email=email;
	}
	
	public String getCountry(){
		return country;
	}
	
	public void setCountry(String country){
		this.country=country;
	}
	
	public String getInterests(){
		return interests;
	}
	
	public void setInterests(String interests){
		this.interests=interests;
	}
	
	public String getfriends(){
		return friends;
	}
	
	public void setFriends(String friends){
		this.friends=friends;
	}
	
	public int getPoints(){
		return points;
	}
	public void setPoints(int p){
		points=p;
	}
	
	public String getPhoto(){
		return photo;
	}
	
	public void setPhoto(String photo){
		this.photo=photo;
	}
	
	public int getGood(){
		return good;
	}
	
	public void setGood(int g){
		good=g;
	}
	
	public int getBad(){
		return bad;
	}
	
	public void setBad(int b){
		bad=b;
	}
	
	public JSONObject toJson(){
		JSONObject json=new JSONObject();
		json.put("userId", userId);
		json.put("username", username);
		json.put("password", password);
		json.put("phone", phone);
		json.put("email", email);
		json.put("country", country);
		json.put("interests", interests);
		json.put("friends", friends);
		json.put("points", points);
		json.put("photo", photo);
		json.put("good", good);
		json.put("bad", bad);
		
		return json;
	}
}
