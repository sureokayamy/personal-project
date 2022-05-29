const mongoose = require('mongoose');
const {Schema} = mongoose;

const dinersSchema = new Schema({
    dinerID: {
        type: Number,
    },
    numDiners: {
        type: Number,
        required: [true, 'The number of diners is required.'],
        min: [2, 'There must be at least 2 diners.'],
        max: [8, 'The maximum numbers of diners is 8.']
    },
    distance: {
        type: Number,
        required: [true, 'Distance is required.'],
        min: [1, 'Minimum is 1, or less than 1 mile away.'],
        max: [4, 'Maximum is 4, or more than 5 miles away.']
    },
    zipcode: {
        type: String,
        required: [true, 'Zipcode is required.'],
        minlength: [5, 'Must be 5 characters long.'],
        maxlength: [5, 'Must be 5 characters long.']
    },
    priceRange: {
        type: Number,
        required: [true, 'Price range is required.'],
        min: [1, 'Minimum is 1, or $.'],
        max: [5, 'Maximum is 5, or no range limit.']
    },
});

const Diners = mongoose.model('Diners', dinersSchema);

module.exports = Diners;