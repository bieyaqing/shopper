package shopper;


import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;

import java.util.*;

import hibernate.*;


public class UserManager {

	public static ArrayList<User> getAllUsers(){
		ArrayList<User> users = new ArrayList<User>();
		DetachedCriteria dc = DetachedCriteria.forClass(User.class);
		List<Object> list = HibernateUtil.detachedCriteriaReturnList(dc);
		for(Object o: list){
			users.add((User)o);
		}
		return users;
	}
	
	public static User getUserById(long userId){
		return (User)HibernateUtil.get(User.class, userId);
	}
	
	public static User getUserByUserName(String username){
		User user = null;
		
		DetachedCriteria dc = DetachedCriteria.forClass(User.class);
		dc.add(Restrictions.eq("username", username));
		
		List<Object> list = HibernateUtil.detachedCriteriaReturnLimitedList(dc, 1);
		if(list.size()>0){
			user = (User)list.get(0);
		}
		
		return user;
	}
	
	public static void addUser(User user){
		HibernateUtil.save(user);
	}
	
	public static void modifyUser(User modifiedUser){
		HibernateUtil.update(modifiedUser);
	}
	
	public static void deleteUser(User user){
		HibernateUtil.delete(user);
	}
	

}
