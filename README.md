# highball
9-ball pool score tracker

# To do:
- Clean up function declaration in scoring.js
- Transparency on neutral balls
- Transparency/darkening on inactive balls
- Color on active 
- End of rack functionality
    - Rack reset (set innings to 0, set all balls to neutral) - determine if we want to use a modal/confirmation to make all balls neutral again.. default to when the 9 is tapped? or only if it's an increment of 10 total points (including dead)?
    - Scoring table after first 9 ball activated (display below innings. rack #, player 1 score, innings, dead, player 2 score. expands to the right - new rack #, tally of score dead, innings are just for that rack)
    - Need to consider what would happen if they "confirm" end of rack but need to go back and modify the score later -- should we track which balls each player made per rack instead of just points?
- 9 on snap, break & run incrementers for each player
- End of match functionality (when one player reaches goal number) - 
    - Scoring (20 point system, see below)
    - Data persistence
    - Modal to ask if they want to continue or reset.


- Nice to have functionality
    - Load previous match
    - Keep track of multiple matches (like a full league night, maybe even checking skill level max 23)

# rules
http://poolplayers.com/8-9-ball-Rules.pdf

# Current score sheet sample:
http://levid.com/cuescore-scoresheet.jpg

# Scoring:
http://forums.azbilliards.com/attachment.php?attachmentid=312822&stc=1&d=1389192454