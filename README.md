# highball
Mobile-focused 9 ball pool scorekeeper
- Enter a name for each player and select their skill level
- Tap a ball to activate it and mark a point
- Touch and hold to mark a ball as dead
- Mark Innings, Defenses, Break & Runs, and 9 On The Snaps with the incrementer buttons (+/-).
    - If you mark the 9 as active and then increment a 9 On The Snap, all neutral balls will be marked as dead
- At the end of each rack (once all balls are either active or dead), the rack table will have a column added with player 1's point total, innings for that rack, dead balls for that rack, and player 2's point total.
    - Tap Next Rack to save this score and begin the next rack
    - Tap Edit Score to de-activate the 9 ball and adjust balls, innings, and defenses as needed

# Recent changes:
- Now live on [highball.pro](http://highball.pro)
- Added donate button
- Added instructions on welcome screen
- Adjusted formatting

# To do:

- SEO meta tags
- Menu for rooms/display latest rack score in portrait
- End of match UI (table? modal?)   
- Browser Inconsistencies:
    - Looks best on chrome android devices (phone size)
        - When launched from home screen shortcut, the URL bar is always visible and the app scrolls a tiny bit (bottom buttons can be cut off or the top half of player names can be cut off).
        - When launched in the chrome browser, URL bar can be hidden by scrolling up and down a few times
    - Tablet sizing still isn't perfect, but not terrible.
    - On iOS UI Web View (and older versions of Safari), tap delay of 300 ms can be annoying. Regular Safari is ok.
    - On iOS Chrome, no tap delay but the URL bar is always visible

# Future:
- Make league night version - keeps score for 5 matches... use the menu on the portrait screen to view match summaries

# Less-recent changes:
- Made dead ball check for end of rack -- fixed minor bug
- Detects if 9 ball is active and then 9OTS gets incremented and there are still neutral on the table. Marks all neutral balls dead.
- Froze left-most column of rack table
- Logo modified to transparent background with slight shadow on 9 ball
- Fixed rack table not activating when dead ball is the last selected
- Trimmed spaces from names
- Fixed issue on activate and de-activate the first ball
- End of match working (alerts!)
- Portrait end of rack score

# Older changes:
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
