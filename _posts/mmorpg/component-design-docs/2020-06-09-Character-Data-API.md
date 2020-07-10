---
layout: documentation
title: Character Data API
category: mmorpg
tag: Component Design Documents
---

#### Description:
The Character Data API is used for storing and updating in-game Character information.  Character Data will consist of all character specific data that is required by the game client and game server in order to play.  Examples of Character Data fields will include stats and fields such as Max HP, Attribute Stats, Inventory, Equipment, Class Levels and ongoing Quests.  The actual fields will be updated and changed as development goes on (since the actual game design planning is still in progress.)

#### Features:
* will include an API endpoint that retrieves all Character Data provided a character id/name.

#### Tools:
* Express.js
* NoSQL Document Database

#### Design Considerations:
* since one User Account can have multiple Characters, I decided to split the Account and Character Data API's in favor of separating management and in-game related data.  Character Data is also meant to be constantly updating/changing.
* I've decided on using a Document-oriented NoSQL database for a few reasons:
    * I believe it'd be easier to organize character data in a way that's easier for the game servers to consume and use.
    * I don't believe we're going to need to aggregate data between Character documents (a feature that NoSQL documents generally struggle in)
    * NoSQL databases are more easily horizontally scalable since it's designed with partitioning and sharding in mind.
    * Character Data doesn't really require all the features that a tradition RDBMS SQL database provides, since mainly only the character's current Game Server Instance will be interacting with or updating the character's NoSQL information at any given time.
    * Since NoSQL is unstructured, it may help with general game development since the actual game design planning isn't completely finished at the time of this writing.

#### Process Flowcharts:

##### Updating Character's Information
* a Game Server Instance will query a Character's Data when creating their "pending connection" entry.
    * at this point the Game Server Instance is assumed to have the most updated version of the Character's Data
* after the Client connects to the Game Server Instance, the game server will handles all updates/changes to the Character's data locally/in memory.
    * these include events such as obtaining new items
    * gathering experience and leveling up
    * at this point the Game Server Instance's copy is ahead of the data in the NoSQL database
* the Game Server Instance then sends an update request to the Character Data API:
    * at set intervals (every X amount of seconds)
    * on Client Log Out or Client Disconnect
    * when the Character moves to a new area (and connects to a different Game Server Instance)
    * when a Character trades items with another Character (TBD)

<br/>