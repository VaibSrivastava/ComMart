const mongoose = require('mongoose');
const url='mongodb+srv://vs2144955:vaibhav1256@cluster0.s2cooy5.mongodb.net/mydatabase?retryWrites=true&w=majority'

mongoose.connect(url)

//asynchronous function
.then((result) => {
    console.log('connected to mongodb');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;
