import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final*/

let infoWanted;

for(let i = 0; i < fifaData.length; i++)
{
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final")
  {
    infoWanted = fifaData[i]["Home Team Name"];
    break;
  }
}
console.log(infoWanted);

/* (b) Away Team name for 2014 world cup final */
let infoWanted;

for(let i = 0; i < fifaData.length; i++)
{
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final")
  {
    infoWanted = fifaData[i]["Away Team Name"];
    break;
  }
}
console.log(infoWanted);

/* (c) Home Team goals for 2014 world cup final */
let infoWanted;

for(let i = 0; i < fifaData.length; i++)
{
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final")
  {
    infoWanted = fifaData[i]["Home Team Goals"];
    break;
  }
}
console.log(infoWanted);
/* (d) Away Team goals for 2014 world cup final */
let infoWanted;

for(let i = 0; i < fifaData.length; i++)
{
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final")
  {
    infoWanted = fifaData[i]["Away Team Goals"];
    break;
  }
}
console.log(infoWanted);
/* e) Winner of 2014 world cup final */
let infoWanted;

for(let i = 0; i < fifaData.length; i++)
{
  if (fifaData[i].Year === 2014 && fifaData[i].Stage === "Final")
  {
    infoWanted = fifaData[i]["Win conditions"];
    break;
  }
}
console.log(infoWanted);


console.log(fifaData.stage);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    let newArrayOfData = [];

    for(let i = 0; i < fifaData.length; i++)
    {
        if (fifaData[i].Stage === "Final")
        {
            newArrayOfData.push(fifaData[i]);
        }
    }
    return newArrayOfData;
}

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinalsArray) {
    let newArrayOfDataTwo = [];

    for(let i = 0; i < getFinalsArray.length; i++)
    {
        newArrayOfDataTwo.push(getFinalsArray[i].Year);
    }
    return newArrayOfDataTwo;
}

console.log(getYears(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(getFinalsArray) {
    let newArrayOfDataThree = [];

    for(let x = 0; x < getFinalsArray.length; x++)
    {
        newArrayOfDataThree.push(getFinalsArray[x]["Win conditions"]);
    }
    return newArrayOfDataThree;
}

console.log(getWinners(getFinals(fifaData)));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinnersArray, getYearsArray) {
    let newArrayOfDataFour = [];

    for(let i = 0; i < getWinnersArray.length; i++)
    {
        newArrayOfDataFour.push(`In ${getYearsArray[i]}, ${getWinnersArray[i]} won the world cup!`);
    }
    return newArrayOfDataFour;
}

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let arrayForAverageHome = [];
    let arrayForAverageAway = [];
    let numberWeWantHome = 0;
    let numberWeWantAway = 0;

    for(let i = 0; i < data.length; i++)
    {
        arrayForAverageHome.push(data[i]["Home Team Goals"]);
        arrayForAverageAway.push(data[i]["Away Team Goals"]);
    }

    for (let i = 0; i < arrayForAverageHome.length; i++)
    {
        numberWeWantHome += arrayForAverageHome[i];
        numberWeWantAway += arrayForAverageAway[i];
    }

    numberWeWantHome = numberWeWantHome / arrayForAverageHome.length;
    numberWeWantAway = numberWeWantAway / arrayForAverageAway.length;

    return `The average goal for Home is ${numberWeWantHome} and the average goal for Away is ${numberWeWantAway}!`;
}

getAverageGoals(fifaData);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
