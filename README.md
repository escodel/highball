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

- localStorage for player names with attributes (skillLevel, games won), scores per game (along with current game score)
  players: [
  {
  id: uuid,
  name: string,
  skillLevel: int,
  gamesWon: int
  },
  ...
  ],
  scorekeeper: {
  id: id (from players)
  },
  games: [
  {
  id: uuid,
  inProgress: boolean,
  player1id: id (from players),
  player2id: id (from players),
  p1score: int,
  p2score: int.
  winner: player1id / player2id <-- if !inProgress,
  scoreKeeper: id (from players?),
  startTime: Date.now(),
  endTime: date object,
  tableStatus: [
  {
  // each ball has properties
  },
  ...
  ]
  },
  ...
  ]
- existing vs new players
- need current "who you are" player?

# Recent changes:

- Made inactive balls easier to see - white circle and ball # are hidden once the opposing rack has scored that ball
- Now live on [highball.pro](http://highball.pro)
- Added donate button
- Added instructions on welcome screen
- Adjusted formatting

# To do:

- SEO meta tags
- Donate button looks weird on iOS - maybe webkit-appearance?
- Menu for rooms/display latest rack score in portrait
- End of match UI (table? modal? Match Points Earned, total # innings, reset with confirmation)
- Browser Inconsistencies:
  - Looks best on chrome android devices (phone size)
    - When launched from home screen shortcut, the URL bar is always visible and the app scrolls a tiny bit (bottom buttons can be cut off or the top half of player names can be cut off).
    - When launched in the chrome browser, URL bar can be hidden by scrolling up and down a few times
  - Tablet sizing still isn't perfect, but not terrible.
  - On iOS UI Web View (and older versions of Safari), tap delay of 300 ms can be annoying. Regular Safari is ok.
  - On iOS Chrome, no tap delay but the URL bar is always visible

# Future:

- Menu system on portrait
- Make league night version - keeps score for 5 matches... use the menu on the portrait screen to view match summaries
  - Tournament edition could follow this - calculating match points needed to win the round (51 cumulative match points earned or 50 points with 3 wins)
  - Need to decide if we want to go with single page version or separate pages with routing.
- Handicap/lineup calculator
- 8 ball version (or non-points 9 ball)
- Record player/team data, look into getting/posting to web services

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
- when dead is rezzed, it automatically adds a point. after a press, the click is being triggered. google hammerjs "ghost click" for more info. I got a stupid work-around going where it triggers click once, so if you release press fast enough you can't tell that it's re-activating.
- Editing from the browser, not sure if this works. But it looks like maybe that ghost click thing only happens in a browser, when emulating a device tapping, it might be ok. Might have to detect if it's actually mobile or just handle the ghost clicks differently. I don't know.

Data Structure

- Match (1v1, but how many players total? Teams? Two modes: match or single game?)
  - Game (how many total for a complete match?)
    - Ball status/score
- Player Info
  - Name
  - Player No.
  - Team No. (if applicable)
  - Skill Level
  - Ball Count (corresponds to skill level)
  - Winner of lag goes first
- Scoring
  - 1 point for 1-8, 2 points for pocketing 9 ball
  - Balls pocketed on scratches or fouls do not count
  - Alternate direction of slashes through each number for each game
  - Whoever reaches their number first wins the match
  - Each game separated by perpendicular line after it ends
  - P1 score and P2 score plus Dead Ball points must equal 10
  - 9S is a 9 on the Snap; pockets 9 ball when breaking at beginning of a game; write 9S in the innings section of that game
  - BR is a Break and Run (where player pockets all of the balls in legal succession); write BR in the innings section of that game
  - Total 9S and BR for each game and write it at the end of the match
  - When a team takes a timeout, mark a "T" in the corner of the score section for the appropriate player
  - Defensive Shots are where a player has no intention of pocketing a ball on any given shot
  - Defensive shots are either legal/ethical for defensive purposes; others are known as "sandbagging" to manipulate one's handicap; tallied at the end section of match
- Gameplay

  - 2nd player (who lost the lag) completes each inning
  - An Inning isn't over until the 2nd player misses or fouls
  - Dead ball is a point not credited to either player (scratching or fouling)
  - Or balls left of the table when the 9 ball is made early
  - Hashes indicated each dead ball point (2 in the case of the 9) with the number then printed for each game to keep a running total
  - 3 scratches in a row is automatic loss

  9 on the snap is whatever balls you make on the break, then count the dead balls separate

  Make an option for winner break vs alternate break
