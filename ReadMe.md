# Getting Started with Create React App

Goto [DockerHub](hub.docker.com)

## Docker Image Name

vijaykumar151096/blogger_backend

### Steps to Run Application With Docker

The Application Will be Hosted in PORT : 9005

* Pull the Images from docker hub
  * `docker pull vijaykumar151096/blogger_backend`
* Run the Docker using Below Command
  * `docker run -d -p 9005:9005 --name blogger_backend vijaykumar151096/blogger_backend`
* To Stop 
  * `docker stop blogger_backend`
* To Start 
  * `docker start blogger_backend`

The Application Will be Hosted in PORT : 9005

### Steps to Run Application Without Docker

The Application Will be Hosted in PORT : 9005

* Goto Terminal
* Type the Following Command to start the application
  * `nodemon run start_dev`

### Application is already Hosted in Heroku 

* The Application is in Maintanence Mode.
* Turn off the maintanence Mode to use it from Heroku.

