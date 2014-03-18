package servlets;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.FileItemIterator;
import org.apache.commons.fileupload.FileItemStream;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

/**
 * @author yaqing
 * */
public class FileUploadServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    public FileUploadServlet() {
        super();
    }
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		process(request, response);
	}
	
	protected void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		JSONObject returnJson = new JSONObject();
		JSONParser parser = new JSONParser();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd'T'HH-mm-ss");
		
		String contextRoot = getServletContext().getRealPath("/");
		response.setContentType("text/html;charset=UTF-8");
		
		try{
			JSONObject input = (JSONObject)parser.parse(request.getParameter("json"));
			System.out.println("input: " + input.toJSONString());
			
			boolean isMultipart = ServletFileUpload.isMultipartContent(request);
			if(isMultipart){
				ServletFileUpload upload = new ServletFileUpload();
				
				try{
					FileItemIterator iter = upload.getItemIterator(request);
					while(iter.hasNext()){
						FileItemStream item = iter.next();
						try{
							String fieldName = item.getFieldName();
							if(fieldName.equals("file")){
								String dateString = sdf.format(new Date());
								
								String uploadDirectory = (String)input.get("uploadDirectory");
								String folderName = (String)input.get("folderName");
								String fileName = item.getName();
								String contentType = item.getContentType();
								
								boolean useOpenShift = false;
								//File DIR
								String fileDir = "";
								String urlDir = "";
								if(useOpenShift){
									File newDir = new File(System.getenv("OPENSHIFT_DATA_DIR") + uploadDirectory);
									if(!newDir.exists()){
										boolean result = newDir.mkdir();
										if(result){
											//success
										}else{
											returnJson.put("status", 0);
											returnJson.put("message", "Dir not exist and cannot be created!");
											return;
										}
									}
									File newFolder = new File(System.getenv("OPENSHIFT_DATA_DIR") + uploadDirectory+"/"+folderName);
									
									if(!newFolder.exists()){
										boolean result = newFolder.mkdir();
										if(result){
											//success
										}else{
											returnJson.put("status", 0);
											returnJson.put("message", "Folder not exist and cannot be created!");
											return;
										}
									}
									
									fileDir = System.getenv("OPENSHIFT_DATA_DIR") + uploadDirectory+"/"+folderName+File.separator+folderName+dateString+fileName;
									urlDir = "/static/"+uploadDirectory+"/"+folderName+File.separator+folderName+dateString+fileName;
									
								}else{
									File newDir = new File(contextRoot+uploadDirectory);
									if(!newDir.exists()){
										boolean result = newDir.mkdir();
										if(result){
											//success
										}else{
											returnJson.put("status", 0);
											returnJson.put("message", "Dir not exist and cannot be created!");
											return;
										}
									}
									File newFolder = new File(contextRoot+uploadDirectory+"/"+folderName);
									
									if(!newFolder.exists()){
										boolean result = newFolder.mkdir();
										if(result){
											//success
										}else{
											returnJson.put("status", 0);
											returnJson.put("message", "Folder not exist and cannot be created!");
											return;
										}
									}
									
									fileDir = contextRoot+uploadDirectory+"/"+folderName+File.separator+folderName+dateString+fileName;
									urlDir = "/ShopperWeb/"+uploadDirectory+"/"+folderName+File.separator+folderName+dateString+fileName;
								}
								
								boolean correctFileType = false;
								
								if(input.containsKey("fileType")){
									String[] fileTypes = ((String)input.get("fileType")).split(",");
									for(int i = 0; i < fileTypes.length; i++){
										if(contentType.toLowerCase().contains(fileTypes[i])){
											correctFileType = true;
											break;
										}
									}
								}else{
									correctFileType = true;
								}
								
								if(correctFileType){
									InputStream stream = item.openStream();
									
									if(item.isFormField()){
										// Do not process file out put stream
										// it is not a file but a form field
										// this could happen when there is a form within a form
										// I don't know, just guess~~ HA HA!
									}else{
										OutputStream os = new FileOutputStream(new File(fileDir));
										int sizeInt = 0;
										int restrictSize = 0;
										
										if(contentType.contains("image")){
											restrictSize = 2148;
										}else{
											restrictSize = 21480;
										}
										
										boolean isTooLarge = false;
										int read = 0;
										byte[] bytes = new byte[1024];
										try{
											while((read = stream.read(bytes))!= -1){
												os.write(bytes, 0, read);
												if(sizeInt > restrictSize){
													// return message file cannot exceed 2Mb!
													isTooLarge = true;
													break;
												}
												sizeInt ++;
											}
											if(isTooLarge){
												// Delete failed file!
												// return exceed 2Mb!
												stream.close();
												os.close();
												File file = new File(fileDir);
												
												if(file.delete()){
													// clear failed file!
													returnJson.put("status", 0);
													returnJson.put("message", "File too large, deleted!");
												}else{
													// failed file clear error!
													returnJson.put("status", 0);
													returnJson.put("message", "File too large, but not deleted! Please check server!");
												}
											}else{
												// success
												returnJson.put("status", 1);
												returnJson.put("message", "success");
												returnJson.put("fileDir", fileDir);
												returnJson.put("fileUrl", urlDir);
											}
										}catch(Exception e){
											returnJson.put("status", 0);
											returnJson.put("message", "FileUploadServlet4thStageException: " + e);
											e.printStackTrace();
										}
									}
								}else{
									returnJson.put("status", 0);
									returnJson.put("message", "Please upload " + (String)input.get("fileType") + " file!");
								}
							}else{
								// handle other form fields
							}
						}catch(Exception e){
							returnJson.put("status", 0);
							returnJson.put("message", "FileUploadServlet3rdStageException: " + e);
							e.printStackTrace();
						}
					}
				}catch(Exception e){
					returnJson.put("status", 0);
					returnJson.put("message", "FileUploadServlet2ndStageException: " + e);
					e.printStackTrace();
				}
			}else{
				returnJson.put("status", 0);
				returnJson.put("message", "No upload request found!");
			}
		}catch(Exception e){
			returnJson.put("status", 0);
			returnJson.put("message", "FileUploadServletException: " + e);
			e.printStackTrace();
		}
		out.println(returnJson.toJSONString());
	}
}
