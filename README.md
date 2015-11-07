# CarZilla

A CRUD App for Luxury Car Sharing...

## Installation
 * a


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
      * Include following code to `application.css` and rename it to `application.scss`
        * `@import "bootstrap-sprockets";@import "bootstrap";`
      * Include following code to `application.js`
        * `//= require bootstrap`
    * Add `ui-router`
