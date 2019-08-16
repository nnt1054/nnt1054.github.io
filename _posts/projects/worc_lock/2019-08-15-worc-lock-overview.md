---
layout: post
title:  Worc_Lock Overview
date:   2019-08-15
categories: projects
tags: worc_lock
---

Project Repo: [Github](https://github.com/nnt1054/Worc_Lock)

#### Overview
A personal virtual work clock that allows the user to ‘clock in’ and ‘clock out’ of their own productivity hours.  The local server logs and stores each work period entry into a SQLite database.  The user interface displays a stopwatch for starting and stopping work, a timesheet table of working entries, a summary time series chart and the amount of hours worked this week.

[![worc_1](/assets/images/worc_lock_pictures/worc_1.png){: class="column post-image"}](/assets/images/worc_lock_pictures/worc_1.png)
{: class="column"}

The project features a:

- CRUD API for the SQLite database using node and express.js with proper API endpoints and methods.
- Responsive React.js user interface using **material-ui** and the **recharts** library.
- custom EditableTableRow component for creating and editing displayed database entries.

##### Editable Rows:

[![worc_2](/assets/images/worc_lock_pictures/worc_2.png){: class="column post-image"}](/assets/images/worc_lock_pictures/worc_2.png)
{: class="column"}

Some Design Notes:  There are two 'node packages' within the project, the parent package being the node/express.js API server, which serves the build of the second package, the react application.
