package shopper;
import hibernate.HibernateUtil;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;


public class EventCommentManager {

		public static ArrayList<EventComment> getAllEventComments(){
			ArrayList<EventComment> eventComments=new ArrayList<EventComment>();
			DetachedCriteria dc=DetachedCriteria.forClass(EventComment.class);
			List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
			for (Object o:list){
				eventComments.add((EventComment)o);
			}
			return eventComments;
		}
		
		public static ArrayList<EventComment> getEventCommentsByEventId(long eventId){
			ArrayList<EventComment> eventComments=new ArrayList<EventComment>();
			DetachedCriteria dc = DetachedCriteria.forClass(EventComment.class);
			dc.add(Restrictions.eq("eventId", eventId));
			List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
			for (Object o:list){
				eventComments.add((EventComment)o);
			}
			return eventComments;
		}
		
		public static void addEventComment(EventComment eventComment){
			HibernateUtil.save(eventComment);
		}
		
		public static void deleteEventComment(EventComment eventComment){
			HibernateUtil.delete(eventComment);
		}
}
