<h1 style = "size : 50px"> Video Chat Web App </h1>

With ongoing Covid - 19 pandemic , virtual meetings and classrooms have become the need of the hour and thus a real time video chat application which is easy to use and highly secured is very much in requirement.
The video call chat web app solves the current problem and is an easy way to communicate with our friends and colleagues.

 #### [The link to the website](https://safe-brook-85135.herokuapp.com/)

<h1 style ="size: 35px">The Overview of the Project </h1>

<h1 style ="style: 25px">THE HOME PAGE</h1>

![main](https://user-images.githubusercontent.com/78142846/125280701-fe584600-e332-11eb-875f-5b092f245a9b.png)

The page uses internal navigation and includes sections like services , about ( how teams software is built) , partner organisations that use teams in their internal usage and final a contact Us page for resolving queries

<h1 style = "size: 20px">Services </h1>

![services](https://user-images.githubusercontent.com/78142846/125280934-424b4b00-e333-11eb-84be-a55ebf371499.png)

<h1 style = "size: 20px">About </h1>

![about 1](https://user-images.githubusercontent.com/78142846/125292930-8f81e980-e340-11eb-8c9a-113d838da326.png)

![about 2](https://user-images.githubusercontent.com/78142846/125292975-9b6dab80-e340-11eb-8cf8-18dccccc2140.png)

<h1 style = "size: 20px">Partners </h1>

![partners](https://user-images.githubusercontent.com/78142846/125282960-90614e00-e335-11eb-81e9-9180b2fd1e2c.png)

<h1 style = "size: 20px">Contact Us </h1>

 ![contact](https://user-images.githubusercontent.com/78142846/125283017-9fe09700-e335-11eb-8eb2-fe2882e74a0d.png)

<h1 style = "size:35px">Features of the Website<h1>

 <h2 style ="size:30px">1) Authentication</h2>
Authentication is here handled using passport and passport local libraries.The register and login pages are set up differently and the user has to get authenticated to access his / her login page

 <h3 style = "size: 25px">1.1) Register ( with random details)</h3>
     
  ![register](https://user-images.githubusercontent.com/78142846/125283471-154c6780-e336-11eb-918c-56ecdf694766.png)
       
 <h3 style = "size: 25px">1.2) Login </h3>
      
 <h3 style = "size: 20px">1.2.1) Login with wrong email </h3>
      
   ![w _ email 0](https://user-images.githubusercontent.com/78142846/125283724-4f1d6e00-e336-11eb-9638-0aae817f7d7c.png)
             
   ![w _ email](https://user-images.githubusercontent.com/78142846/125283839-69efe280-e336-11eb-86d9-762be492c384.png)

             
 <h3 style = "size: 20px">1.2.2) Login with wrong password</h3>
             
   ![mail](https://user-images.githubusercontent.com/78142846/125284212-cfdc6a00-e336-11eb-974d-ed99c17676f8.png)
             
   ![w _ password](https://user-images.githubusercontent.com/78142846/125284234-d66ae180-e336-11eb-82c8-8775a6a96901.png)
             
 <h3 style = "size: 20px">1.2.3) Login with correct credentials</h3>
      
   ![mail](https://user-images.githubusercontent.com/78142846/125284301-eaaede80-e336-11eb-95d3-76b1dfbae4f8.png)
             
   The user gets logged in correct.
             

<h2 style ="size:30px">2) Individual Profile Page </h2>

   <h3 style = "size: 32px">Profile page</h3>
   
   ![profile](https://user-images.githubusercontent.com/78142846/125284547-32356a80-e337-11eb-919d-5ce0a5a04012.png)
   
 <h3 style = "size:25px">2.1) The meeting area </h3>
 
    It includes a new meeting button to initiate a new meeting and a separate join meeting field through which others can join the meeting.
      
   ![meeting](https://user-images.githubusercontent.com/78142846/125284779-86d8e580-e337-11eb-880e-70bcc26b339e.png)
      
 <h3 style = "size:25px">2.2) The Profile section </h3>
 
   It includes the basic information and then the log out button
       
   ![account](https://user-images.githubusercontent.com/78142846/125284984-bdaefb80-e337-11eb-8a64-848605260663.png)
       
<h2 style ="size:30px"> 3) Video Call Page </h2>
 
   <h3 style ="size:25px">3.1) The control Panel</h3>
 
   It includes invite people , mute (and unmute) , stop video (and play video) and end call features.
      
   ![panel](https://user-images.githubusercontent.com/78142846/125285164-fea71000-e337-11eb-9c5d-958da48ad216.png)
         
   <h3 style ="size:20px">3.1.1)  The Invite People button</h3>
 
   It provides the URL of the current meeting
                 
   ![people](https://user-images.githubusercontent.com/78142846/125285513-5ba2c600-e338-11eb-8f7c-d997c2a1d1ac.png)

                 
   <h3 style ="size:20px">3.1.2)  The Mute (and Unmute) Button</h3>
 
    It mutes the user and the user can unmute later as well
                 
   ![mute](https://user-images.githubusercontent.com/78142846/125285613-7412e080-e338-11eb-87b8-1cdac94b3e76.png)
                 
  <h3 style ="size:20px">3.1.3). The stop (and PLay video) Button</h3>
 
    It allows the user to stop the video and then play it later as well
                 
   ![video](https://user-images.githubusercontent.com/78142846/125287145-331bcb80-e33a-11eb-91a1-48c666cd1cdc.png)
                 
   <h3 style="size:20px">3.1.4) The End Call simply removes the user from the call and directs it back to the profile page</h3>

  <h3 style ="size:25px">3.2) The Chat box</h3>
 
    It allows real time chat during a video call (again implented using Socket.io , refer to the end for tech - stack)
         
   ![chat1](https://user-images.githubusercontent.com/78142846/125287421-842bbf80-e33a-11eb-9d14-1449a811e6e8.png)
         
   ![chat 2](https://user-images.githubusercontent.com/78142846/125287440-8a21a080-e33a-11eb-9a84-0370ac23be79.png)
         
  <h2 style ="size:30px">3.3) The Screen Optimisation ( The most exciting feature)</h2>
        In general we must look to optimise the resources in hand and use them to the maximum limit. Screen optimisation works on the same logic. If we have one
        user in call the entire screen gets used up the user, for two users the video grid gets optimised to cater two people , for three people the sizes get 
        adjusted similarly and the screen optimisation keeps working a similar fashion.
         
   <h3 style ="size:20px">FOR 1 USER<h3>
         
   ![room1](https://user-images.githubusercontent.com/78142846/125287931-2b105b80-e33b-11eb-81ff-a8d5f8a80f03.png)
         
 <h3 style ="size:20px">FOR 2 USERS</h3>
         
   ![room2](https://user-images.githubusercontent.com/78142846/125287947-32376980-e33b-11eb-9fe8-965df1019d31.png)
         
 <h3 style ="size:20px">FOR 3 USERS</h3>
         
   ![room3](https://user-images.githubusercontent.com/78142846/125287975-3b283b00-e33b-11eb-88e7-9983e86aa956.png)
         
 <h3 style ="size:20px">FOR 4 USERS</h3>
         
   ![room4](https://user-images.githubusercontent.com/78142846/125288001-43807600-e33b-11eb-99b8-f80013215609.png)
         
         
 
   <h1 style="size:40px">THE TECH STACK USED</h1>
      
   The basis of any real - time video or chat application is based on server side communication for which I used Socket.io and as far as video call is 
   considered , amongst all options WebRTC was used in this project .
   Peerjs was used to accomplish the WebRTC functionaliy and hence allowing multiple users to view each other in a video call.
      
   The authentication part was handled at server side using Passport and Passport-Local libraries and the user login and registeration was smoothly achieved 
   using them.
      
   The entire Project had its front end being coded in EJS and designed in CSS with both the server and client side being coded in Javascript.
   
 
 






         


        

       



     
     
