---
layout: documentation
title: Questing API
category: mmorpg
tag: Component Design Documents
---

#### Description:
The Questing API is used to manage and store quest data, progress and completion for each Character.  We will be dividing different types of quests into Main Story Quests(MSQ) and Side Quests.  MSQ will be a linear series of quests that denote either the 'Main Story' or 'Class Story' while Side Quests are generally nonlinear one-off quests.  Since MSQ is linear in terms of quest orders we only need to store the "current/next quest" and have each quest refernce the next one in a linked list sort of fashion.  Each Character needs to store a limited amount of MSQ progress (one for main story and one for each available class).  Since Side Quests will be optional to complete, we need to store an entry for a character and each of their completed side quests.  since we only need to store the "current" quest for each MSQ as opposed to a list/entry of all completed side quests, I'm currently planning on separting the two types into different databases accordingly.
The actual scripting and coding of actual Quest objects are however still TBD

#### Features:
* responds to queries of a Character's current MSQ progress for both the Main Story and all subsequent Class Stories
* responds to queries of all of a Character's completed Side Quests in a specified area

#### Tools:
* Express.js
* NoSQL (TBD)
    * was originally asssuming MySQL for side quests, but now I'm backtracking on that decision

#### Design Considerations:
* I felt that creating this as a separate API was necessary since unlike the data stored in the Character Data API, the list of each Character's completed quests should seldomly change and could grow to be an overly large list.  For these reasons, I would like to avoid storing run-on lists of completed quests in the Character's NoSQL database and will store it separately in tentatively a normal SQL database.
* On-Going quest data however will be stored in the Character Data since those are necessary to track quest progress and are subject to changes more often.
* The main queries that the Questing API will be receiving are for a list of all quests completed by a Character given out in a specific area.
    * assuming this will be stored using NoSQL again, the query would look similar to: `{"characterID": lambseel", "area": "area01"}`
* The MSQ and Side Quests differentiation was necessary since we need to be able to track MSQ quests from anywhere in the in-game world, while Side Quests are only relevant to the area they're assigned.  This way:
    * we can query only the necessary Side Quest completion entries as necessary (when a character enters a new area)
    * and MSQ progress can be queried separately without requesting any overhead of unnecessary quest data.

#### Process Flowcharts:

##### Accepting a Quest:
* when a Game Server Instance is started, it requests all relevant Quest metadata from the Questing API
* when a Character connects to a Game Server Instance, the GSI requests the Character's:
    * Player Data (which includes On-Going Quest Data)
    * Story Quest Progress for Main Story and Class Stories
        * This is only done if the Character has just Logged In (and not just moving to a new area)
    * List of Character's completed Side Quests in the current Area
* The Game Server Instance sends all relevant Game Data to the Client
* When the Client loads in the map and NPC's
    * each NPC will contain information for all of their available quests
    * The Client will iterate through the NPC's quests and check with their Side Quest progress to check if the NPC is offering any available/acceptable quests
* In the Client Side:
    * The Character can walk up to the NPC or click on the NPC to open up the quest dialogue
    * Clicking the "Accept Quest" button at the end of the dialogue sends an "Accept Quest" message to the Game Server Instance
* The Game Server Instance sends an API request to the Questing API to update and verify that the character can accept the quest.
* The Game Server Instance responds back to the Client with an OK on accepting the quest
    * both the Game Server Instance and Client can then update their Character's "On-Going Quests" Data field and recalculate the Status of NPC's in the area.

<br/>