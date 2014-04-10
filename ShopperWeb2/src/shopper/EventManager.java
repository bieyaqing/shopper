package shopper;
import hibernate.HibernateUtil;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;


public class EventManager {
	
	public static ArrayList<Event> getAllEvents(){
		ArrayList<Event> events=new ArrayList<Event>();
		DetachedCriteria dc=DetachedCriteria.forClass(Event.class);
		List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
		for (Object o:list){
			events.add((Event)o);
		}
		return events;
	}
	
	public static ArrayList<Event> getEventsByOrganizer(long organizer){
		ArrayList<Event> events=new ArrayList<Event>();
		DetachedCriteria dc=DetachedCriteria.forClass(Event.class);
		dc.add(Restrictions.eq("organizer", organizer));
		List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
		for (Object o:list){
			events.add((Event)o);
		}
		return events;
	}
	
	public static Event getEventById(long id){
		return (Event)HibernateUtil.get(Event.class, id);
	}
	
	public static void addEvent(Event event){
		HibernateUtil.save(event);
	}
	
	public static void modifyEvent(Event event){
		HibernateUtil.update(event);
	}
	
	public static void deleteEvent(Event event){
		HibernateUtil.delete(event);
	}
}
