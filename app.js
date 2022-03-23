import { renderDriverStandings } from './render-utils.js';
import { getDriverStandings } from './fetch-utils.js';
// import functions and grab DOM elements

const driverStandingsEl = document.querySelector('#driverStandings'); 

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener('load', displayStandings);

async function displayStandings() {
    const driverStandingsArray = await getDriverStandings();

    for (let driver of driverStandingsArray) {
        const driverEl = renderDriverStandings(driver);

        driverStandingsEl.append(driverEl);
    }
}
