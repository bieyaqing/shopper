package servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.URLDecoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import shopper.EventController;
import shopper.UserController;

/**
 * Servlet implementation class CreateEventServlet
 */
public class CreateEventServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateEventServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		process(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		process(request, response);
	}
	
	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		//URLDecoder dc = new URLDecoder();
		JSONParser parser = new JSONParser();
		String jsonStr = request.getParameter("json");
		try{
			JSONObject inputJson = (JSONObject) parser.parse(jsonStr);
			System.out.println(inputJson.toJSONString());
			
			JSONObject replyMessage = new JSONObject();
			replyMessage = EventController.createEvent(inputJson);

			out.println(replyMessage.toJSONString());
		
		}catch(Exception e){
			e.printStackTrace();
			out.println(e.toString());
		}
	}

}
