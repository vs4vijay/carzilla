# CarZilla
A CRUD App for Car Ride Sharing...

CarZilla app which allows users to perform Create/Read/Update/Delete operations on Car Entity. It uses OAuth 2 with Devise for authentication, A access_token is passed in the Header of every HTTP request. The API end point is /api/v1/cars. It returns response is in JSON format. The database that I have used is MongoDB for storing Users as well as Cars.

**Technology wise**, I have used Restful and MVC architectures for developing App. The Model(M) and Controller(C) part in Rails and View(V) part is in Angular. So we can easily decouple our consumer application from producers if required. Every request is authenticated on the server side using `devise_token_auth` gem, Which checks for access_token in HTTP Header.

# Technology Used:
1. **Frontend**: AngularJS and Bootstrap
2. **API**: Ruby on Rails and mongoid ODM
3. **Database**: MongoDB
4. **Auth**: devise, devise_token_auth, and ng_token_auth
5. **Misc.**: SendGrid, toaster(for notifications)

The **technology stack** is as follows:

```
AngularJS + UI  ------->  Rails Server  ------->  MongoDB
```

# Workflow:
1. End user interact with rails server on `localhost:3000` which serves a Single Page Application(SPA) in AngularJS.
2. It prompts us with Registration/Login page, After email confirmation and login, we will be redirected to our app.
3. It initially makes a call (`/api/v1/cars`) to rails server for getting all the Cars.
4. Rails controller handles this routes and makes a call MongoDB. It Uses 'mongoid' ODM to get documents from MongoDB.
5. All the HTTP API calls are Restful in nature.

## Functionality Added:
1. User can **Register and Confirm his/her email**.
2. User can **Login and Logout**.
3. User can **Reset his/her password** via email.
4. After Login, User can perform **CRUD on Cars**.

## Installation:
  - Clone CarZilla app using `git clone https://github.com/vs4vijay/carzilla/`
  - go to carzilla directory using `cd carzilla`.
  - Do a `bundle install`.
  - Start MongoDB server using `mongod` on another terminal.
  - Run carzilla rails app using `rails s`.
  - Now open rails server `localhost:3000` on browser.

### To Do/Enhancements:
  - Right now we are using default WEBrick server, we can use Puma or Passenger.
  - UI can be more Intuitive.
  - Can remove Hash(#) from URL, caused by AngularJS.
  - Errors can be handled in batter way on Client side.
  - Export `SENDGRID_PASSWORD` to environment.

## Development
 * `rails new carzilla -o`
 * `bundle install`
 * `rails g mongoid:config`
 * `rails g model car model:string year:integer desc:text`
 * `rails g controller cars`
 * Add methods/actions on controller
 * Add route to routes.rb `resources :cars`
 * Add frontend using AngularJS and Bootstrap
    * Add Bootstrap gem `bootstrap-sass`
    * Add AngularJS gem and dependencies
      * Add `ui-router`, `toaser`
  * Add token based authentication via `devise_token_auth` gem (on rails side) and `ng-token-auth` (on angular side)
