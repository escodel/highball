# highball
9-ball pool score tracker

# Recent changes:
- Updated the Edit Score and Next Rack buttons to show/hide; reset rack functionality working. ~~However, dead balls reset, which throws off the modulo calculation (% 10) and causes the buttons to not reappear.~~
- Added borders for all balls
- Added word "Balls" to dead, made lower cased innings, added line break after dead balls before counter.
 - Ball color CSS, opacity and dead functionality included in ballColorCSS branch
 - Changed press functionality - only neutral balls can be marked dead. Active and Inactive press isn't recognized, operates as a normal tap.
- when dead is rezzed, it automatically adds a point. after a press, the click is being triggered. google hammerjs "ghost click" for more info. I got a stupid work-around going where it triggers click once, so if you release press fast enough you can't tell  that it's re-activating.
- Editing from the browser, not sure if this works. But it looks like maybe that ghost click thing only happens in a browser, when emulating a device tapping, it might be ok. Might have to detect if it's actually mobile or just handle the ghost clicks differently. I don't know.

# Feedback:
- Adriane thinks it looks great but has a few ideas:
  - For the end-of-rack/previous rack scoring table, consider putting this in a popup/overlay/modal that only shows up when a button is pressed (or maybe at the end of each rack when the 9 ball is counted).
  - It might look cluttered if we put the scoring table below innings as it currently looks - we could move the innings counter below score and above dead, or put it in the same row as points needed / dead, or follow the suggestion above where it only shows up at end of rack and when another button is clicked.
  - It might be useful to have an alternative view where EVERYTHING is reset per-rack -- so that the most visible points counter is reset to 0-0 for each new rack as well as defenses. Ward disagrees but this could be a setting or something.. so that the running total is only visible from the scoring table. We could also have an option to make "Points Needed" decline 

# To do:
- Clean up function declaration in scoring.js
- Color scheme for the whole app (if needed for score table, headers, score...)
- Transparent border for inactive
- End of rack functionality
    - ~~Rack reset (set innings to 0, set all balls to neutral) - determine if we want to use a modal/confirmation to make all balls neutral again.. default to when the 9 is tapped? or only if it's an increment of 10 total points (including dead)?~~
    - ~~if (!(currentScore % 10)) {doEndOfScoreFunction() }~~
    - ~~Scoring table after first 9 ball activated (display at top middle. rack #, player 1 score, innings, dead, player 2 score. expands to the right - new rack #, innings are just for that rack, dead are just for that rack)~~
    - ~~Two buttons appear at end of rack - maybe block other buttons until one of these is pressed - Edit Score (red/cancel)  and Next Rack (green/confirm).~~
    - MAYBE in future have table open into modal that is editable, but this could get tricky.
    - If you hit edit score, what happens? just unmark 9-ball and decrement?
- 9 on snap, break & run incrementers for each player
- End of match functionality (when one player reaches goal number) - 
    - Scoring (20 point system, see below)
    - Data persistence
    - Modal to ask if they want to continue or reset. Also need "oops" button if the final point was marked in error - unmark most recently marked point.


- Nice to have functionality
    - Load previous match
    - Keep track of multiple matches (like a full league night, maybe even checking skill level max 23)

# rules
http://poolplayers.com/8-9-ball-Rules.pdf

# Current score sheet sample:
http://levid.com/cuescore-scoresheet.jpg

# Scoring:
http://forums.azbilliards.com/attachment.php?attachmentid=312822&stc=1&d=1389192454


