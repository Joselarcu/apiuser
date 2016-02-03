exports = module.exports = function(app, mongoose) {
    var userSchema = new mongoose.Schema({
        name: {
            type: String
        },
        surname: {
            type: String
        },
        age: {
            type: Number
        },
        gender: {
            type: String,
            enum: ['Male', 'Female']
        },
        email: {
            type: String
        }
    });

    mongoose.model('user', userSchema);
};
