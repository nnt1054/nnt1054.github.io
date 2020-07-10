---
layout: documentation
title: Account Data API
category: mmorpg
tag: Component Design Documents
---

#### Description:
The Account Data API is used to store the general Account information of the user, using their Google Sign-In ID as their unique primary key.

#### Features:
* stores account information in a database table with Google Sign-In ID as the primary key
* logs all database events/transactions to a logging service (TBD)
    * account creation and deletion, character creation and deletion, account status upgrades, etc.
* stores each Accounts' list of Characters
* stores Account status
    * assumes we have some sort of "premium member" type subscription (TBD)

#### Tools:
* Express.js
* PostgreSQL

#### Design Considerations:
* I used this [reference] from Epic Games as help for designing this API
* We have an option of storing Auth Session data in a Redis table attached to the Account Data API, BUT I decided it seemed more appropriate to store Auth Session data with the Primary Gateway Server instead.  Since the Primary Gateway Server will be delivering the main 'web' content to the users anyway, it seemed appropriate to it handle Auth Sessions.  In addition, it will also save extra HTTP calls between the Primary Gateway Server and the Account Data API everytime we'd like to authenticate a request.
* I've decided to stick with Google Sign-In for the main form of authentication mostly as a quality-of-life upgrade for both the users and the developers
    * Users will have a much easier to creating their account and getting straight into the game
    * The application will also feel much more secure since the mmorpg backend does not need to actually store and encrypt user passwords and put the user's information at risk.
    * Developers will have less to worry about in terms of creating a secure authentication process.

#### Process Flowcharts

##### Logging In/Authenticating a User
* Client logs in using Google Sign-In
* Client stores their ID token in local cache
* Client sends a login request to the Primary Gateway Server
* Primary Gateway Server authenticates the User's ID token using a Google API Client library
* Primary Gateway Server then creates a sticky session for the user
* Primary Gateway Server makes request to the Account Data API for the user's information
    * If the account does not exist in the Account Data API (means first time user), then create a new Account for the user
* Primary Gateway Server responds back to the Client and Client proceeds to the Character Select screen

<br/>