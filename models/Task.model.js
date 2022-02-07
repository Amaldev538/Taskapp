const mongoose = require('mongoose');
 
//Attributes of the Task object
var TaskSchema = new mongoose.Schema({
TaskName: {
type: String,
required: 'This field is required!'
},
TaskId: {
type: String,
required: 'This field is required!'
}
});
 
mongoose.model('task', TaskSchema);
