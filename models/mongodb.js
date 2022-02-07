const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://user3:user3@cluster0.u7fov.mongodb.net/Cluster0?retryWrites=true&w=majority', {useNewUrlParser: true}, (err) => {
if (!err) {
console.log('Successfully Established Connection with MongoDB')
}
else {
console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
}
});
 
//Connecting Node and MongoDB
require('./Task.model');
