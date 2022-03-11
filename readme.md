# **DiscoStore**

## **Description of the project:**

DiscoStore is a webshop that lets you buy records (albums). You can get a list of existing albums without signing in. But to create, edit or delete orders, you must be registered and signed in.

## **Wireframes:**

Wireframes are included in the project presentation and can be run from here: 

https://slides.com/kbekke/code

## **User Stories:**

1.	As a user I want to able to sign up to the application
    
2.	As a user I want to able to log in to the application
    
3.	As a user I want to able to log out from the application
    
4.	As a user I want to able to create a new order in the application
    
5.	As a user I want to able to list albums in the application
    
6.	As a user I want to able to list orders in the application

7.	As a user I want to able to edit orders in the application
    
8.	As a user I want to able to delete orders in the application
    
## **Setup:**

No setup or installation is required to run the app in a browser. 

## **Technologies Used:**

1. Express.js
2. Mongoose.js
3. CORS
4. jsonwebtokem
5. bcryptjs
6. mongoDB cloud on Atlas
7. Heroku

## **Models:**

1.	User.model.js
2.	Album.model.js
3.  Order.model.js

## **Server routes table(Method, Route or URL, Description as columns):**

| Method   | Route                     | Description                                                               |
| -------- | --------------------------| ------------------------------------------------------------------------- |
| GET      | "/"                       | Go to home page                                                           |
| -------- | -------                   | ---------------                                                           |
| GET      | "/signup"                 | go to sign up page                                                        |
| -------- | --------                  | ------------------                                                        |
| POST     | "/signup"                 | create new user                                                           |
| -------- | --------                  | ---------------                                                           |
| GET      | "/login"                  | go to login page                                                          |
| -------- | -------                   | ----------------                                                          |
| POST     | "/login"                  | login user                                                                |
| -------- | -------                   | ----------                                                                |
| GET      | "/logout"                 | logout user                                                               |
| -------- | --------                  | -----------                                                               |
| PUT      | "/api/orders/:orderId"    | update the order                                                          |
| -------- | ---------------------     | -----------------------                                                   |
| GET      | "/api/albums"             | go to list albums page                                                    |
| -------- | ------------              | ----------------------                                                    |
| GET      | "/api/albums/:albumId"    | go to album details page                                                  |
| -------- | ---------------------     | ------------------------                                                  |
| GET      | "/api/orders/:orderId"    | go to order                                                               |
| -------- | ----------------------    | -------------------                                                       |
| POST     | "/api/orders/"            | create the order                                                          |
| -------- | ----------------------    | --------------                                                            |
| DELETE   | "/api/orders/:orderId"    | delete the order                                                          |
| -------- | ------------------------  | ----------------                                                          |

## **Project Link:**

The app is deployed to Heroku and can be accessed from here:

https://discostore.herokuapp.com/

## **Future Work:**

1.	Dependant on new frontend feature
 

## **Team members:**

Peter Ravnsbæk & Kim Steen Bekke

