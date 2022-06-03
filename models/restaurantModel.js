const mongoose = require('mongoose');
const {Schema} = mongoose;

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name is required.'],
        minlength: [1, 'Must be at least one character.']
    },
    cuisine: {
        type: Array,
        required: [true, 'Cuisine category is required.'],
        minlength: [1, 'At least one cuisine category is required.']
    },
    priceRange: {
        type: Number,
        required: [true, 'Price range is required.'],
        min: [1, 'Minimum is 1, or $.'],
        max: [5, 'Maximum is 5, or no range limit.']
    },
    emoji: {
        type: String
    },
    dineIn: {
        type: Boolean
    },
    party6Plus: {
        type: Boolean
    },
    reservations: {
        type: Boolean
    },
    takeOut: {
        type: Boolean
    },
    distance: {
        type: Number,
        required: [true, 'Distance is required.'],
        min: [1, 'Minimum is 1, or less than 1 mile away.'],
        max: [4, 'Maximum is 4, or more than 5 miles away.']
    },
    dietaryNeeds: {
        type: Array
    },
    minorityOO: {
        type: Boolean
    }
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;