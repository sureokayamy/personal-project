// const Choice = require('../../models/choiceModel');
// const Restaurant = require('../../models/restaurantModel');
// const Diners = require('../../models/dinersModel');

console.log('Scripts is connected!');


//add event listener for when index form is posted, store in variables
let dinerButton = document.querySelector('#diner-button');

let choiceForm = document.querySelector("#choiceForm");

const insertChoiceForms = () => {

};

const getDinerInfo = () => {
    console.log('The button has been clicked, running getDinerInfo.');
    let numDiners = document.querySelector("#numDiners").value;
    let distance = document.querySelector("#distance").value;
    let zipcode = document.querySelector("#zipcode").value;
    let priceRange = document.querySelector("#priceRange").value;
    console.log('Number of diners: ', numDiners);
    console.log('Distance away: ', distance);
    console.log('Zipcode: ', zipcode);
    console.log('Price Range: ', priceRange);
    return numDiners, distance, zipcode, priceRange;
};

const addIs = (numDiners) => {
    console.log('The button has been pushed, running addIs')
    // //select where to insert the i's
    const iContainer = document.querySelector('#extraIs');
    // // //create new span element to contain i
    const span = document.createElement('span');
    // // //store the string we want displayed in a variable
    const i = 'i';

    // // const {_id} = req.params;
    // //     Diners.find({_id: _id}, (error, dinersInfo) => {
    // //         if(error) {
    // //             return error;
    // //         } else {
    // //             const numIs = dinersInfo.numDiners;
    // //             return numIs;
    // //         };
    // //     });

    // let numDiners = document.querySelector('#numDiners').value;
    // console.log(numDiners);
    for (let j = 2; j < numDiners; j++) {
        span.appendChild(document.createTextNode(i));
        iContainer.appendChild(span);
    };    
};

//Run the i loop on other pages so that the number of i's in diinder displays on the choice and results pages





//change # of i's in diinder to be number of diners
//bind that function to the event (i hope!!)
// dinerButton.addEventListener('click', getDinerInfo);
// dinerButton.addEventListener('click', addIs);
// window.addEventListener('load', addIs);

//add event listener for when choices form is posted, store all info in variables then calculate the winner winner chicken dinner!

//add event listener for when challenge button is pushed, then a randomizer