package shopper;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONObject;


public class EventComment {
	private long id;
	private String content;
	private Date time;
	private long poster;
	private long eventId;
	
	public EventComment(){}
	
	public EventComment(String content, Date time, long poster, long eventId){
		this.content=content;
		this.time=time;
		this.poster=poster;
		this.eventId=eventId;
	}
	
	public long getId(){
		return id;
	}
	
	public void setId(long id){
		this.id=id;
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
	
	public long getEventId(){
		return eventId;
	}
	
	public void setEventId(long eventId){
		this.eventId=eventId;
	}
	
	public JSONObject toJson(){
		JSONObject json=new JSONObject();
		SimpleDateFormat fmt = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
		
		json.put("EventCommetId", this.id);
		json.put("content", content);
		json.put("poster", poster);
		json.put("eventId", eventId);
		json.put("time", fmt.format(time));
		
		return json;
	}
}
