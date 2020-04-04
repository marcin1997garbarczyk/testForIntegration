let express = require('express');
let dbRequest = require('databaseJs');
let app = express();
let port = process.env.PORT || 3000;
console.log('@@@MAGAR'+__dirname+'/public');
console.log('@@@MAGAR'+JSON.stringify(process.env));
//setting middleware /
app.use(express.static(__dirname + '/public')); //Serves resources from public folder
app.use(express.urlencoded());
app.post('/*',function(req,res,next){
  console.log('@@@@@@@MAGAR IM HERE IN REQUEST');
	let urlInput = '';
	let emailInput = '';
	if(req.body.url_input) urlInput = req.body.url_input;
	if(req.body.email_input) emailInput = req.body.email_input;
	const requestObj = new dbRequest("select 42, 'hello world'", function(err, rowCount) {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
      }
    });

    requestObj.on('row', function(row) {
      row.forEach(function(cell) {
        console.log(cell.value);
      });
    });
    
	res.sendStatus(500,'Its 500 but its working '+req.body);
	// next();
})

let server = app.listen(port);
