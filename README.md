# My-Social-Media-App
This Web application mainly allows users to register,login and add post. Users can like, comment, follow or unfollow others users. 
In addition, users can update or add a picture on their profile. Overall, it is an interactive social media app.

STEP 1: TOOLS AND INSTALLATION
 * Front end
   - Ant design => link (https://ant.design/)
   - Bootstrap  => link (https://getbootstrap.com/)
 * Back end
   - Nodejs => link (https://nodejs.org/en/) 
   - Expressjs  => link (https://expressjs.com/en/starter/installing.html
   - MongoDB Atlas   =>  link (https://www.mongodb.com/atlas)
   - Cloudinary  (Store the image) => link (https://cloudinary.com/)

Step 2 DEVELOPMENT STEPS

 * Front End
   - Create a project folder named My-Social-Media-App
   - Cd to  My-Social-Media-App
   - Execute the commands npx create-react-app client ( UI folder is client)
   - Install the dependencies by executing the following commands:
        - npm i react-router-dom react-dom antd react-redux redux-thunk redux
   - Cd client and run  npm start on the command line to verify if the browser is working.
   - In src:
         - Create 3 folders: 
                  1- Components: (Create Layout file)
                  2- Pages: (create files such as login,register,Addpost,AllUsers,Edit,Home)
                  3- Redux: ( State management)
    - implementing 
    - npm ruun dev or npm start
    
   * Back end
    - cd My-Social-Media-App
    - Install dependencies by running the following commands: 
           - npm  i  antd axios moment cloudinary express nodemon express mongoose
    - Created server file which depicts the entry point
    - Created a model folder in which we implement model Schema for user and posts using Mongoose
    - Created a Router folder in which we implemented the RESTful API for users and posts.
    - Add Cloudinary file containing cloudinary configuration generate by cloudinary platform
         - Cloudinary is free open source to store the image.
              - Create a free account on cloudinary
              - Navigate to prefered dependency which is Nodejs. Click on Nodejs dependency andd it would generate a string config containing(cloud_name,api-config,api_secret)
              - Copy the String provided by cloudinary and paste it in the cloudinary file within your developemnt enviroment.
     - That's,  we need to perform manual testing on REST API using POSTMAN.
     - To run the whole project
         - cd client
             - ente: npm start
             
         -  on main directory
             -  execute: nodemon server
      - Navigate to the browser and perform some actions
                  

STEP 3 CONFIGURING MONGODB DATABASE
   - https://www.mongodb.com/docs/manual/installation/
   
StEP 4 TROUBLESHOOTING
    - If you encounted an issue while running the app such as Error: error:0308010c:digital envelope routines::unsupported [Node Error Solved]
    - Follow this link for troubleshooting https://www.freecodecamp.org/news/error-error-0308010c-digital-envelope-routines-unsupported-node-error-solved/
