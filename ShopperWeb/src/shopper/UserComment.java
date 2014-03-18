package shopper;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONObject;


public class UserComment {
	private long commentId;
	private String content;
	private Date time;
	private long poster;
	private long userId;
	
	public UserComment(){}
	
	public UserComment(String content, Date time, long poster, long userId){
		this.content=content;
		this.time=time;
		this.poster=poster;
		this.userId=userId;
	}
	
	public long getCommentId(){
		return commentId;
	}
	
	public void setCommentId(long commentId){
		this.commentId=commentId;
	}
	
	public String getContent(){
		return content;
	}
	
	public void setContent(String content){
		this.content=content;
	}
	
	public Date getTime(){
		return time;
	}
	
	public void setTime(Date time){
		this.time=time;
	}
	
	public long getPoster(){
		return poster;
	}
	
	public void setPoster(long poster){
		this.poster=poster;
	}
	
	public long getUserId(){
		return userId;
	}
	
	public void setUserId(long userId){
		this.userId=userId;
	}

	public JSONObject toJson(){
		JSONObject json=new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		
		json.put("UserCommetId", commentId);
		json.put("content", content);
		json.put("poster", poster);
		json.put("userId", userId);
		json.put("time", fmt.format(time));
		
		return json;
	}
}
