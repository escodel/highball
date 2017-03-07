# highball
9-ball pool score tracker

# Recent changes:
- Orientation fixed so that portrait displays landing view and landscape displays main app view.
- Favicons and app icon added. Can now Add to Home Screen on ios and android.
- 9 on snap, break & run incrementers for each player.
- Updated the Edit Score and Next Rack buttons to show/hide; reset rack functionality working.
- Added borders for all balls
- Added word "Balls" to dead, made lower cased innings, added line break after dead balls before counter.
 - Ball color CSS, opacity and dead functionality included in ballColorCSS branch
 - Changed press functionality - only neutral balls can be marked dead. Active and Inactive press isn't recognized, operates as a normal tap.
- when dead is rezzed, it automatically adds a point. after a press, the click is being triggered. google hammerjs "ghost click" for more info. I got a stupid work-around going where it triggers click once, so if you release press fast enough you can't tell  that it's re-activating.
- Editing from the browser, not sure if this works. But it looks like maybe that ghost click thing only happens in a browser, when emulating a device tapping, it might be ok. Might have to detect if it's actually mobile or just handle the ghost clicks differently. I don't know.

# Feedback round 1:
- Adriane thinks it looks great but has a few ideas:
  - For the end-of-rack/previous rack scoring table, consider putting this in a popup/overlay/modal that only shows up when a button is pressed (or maybe at the end of each rack when the 9 ball is counted).
  - It might look cluttered if we put the scoring table below innings as it currently looks - we could move the innings counter below score and above dead, or put it in the same row as points needed / dead, or follow the suggestion above where it only shows up at end of rack and when another button is clicked.
  - It might be useful to have an alternative view where EVERYTHING is reset per-rack -- so that the most visible points counter is reset to 0-0 for each new rack as well as defenses. Ward disagrees but this could be a setting or something.. so that the running total is only visible from the scoring table. We could also have an option to make "Points Needed" decline 
  
# Feedback round 2:
- ~~Ball size could be larger - still only accurate about 85% of the time~~
- 9 on the snap marking dead balls is tedious. I think the proper functionality should be that a user can mark any balls they made (for instance the 3 and 6) and then hit the 9OS + button and it would mark all of the neutral balls dead (1,2,4,5,7,8) and activate the 9. Still show the standard end of rack functionality so they can reset/modify if needed
- End of match functionality still needs to be done (scoring too)
- Need to recognize end of rack when marking dead balls (if I make the 9 early and there was still an 8 ball on the table, I mark the 8 as dead but it doesn't recognize that the rack has ended. current solution is to neutralize 9 ball and mark it as mine again).
- Entering player name looks weird (placeholder text/points needed looks weird)
- ~~Buttons look weird on iOS chrome (physical, not emulated)~~


# To do:
- implement Hammertime to reduce click/touch delay.
- lock zoom (iOS thing, escodel knows what this is).. may not be adding this.
- Clean up function declaration in scoring.js
- End of match functionality (when one player reaches goal number) - this is in-progress on branch endOfMatch
    - Scoring (20 point system, see below) - conditions are done and returning values properly, but I'm only notifying the player through an alert box.
    - Data persistence (defer)
    - Modal to ask if they want to continue or reset. Also need "oops" button if the final point was marked in error - unmark most recently marked point. I think it should look like <player name> wins! Final score 14-6. Total Innings: 26. Then have two buttons: keep playing or Reset (maybe with a confirmation on the reset button)
- End of rack functionality: right now it only triggers when the 9 ball is tapped and module 0. Would like this to happen when any bal is tapped or dead ball is marked so that you don't have to tap the 9 ball to initiate end of rack.
- Tablet responsiveness (button padding, fonts, 
- Think about monetization, official hosting, license
- Think about modifying logo - try different background color or leaving the main favicon the same but putting the vertical/welcome screen as darker/no background

- Nice to have functionality
    - Load previous match
    - Keep track of multiple matches (like a full league night, maybe even checking skill level max 23)

# rules
http://poolplayers.com/8-9-ball-Rules.pdf

# Current score sheet sample:
http://levid.com/cuescore-scoresheet.jpg

# Scoring:
http://forums.azbilliards.com/attachment.php?attachmentid=312822&stc=1&d=1389192454


