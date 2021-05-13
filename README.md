# Ticket Viewer App
by Brandon Robertson

## Installation:
1. Clone the repo or download and unzip the file in the email (zip in email will have .env file for username and password)
2. From the folder you used to clone the repo or unzip the downloaded file to use ``cd brandon_robertson_zendesk_challenge`` to get into the root of the project
3. Use ``npm install`` to install all Node.js dependencies
4. Use ``cd client`` to go into the React.js folder
5. Use ``npm install`` to install React.js dependencies
6. If you cloned the repo from Github you will need to download the zip file from the email to get the .env file to put in the ``brandon_robertson_zendesk_challenge`` folder
7. Use ``npm run app`` to run both the apps at the same time
8. Go to http://localhost:3000 to access the app

## Usage:
- http://localhost:3000/
  - will display all tickets
- http://localhost:3000/:id
  - will display the ticket with matching ID

## Tests:
To run the tests make sure you are in the ``brandon_robertson_zendesk_challenge`` folder then you need to use ``cd test`` to access the test folder then run ``mocha test.js``

## Libraries:
In this project I used a handful of libraries mostly just to make it easier to server the data.

- Express
  - I used Express to run a server where I call the Zendesk API to retrieve data and send it to my React.js frontend.
- Axios
  - I used Axios to be how I did all my GET requests because I found it easiest to setup Basic Auth for the Zendesk API but also it was a small size.
- Lodash(Chunk)
  - I used the Lodash Chunk function to get the pagination of 25 tickets per page, I thought it made sense to pull all current tickets and then serve them in static data on the All component.
- Concurrently
  - I used Concurrently to help the user start both parts of the app at the same time, it's not a necessary library but it just makes it easier to start it. 
- Chai/Mocha
  - I used Chai for running my tests.
- Nodemon
  - I used Nodemon just while I was building the Node/Express server so I don't have to restart it each time.
