var express = require('express')
var app = express()

app.route('/')
    .get(function (req, res) {
        res.send('Add task')
    })
app.route('/tasks')
    .get(function (req, res) {
        if (req.query.done === '1') {
            res.send(['lessons', 'cinema'])
        }
        res.send(['lessons', 'cinema', 'reading'])
    })
    .post(function (req, res) {
        res.send('Success')
    })
app.route('/tasks/:id')
    .delete(function (req, res) {
        // res.send('delete task ' + req.params.id)
        res.json({id: req.params.id})
    })
    .put(function (req, res) {
        res.send("updated " + req.params.id)
    })

//The 404 Route (ALWAYS Keep this as the last route)
app.get('*', function(req, res){
    res.send('WRONG URL', 404);
});

app.listen(8080)