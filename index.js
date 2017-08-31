var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/~gbayomi/:id', function(req, res){
	var par_id = req.params.id;
 	par_id = par_id.replace('\+', '\/')
    var redi = '/' + par_id;
    res.redirect(redi)
});

app.get('/~gbayomi', function(req, res){
    res.redirect('/')
});


app.use('/', express.static(__dirname));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


