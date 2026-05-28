const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.connect('mongodb+srv://abhisheks:ijgha3sbMNK0Hfsu@cluster0.ul6vz.mongodb.net/matriomony?retryWrites=true&w=majority&appName=Cluster0',)
            .then(() => console.log('Connected to MongoDB'))
            .catch(err => console.error('Could not connect to MongoDB', err));
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
}

module.exports = connectDB;