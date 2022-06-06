const mongoose = require('mongoose');
const {Schema} = mongoose;

const choiceSchema = new Schema({
    choiceID: {
        type: Number,
    },
    diner1choice1: {
        type: String,
        required: [true, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner1choice2: {
        type: String,
        required: [true, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner1choice3: {
        type: String,
        required: [true, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner2choice1: {
        type: String,
        required: [true, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner2choice2: {
        type: String,
        required: [true, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner2choice3: {
        type: String,
        required: [true, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner3choice1: {
        type: String,
        required: [false, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner3choice2: {
        type: String,
        required: [false, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner3choice3: {
        type: String,
        required: [false, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner4choice1: {
        type: String,
        required: [false, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner4choice2: {
        type: String,
        required: [false, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner4choice3: {
        type: String,
        required: [false, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner5choice1: {
        type: String,
        required: [false, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner5choice2: {
        type: String,
        required: [false, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner5choice3: {
        type: String,
        required: [false, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner6choice1: {
        type: String,
        required: [false, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner6choice2: {
        type: String,
        required: [false, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner6choice3: {
        type: String,
        required: [false, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner7choice1: {
        type: String,
        required: [false, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner7choice2: {
        type: String,
        required: [false, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner7choice3: {
        type: String,
        required: [false, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
    },
    diner8choice1: {
        type: String,
        required: [false, 'Please enter your first choice.'],
        // min: [1, 'Please make a selection for your first choice.'],
        // max: [10, 'Please make a selection for your first choice.']
    },
    diner8choice2: {
        type: String,
        required: [false, 'Please enter your second choice.'],
        // min: [1, 'Please make a selection for your second choice.'],
        // max: [10, 'Please make a selection for your second choice.']
    },
    diner8choice3: {
        type: String,
        required: [false, 'Please enter your third choice.'],
        // min: [1, 'Please make a selection for your third choice.'],
        // max: [10, 'Please make a selection for your third choice.']
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