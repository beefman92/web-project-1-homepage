# Do you find cheat code?

##  Objectives
This project is a good practice to learn how to design and develop simple homepage by html, css and javascript. Besides that, 
I also add function of leaving message which requires support of server end program.

## Content
[My homepage](http://18.144.2.153:8080/) consists of following modules:
* index page
* detail information
  + self-introduction and contact information
  + education background
  + experiences
  + skill list
* leaving message (Only for login user)
* login

## Project Structure

| Path | Content |
| ---- | ----- |
| readme-file | Files in this directory are pictures used in this README.md |
| src/main/java | Java codes of server end program |
| src/main/resources/static/*.html | Pages of my website|
| src/main/resources/static/audio | Audio files |
| src/main/resources/static/css | CSS files |
| src/main/resources/static/imgs | Image files |
| src/main/resources/static/js | Javascript files |

## Screenshots
index page
![a](readme-file/index-page.png)

information page
![b](readme-file/information-page.png)

message-page
![b](readme-file/message-page.png)

## Video
https://youtu.be/LE0f75B7IH0

## Technology
During development, I utilized following libs, plugins and frameworks:
* [jQuery](https://jquery.com)
* [Bootstrap](https://getbootstrap.com/)
* [jQuery Cookie](https://github.com/carhartl/jquery-cookie)
* [AOS](https://github.com/michalsnik/aos)
* [Spring](https://spring.io/)

## Installation
[Install java](https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/) (JDK 1.8 required)  
Download [homepage-1.0.jar](https://github.com/beefman92/web-project-1-homepage/releases/tag/v0.1)
Execute following command
```shell
# web server will listen to port 8080
java -jar homepage-1.0.jar com.my.webdev.project.homepage.Server
```
Visit website

## Course
[CS 5610 - Web Development](http://johnguerra.co/classes/webDevelopment_spring_2019/)