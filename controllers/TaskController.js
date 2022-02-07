const express = require('express');
const mongoose = require('mongoose');

var router = express.Router();

const task = mongoose.model('task');
 
router.get('/',(req, res) => {
res.render("Task/TaskAddEdit", {
viewTitle: "Insert a New Task"
});
});
 
router.post('/', (req,res) => {
if (req.body._id == '')
insertIntoMongoDB(req, res);
else
updateIntoMongoDB(req, res);
});
 
function insertIntoMongoDB(req,res) {
var Task = new task();
Task.TaskName = req.body.TaskName;
Task.TaskId = req.body.TaskId;
Task.TaskDuration = req.body.TaskDuration;
Task.TaskFee = req.body.TaskFee;
Task.save((err, doc) => {
if (!err)
res.redirect('Task/list');
else
console.log('Error during record insertion : ' + err);
});
}
 
function updateIntoMongoDB(req, res) {
task.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
if (!err) { res.redirect('Task/list'); }
else {
if (err.name == 'ValidationError') {
handleValidationError(err, req.body);
res.render("Task/TaskAddEdit", {


viewTitle: 'Update Task Details',
employee: req.body
});
}
else
console.log('Error during updating the record: ' + err);
}
});
}
 
router.get('/list', (req,res) => {
task.find((err, docs) => {
if(!err){
res.render("Task/list", {
    list : docs.map(docs => docs.toJSON())
});
}
else {
console.log('Failed to retrieve the Task List: '+ err);
}
});
});

router.get('/:id', (req, res) => {
task.findById(req.params.id, (err, doc) => {
if (!err) {
res.render("Task/TaskAddEdit", {
viewTitle: "Update Task Details",
Task: doc
});
}
});
});
 
router.get('/delete/:id', (req, res) => {
task.findByIdAndRemove(req.params.id, (err, doc) => {
if (!err) {
res.redirect('/Task/list');
}
else { console.log('Failed to Delete Task Details: ' + err); }
});
});
 
module.exports = router;