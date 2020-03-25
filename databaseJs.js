  var Connection = require('tedious').Connection;

  var config = {
    server: "magarserver.database.windows.net",
    options: {},
    authentication: {
      type: "default",
      options: {  
        userName: "magar",
        password: "zaq1@WSX",
      }
    }
  };


  var connection = new Connection(config);

  connection.on('connect', function(err) {
    if(err) {
      console.log('Errorr: ', err)
    } else {
      console.log('@@@MAGAR Connection success');
      executeStatement();
    }
  });

  var Request = require('tedious').Request;

  function executeStatement() {
    const request = new Request("select 42, 'hello world'", function(err, rowCount) {
      if (err) {
        console.log(err);
      } else {
        console.log(rowCount + ' rows');
      }
    });

    request.on('row', function(row) {
      row.forEach(function(cell) {
        console.log(cell.value);
      });
    });

    connection.execSql(request);
  }