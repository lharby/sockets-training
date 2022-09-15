# Example app connecting a p5.js drawing via sockets.io

# prerequisites

-   NVM
-   Node (use v14.0.0 >)

# Running the app.

Execute `npm run start` in the terminal. This will open the app at port `http://localhost:3000`. Create drawings on the p5.js canvas. Open a new tab, browser etc at the same location, draw in the new canvas. This will send data back to the server and return it to the other connected sockets.
