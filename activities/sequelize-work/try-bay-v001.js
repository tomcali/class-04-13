// in-class application development
// lots of comments concern console.log output used in development

var logToFile = true; // use console.log to show where you are

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "trybay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query('SELECT * FROM items', function(err, res){
 if(err) throw err;
 console.log(res);
});

// helper function for logging to external file log.txt
function logToFileHelper(file, textData) {
  fs.appendFile(file, textData, 'utf8', function(err) {
    if (err) {
      throw err;
      console.log('log file writing error reported to log.txt');
    };
  });
}

// FUNCTIONS GO HERE

var validArgvSet = new Set(['new-item', 
  'post-bid', 
  'view-items']);

var operation = process.argv[2];

if (!validArgvSet.has(operation)) {
  console.log(); // blank line
  console.log('Invalid command. node liri.js requires one of four commands:');
  console.log(validArgvSet);
} else { // begin else-block for valid command entered
  switch (operation) { // begin major/outside switch statement
    case 'view-items':
      runTweets(viewItems);
      if (logToFile) console.log('running viewItems');
      break;

    case 'new-item':
      runTweets(newItem);
      if (logToFile) console.log('running new-item');
      break;

    case 'post-bid':
     runTweets(postBid);
    if (logToFile) console.log('running post-bid');
      break;
  }; // end switch for valid command entered
} // end of else statement corresponding to successful operation
