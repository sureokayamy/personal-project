const mongoose = require('mongoose');
const {Schema} = mongoose;

const choiceSchema = new Schema({
    choice1: {
        type: Array,
        required: [true, 'Please enter your first choice.'],
        minlength: [1, 'The minimum length is 1 character.'],
    },
    choice2: {
        type: Array,
        required: [true, 'Please enter your second choice.'],
        minlength: [1, 'The minimum length is 1 character.'],
    },
    choice3: {
        type: Array,
        required: [true, 'Please enter your third choice.'],
        minlength: [1, 'The minimum length is 1 character.'],
    },
    allergy: {
        type: String,
        required: [false, ''],
    },
    glutenFree: {
        type: String,
        required: [false, ''],
    },
    halal: {
        type: String,
        required: [false, ''],
    },
    kosher: {
        type: String,
        required: [false, ''],
    },
    vegan: {
        type: String,
        required: [false, ''],
    },
    vegetarian: {
        type: String,
        required: [false, ''],
    }
});

const Choice = mongoose.model('Choice', choiceSchema);

module.exports = Choice;