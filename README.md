Seyedeh Yasaman, Rashida


Library website for university  ------>  is called LibraryTHD


# ProjectDescription

This project is about designing a website/app for Library of a university. This website has several facilities for guests and members. In the following, we list some of which:

- searching books by guests and members.
- logging in the Library app by its members and staffs.
- registering in the Library by guests in order to become as a member.
- reserving a book and return it to the library.
- upgrading the membership to one of three states (Gold, Silver, Regular) by library's members to use special options of Library.
- degrading a member's membership by staffs because of some problem that happens by the member.
- contacting with staffs to inform the occured events or problems by members or guests.
- sending comments and opinion about books, media , and other facilities of library by members.
- inserting the information of new book in the Database by staffs.
- updating the information of a book in the Database by staffs.
- deleting the information of a book in the Database by staffs.
- editing user's detail by administrator
- delete user access to the app by adminstrator
- creating chat room for members and guests.
- changing language (English and German).


The database collections are located in the LibraryDB folder.

# Installation
Microsoft VS code for implementation of project is used
This is an Angular project created using Angular cli. Install Angular cli (one time) if you do not have it installed .
For install CLI, should run the following command

>>> npm install -g @angular/cli


Then, you should install project dependencies:

>>> npm install

- Backend (MongoDB) : 
In order to run backend, should install Mongoose. For install Mongoose, you should run the following command

>>> npm install mongoose

Then, to load that configuration into your application, you ’ll need some packages. Install them by executing the following npm command in your terminal:

>>> npm install express express-session @types/express @types/cors ts-node

In Node.js, you need to restart the process to make changes take effect. You can eliminate this extra step by using nodemon to restart the process automatically. You can install nodemon globally with npm:

>>> npm install nodemon --global

- Websocket 
ws is a simple to use, blazing fast, and thoroughly tested WebSocket client and server implementation. I used websocket service to create chat room.  
For install websocket, you should go to the directory in which websocket server is located. Then, run the foolowing command

>>> npm install ws

- Documentation
I used Compodoc for documantation. To install Compodoc, you need to run the following command

>>> npm install -g @compodoc/compodoc


# Basic Usage

- First step, to run the site on localhost, you should go to the app folder and then run the following command
```
  ng serve
```
By default the site will load in browser at http://localhost:4200/

- Second step, you should run our backend. All Collections are found in LibraryDB folder in our project. You just should import them to a database, called Library, in the mongoDb. Then, you can open another terminal and go to the server-side directory by running the following command:
```
  cd server-side 
```
After that, you should run nodmon. 

- Third step, you should run Web Socket. Open new terminal and then run the following commands one by one:
```
  cd server-side 
  cd src
  ts-node webSCK.ts
```
- At the end, if you want to see our Documentation, just you should run the following command:
```
  compodoc -p tsconfig.json -s -w
```


- To test our Library app, you can use:
  - the following username and password for User login:
     - Email:  aida.nikkhah@gmail.com
     - Password: schdkb7i6
  - the following username and password for administrator login:
     - Email:  s.y.rashida@gmail.com
     - Password:  866dfds


Responsive design:

 ![alt text](./src/assets/img/basic%20usage/responsive.jpg)

main page:
 ![alt text](./src/assets/img/basic%20usage/first.jpg)

User Login page :
 ![alt text](./src/assets/img/basic%20usage/user-login.jpg)

User Profile:
 ![alt text](./src/assets/img/basic%20usage/user-profile.jpg)


Admin Login page:

![alt text](./src/assets/img/basic%20usage/admin-login.jpg)

admin Profile page :
 ![alt text](./src/assets/img/basic%20usage/admin-profile.jpg)


Chat page:
![alt text](./src/assets/img/basic%20usage/chat.jpg)

Contact page:
![alt text](./src/assets/img/basic%20usage/contact.jpg)

Edit, Delete or Add a book :
![alt text](./src/assets/img/basic%20usage/book-management.jpg)

search book:
![alt text](./src/assets/img/basic%20usage/search.jpg)

Register user:
![alt text](./src/assets/img/basic%20usage/register.jpg)

Edit, Delete or add a user by administrator:
![alt text](./src/assets/img/basic%20usage/users-management.jpg)

Reserve Book by users:
 ![alt text](./src/assets/img/basic%20usage/reserve-book.jpg)


# Implementation of the Requests
- User Login pannel include requests to login to the app by members
- Admin pannel in order to request to login to the app by administrators
- Events include Adding, deleting, Updating Books in the library
- Reservation pannel to reserve book and also return the borrowed book by users
- Admin profile pannel is used by administrators to access to other users and also they have ability to edit users information, delete any user or even register a user. Admins also can request to add, delete, update book details.
- User Profile pannel shows user information and ability to change their own info. Moreover, search, borrow and return books by users.
- Chatroom pannel is used to send text messages to all defined users. Also, users and guests can have chat with support team by this pannel to explain their issue and take advise by support team.
(- app.component.ts is used to handle all incomming requests and redirect them to the coresponding route. we also import all diffrent routs we defined for diffrent requests, create connection to database, and import express in this file
  - routes Modules : which include event.ts, user.ts files.
  each of these files are responsible to handle specific requests. we did this separation in order to have a well organized structure.)
- Search Book pannel to search a special book by users in the database

# Work done
- Seyedeh Yasaman Rashida :
    - Backend 
    - Websocket for creating chat room.
    - search book 
    - reserve and return book by members
    - add, edit, delete book by administartor
    - add, edit, delete users by administartor
    - contact users and guests with administrator
    - Compodoc documentation
    - sending email ( users and guests can send email to the main administrator of library and say about their issues)
    - usecase diagram (Online Registeration, Book Reservation, Change Membership, Send Comment)
    - writting Stakeholders, [Stakeholders and Requests], [Request Requirement] and Log_in in WiKi
    - Saira font
    - corporate identity of THD
    - Responsive design
    - user registeration
    - internationalization
    - usecase diagram  (Search books- Report problems- Request Features)
    - writing README
    - writting Stakeholders, [Stakeholders and Requests] and [Request Requirement] in WiKi

## Technologies
- Angular + typscript + HTML+ CSS + Responsive design + WebSocket  client for frontend.
- NodeJS + MongoDB + Websocket server for backend 
- I used POSTMON and Thunder client to test our backend.
- I installed MongoDB locally.




----------------------------------------------------------The End-------------------------------------------------------------------
