var mysql = require('mysql')
var express = require('express')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')
var app = express()
var connection

//DB connection function
function DBconnect() {
    connection = mysql.createConnection({
        host: '192.168.20.20',
        user: 'root',
        password: '',
        database: 'ToDoList'
    })
    connection.connect()
}

//query template function
function querying(query, param,  req, res) {
    DBconnect()
    connection.query(query,[param], function (error, results, fields) {
        if (error) {
            res.json(error)
        }
        res.json(results)
    })
    connection.end()
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))   //Files that is static(like css, js etc)
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.route('/')
    .get(function (req, res) {
        res.render('home')
    })
app.route('/tasks')
    .get(function (req, res) {
        var query = 'SELECT * FROM tasks'
        querying(query, null, req, res)
    })
    .post(function (req, res) {
        var query = 'INSERT INTO tasks(task) VALUE (?)'
        querying(query, req.body.task, req, res)
    })
app.route('/tasks/:id')
    .delete(function (req, res) {
        var query = 'DELETE FROM tasks WHERE id=?'
        querying(query, req.params.id, req, res)
    })
    .put(function (req, res) {
        var query = 'UPDATE tasks SET done = 1 WHERE id=?'
        querying(query, req.params.id, req, res)
    })

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.send('WRONG URL', 404);
});

app.listen(8080)