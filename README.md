# Hmbrgr-Hlpr
Group Project 2:  A Restaurant Menu CMS 

## Description


The **Hmbrgr-Hlpr** project is a Restaurant Menu CMS created for centralized chain restaurants with multiple stores. It aims to ease the process of updating menu items and adjusting menu prices in response to different factors, such as: seasonality, supply shortage and projected sales.  
Our system also allow individual store to take off menu items on a store level. This feature would be helpful during an ingredient shortage where some menu items are not available.  
The system is protected with encrypted user passwords so only authorized user can access and alternate the data base.  
Additional store can be registered to the system as the restaurant chain expand.

> **Benefit to implement Hmbrgr-Hlpr CMS**
- [x] Reduce inconsistency of menu and prices across restaurants
    * Restaurants will pull their set menu from the same data base
    * Standardized discount and promotion during special event and promotion discount
- [x] Reduce human error 
    * Updates would be automatically sent to the restaurant digital menu on the launch date
    * Eliminate shipping costs and possibly delays of promotional signage
- [x] Provides customization for individual store 
    * Decrease customers' disappointment with item outage 
    * Increase exposure of item in response to PAR level and shelf-life


## User Story 
As an owner of a chain of quick-service restaurants,  
I would like to have an application that allows me to update our standardized menu items and prices in an efficient and timely manner.  
I would also like the ability to add new restaurants as we increase the number of location.  
Each individual Restaurant Management teams should have their unique login ID to access their restaurant data.  
The restaurant is able to delete or hide certain menu items on a store level through the application.  

## Acceptance criteria 
#### **LOGIN PAGE**
WHEN I launch the app  
THEN I am presented with a secure login page  
WHEN I input my email and password  
THEN I will see a error message or successfully directed to the homepage  
#### **HOMEPAGE**
WHEN I get to the homepage  
THEN I am given the options of  
` View / update standard menu items `  
` View / update store menu items (Store level) `  
` View store list/ Add new store to system `  


#### **View / update standard menu items (Main and Store level)**  
WHEN I click on ` View standard menu items `  
THEN I am presented the latest version of the full menu  
WHEN I click on ` Update standard menu items (Main) `  
THEN I can delete or edit the standard menu list item and price  
WHEN I click on ` Update store menu items (Store level) `  
THEN I can only delete menu item  
WHEN I pressed the ` Save ` button  
THEN the updated version will be sent to the data base  
    
#### **View store list/ Add new store to system**  
WHEN I click on ` View store ` list  
THEN I am presented the list of current store locations  
WHEN  I clicked on ` Add new store `to system  
THEN I can add new store location  
WHEN I pressed the ` Save ` button  
THEN the updated version will be sent to the data base  
#### **LOGOUT**
WHEN I click `LOGOUT` in the `NavBar`  
THEN I will be logged out and re-directed to the login page  

## built with: 
*   "bcrypt": "^5.0.1",
*   "connect-session-sequelize": "^7.1.1",
*   "dotenv": "^10.0.0",
*    "express": "^4.17.1",
*    "express-handlebars": "^5.3.2",
*    "express-sessions": "^1.0.6",
*    "mysql2": "^2.2.5",
*    "node": "^16.1.0",
*    "sequelize": "^6.6.2"




<!-- 
When i log in I am presented a clear menu where i am given the options to:
1) display all menue items 
2) search for existing menue items 
3) add menue items 
4) update existing menue items 
5) delete menue items 
6) assign menue items by store

I should also be able to display all the stores I own and be able to add new stores as I expand. 

## built with: 
*   "bcrypt": "^5.0.1",
*   "connect-session-sequelize": "^7.1.1",
*   "dotenv": "^10.0.0",
*    "express": "^4.17.1",
*    "express-handlebars": "^5.3.2",
*    "express-sessions": "^1.0.6",
*    "mysql2": "^2.2.5",
*    "node": "^16.1.0",
*    "sequelize": "^6.6.2" -->