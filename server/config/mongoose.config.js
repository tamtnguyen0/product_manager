const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/project_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established connection with database'))
    .catch(err => console.log('Failed to connect to database', err));