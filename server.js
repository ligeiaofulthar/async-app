// express to run server and routes
const express = require('express')

// start-up instance of app
const app = express();

/* include dependencies */
//bodyParser as middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//cors
const cors = require('cors')
app.use(cors());

/* Initializing the main project folder */
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, listening);

function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}

//app endpoint
let projectData = {};

// Add a GET route that returns the projectData object in your server code
// Then, add a POST route that adds incoming data to projectData.
// The POST route should anticipate receiving three pieces of data from the request body
// temperature
// date
// user response
// Make sure your POST route is setup to add each of these values with a key to projectData.

/* get route */
app.get('/', function(req, res) {
    res.send(projectData);
    console.log(projectData);
});

/* post route */

app.post('/add', addData);

function addData (req, res){
    // console.log(req.body)

    // let newData = {
    //     temperature: responseData.temp,
    //     date: responseData.date,
    //     userResponse: responseData.userResponse
    // }
    // projectData.assign(req.body)
    // Object.assign(projectData, newData);
    // console.log("Wwork22");

  // console.log(request.body)
  let data = req.body;
  console.log(data.temp);
  // Create new entry for JS Object Endpoint
  projectData["temp"] = data.temp;
  projectData["date"] = data.date;
  projectData["user"] = data.user;
  // Send response to Endpoint
  res.send(projectData);
}