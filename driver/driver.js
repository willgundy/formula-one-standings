import { getSingleDriverDetail } from '../fetch-utils.js';
import { renderDriverDetails } from '../render-utils.js';
// import functions and grab DOM elements

const main = document.querySelector('main'); 

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', displayDriver);

async function displayDriver() {
    const parameter = new URLSearchParams(window.location.search);
    
    const driverInformation = await getSingleDriverDetail(parameter.get('id'));
    
    const detailsEl = renderDriverDetails(driverInformation);

    main.append(detailsEl);
}
