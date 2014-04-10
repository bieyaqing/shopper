package shopper;
import hibernate.HibernateUtil;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Restrictions;


public class UserCommentManager {

		public static ArrayList<UserComment> getAllUserComments(){
			ArrayList<UserComment> userComments=new ArrayList<UserComment>();
			DetachedCriteria dc=DetachedCriteria.forClass(UserComment.class);
			List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
			for (Object o:list){
				userComments.add((UserComment)o);
			}
			return userComments;
		}
		
		public static ArrayList<UserComment> getUserCommentsByUserId(long userId){
			ArrayList<UserComment> userComments=new ArrayList<UserComment>();
			DetachedCriteria dc = DetachedCriteria.forClass(UserComment.class);
			dc.add(Restrictions.eq("userId", userId));
			List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
			for (Object o:list){
				userComments.add((UserComment)o);
			}
			return userComments;
		}
		
		public static void addUserComment(UserComment userComment){
			HibernateUtil.save(userComment);
		}
		
		public static void deleteUserComment(UserComment userComment){
			HibernateUtil.delete(userComment);
		}
}
