# CarZilla

A CRUD App for Luxury Car Sharing...

## Installation
 *


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
    * Add AngularJS gem and dependencies
      * In `Gemfile`
        * `gem 'angularjs-rails', '~> 1.4', '>= 1.4.7'
      gem 'angular-rails-templates', '~> 0.2.0'`
      * In `application.js`
        * `//= require angular
        //= require angular-route
        //= require angular-resource
        //= require angular-rails-templates
        //= require angular-ui/angular-ui-router`
    * Add `ui-router`
  * Add token based authentication via 'devise_token_auth'
