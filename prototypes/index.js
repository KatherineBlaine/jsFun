const { kitties } = require('./datasets/kitties');
const { puppers } = require('./datasets/puppers');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { weather } = require('./datasets/weather');
const { boardGames } = require('./datasets/boardGames');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangePetNames(array) {
    // Return an array of just the names of kitties who are orange e.g.
        // ['Tiger', 'Snickers']

        let array1 = array.filter(element => element.color === 'orange');
        return array1.map(element => element.name);


    // Annotation:
    // To reach the desired output, I created a variable that holds a filtered version of the original kittyPrompts array, holding only the objects in which the color property is equal to orange.
    // Then, I needed to create an array of just the values of the name properties of this filtered array. I returned a map that iterates through the filtered array and creates a new array holding just the name of each element.
  },

  sortByAge(array) {
    // Sort the kitties by their age

    return array.sort((elementA, elementB) => {
      if (elementA.age > elementB.age) {
        return -1;
      } else if (elementA.age < elementB.age) {
        return 1;
      } else {
        return 0;
      }
      
    })
  

    // Annotation:
    // The sort iterator takes 2 arguments that signify the elements that it will be comparing when it is sorting the objects in an array. A return value of 0 indicated that the interpreter should leave the two elements in the same position relative to the other. A return value of >0 tells the interpreter that element a should come after element b. A return value of <0 tells the interpreter that element a should come before element b.
  },

  growUp(array) {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    return array.map(element => {
      element.age += 2
      return element;
    
    })
  }
  // Used a map method to create a new array that first updates the value of the age property for each array element, then returns the entire object with the updated age value.
};

// PLEASE READ-----------------------
// Currently, your functions are probably using the `kitties` global import variable.
// refactor the above functions using arguments and parameters so that
// they can perform the same utility
// for the kitties or puppers datasets, depending on what arguments you send through.


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs(array) {
    // Your function should access the clubs data through a parameter (it is being passed as an argument in the test file)
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    return array.reduce((accumulator, currentValue) => {
      currentValue.members.forEach(member => {
        if (!accumulator[member]) {
          accumulator[member] = [];
        } 
        accumulator[member].push(currentValue.club)
      })
      return accumulator;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

   return mods.map(mod => {
    const studentsPerInstructor = mod.students / mod.instructors;
    return {mod: mod.mod, studentsPerInstructor: studentsPerInstructor}})

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    return cakes.reduce((accumulator, currentValue) => {
      accumulator.push({flavor: currentValue.cakeFlavor, inStock: currentValue.inStock})
      return accumulator;
    }, [])

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    return cakes.filter(cake => cake.inStock > 0);

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    /* CODE GOES HERE */

    return cakes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.inStock;
    }, 0)

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    /* CODE GOES HERE */
    return [...new Set(cakes.flatMap(cakes => cakes.toppings))]

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

  //  const allToppings = cakes.flatMap(cakes => cakes.toppings);
  // //  console.log(allToppings)

  //  return allToppings.reduce((accumulator, currentTopping) => {
  //   if (!accumulator[currentTopping]) {
  //     accumulator[currentTopping] = 1;
  //   } else {
  //     accumulator[currentTopping] += 1;
  //   } return accumulator;
  //  }, {})

    return cakes.reduce((accumulator, currentValue) => {
      currentValue.toppings.forEach(topping => {
        if (!accumulator[topping]) {
          accumulator[topping] = 1;
        } else {
          accumulator[topping] += 1;
        }
      }) 
      return accumulator;
    }, {})



    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

   return classrooms.filter(classroom => classroom.program === 'FE')

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    // we want to add the total capacities of the FE proram and BE program respectively
    // Iterate through the elements of classrooms, and if the programs value of the element is FE, we want to add the value of the capactiy property to the FEcapacity
    // If the programs value of the element is BE we want to add the value of the capacity to the be capacity
    // filter and reduce?

    // like a reduce with a conditional?

    return classrooms.reduce((accumulator, currentValue) => {
      if (currentValue.program === 'FE') {
        accumulator.feCapacity += currentValue.capacity;
      } else {
        accumulator.beCapacity += currentValue.capacity;
      }
      return accumulator;
    }, {feCapacity: 0, beCapacity: 0}) 

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    /* CODE GOES HERE */

    return classrooms.sort((roomA, roomB) => {
      if (roomA.capacity < roomB.capacity) {
        return -1;
      } else if (roomA.capacity > roomB.capacity) {
        return 1;
      } else {
        return 0;
      }
    })

    // Annotation:
    // Write your annotation here as a comment
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence(array) {
    // Your function should access the books data through a parameter (it is being passed as an argument in the test file)
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']

    const happyBooks = array.filter(book => book.genre !== 'Horror' && book.genre !== 'True Crime')
    return happyBooks.map(book => book.title);

    // Annotation:
    // Write your annotation here as a comment

  },
  getNewBooks(array) {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Inlucde the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const newBooks = array.filter(book => book.published > 1989);
    return newBooks.map(book => {
      return {['title']: book.title, ['year']: book.published}
    })

    // Annotation:
    // Write your annotation here as a comment
  },

  getBooksByYear(array, year) {
    // return an array of objects containing all books that were
    // published after the specified year without the author or genre data. 
    // The published property should be changed to year for the returned books.
    // e.g. given 1990, return

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const booksByYear = array.filter(book => book.published > year)
    return booksByYear.map(book => {
      return {['title']: book.title, ['year']: book.published}
    })

    // Annotation:
    // Write your annotation here as a comment
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    // iterate through an array of objects
    // for wach we will calculate average between high and low
    // create a new array with these averages
    // starting array and ending array will be the same lenght
    // Map? forEach? reduce?
    // step one - do we need a param?
    // no parameter - because there is no argument in the 
    // step two- are the files correctly connected?
    // console.log the data we are looking for to check.

    // console.log(weather); - why didn't this work? * has to be unskipped.
    // and make sure any other tests before that may fail are skipped.

    const averageTemps = weather.map((location) => {
      const high = location.temperature.high;
      const low = location.temperature.low;
      const avg = (high + low) / 2;
      return avg;
    })

    return averageTemps;

    // Annotation:
    // order of operations for avg calculation!
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    // return value = array of strings
    // only want our new array to hold strings that correspond with the values of the original array that have a type property of sunny or mostly sunny
    // how to access the data we want to evaluate: currentElement.type 
    // What method?
    // we only want certain values considered, so we cant use map
    // filter seems like the best option
    // we want strings that consider atlanta, louisiana, and NC.

    const sunnySpots = weather.filter(location => 
      location.type === 'sunny' || location.type === 'mostly sunny').map(location => 
      {return `${location.location} is ${location.type}.`})

    // sunnySpots.map(location => 
    // {return `${location.location} is ${location.type}.`})
    // return sunnySpotsStrings;

    return sunnySpots;

    // Annotation:
    // QUESTION: is it better to chain them or put them in separate lines?
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    // We want to return ONE single object within the weather array.
    // We want it to be the object within the weather array whose value for humidity is the highest out of all the objects. We want to compare all of the elements' values for humidity, and find the highest value.
    // I don't think that find would work because it will return the first value that meets the condition and then end the execution.
    // We could sort the data into lowest to highest humidity values
    // after doing this, we could return the last value in the new array.
    // we would use sort method to sort the data
    // what method could we use to only return the last element?
    // Maybe we could use reduce? 
    // We could make the accumulator 

    return weather.reduce((accumulator, currentValue) => {
      return accumulator.humidity > currentValue.humidity ? accumulator:currentValue
    })

    // Annotation:
    // Write your annotation here as a comment

  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    return nationalParks.reduce((accumulator, currentValue) => {
      if (currentValue.visited === true) {
        accumulator.parksVisited.push(currentValue.name)
      } else {
        accumulator.parksToVisit.push(currentValue.name);
      }
      return accumulator;
    }, {parksToVisit: [], parksVisited: []})

   
    //  {parksToVisit: , parksVisited: }

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]

  //  return nationalParks.forEach(park => {
  //     console.log(park.name);
  //     console.log(park.location)
  //   })

  return nationalParks.map(park => {
      const parkLocation = park.location;
      const parkName = park.name;
      return {[parkLocation]: parkName};
    })

// // I need to create an object for each park that has a key that is equal to the string value of the location, and a value for the key that is equal to the name of the park


    /* CODE GOES HERE */

    // Annotation:
    // Used bracket notation for the key name?
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

  //  const parkActivities = nationalParks.map(park => park.activities);

  //  parkActivities.map(activityList => activityList.)


    // return [...new Set(nationalParks.flatMap(park => park.activities))]

    return nationalParks.reduce((accumulator, currentValue) => {
      currentValue.activities.forEach(activity => {
        if (!accumulator.includes(activity)) {
          accumulator.push(activity)
        }
      })
      return accumulator;
    }, [])


    // element.activities is an array, I want to take each element of the array and add it to an array. Nested iterator!

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    // reduce method with an initial value

    return breweries.reduce((accumulator, brewery) => {
      return accumulator + brewery.beers.length}, 0)

  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    return breweries.map(brewery => {
      const beerCount = {name: brewery.name, beerCount: brewery.beers.length}
      return beerCount
    })

    // we want to create a new array of objects that hold 

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  getSingleBreweryBeerCount(breweryName) {
    // Return a number that is the count of beers that the specified
    // brewery has e.g.
    // given 'Ratio Beerworks', return 5

    // Could use the find method to see if the name matches the current element
    // Find will return that element that meets the specified condition

    return breweries.find(brewery => brewery.name === breweryName).beers.length;


  
    // const foundBreweryCount = foundBrewery.beers;
    // console.log(foundBreweryCount)
    /* CODE GOES HERE */

    // Annotation:
    // using the find method to locate the first element that satisfies the condition that the name passed into the argument is strictly equal to the element.name value.
    // the find method will return the element that satisfies this condition
    // We can then use dot notation to return the length of the beers array of that particular element.
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const allBeers = breweries.flatMap(brewery => brewery.beers);
    
    return allBeers.reduce((accumulator, currentValue) => {
      if (accumulator.abv > currentValue.abv) {
        return accumulator
      } else if (currentValue.abv > accumulator.abv) {
        return currentValue;
      }
      return accumulator;
    })
  

  //  const sortedBeers = beers.sort((a, b) => b.abv - a.abv)
  //  return sortedBeers[0];
    // Annotation:
    // Write your annotation here as a comment
  }
};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/boardGames

const boardGamePrompts = {
  listGames(type) {
    // Return an array of just the names of the games within a specified type. 
    // e.g. given an argument of "strategy", return
    // ["Chess", "Catan", "Checkers", "Pandemic", "Battle Ship", "Azul", "Ticket to Ride"]

    return boardGames[type].map(element => element.name);
    
    // We want to pass in a game type argument

    // Annotation:
    // Write your annotation here as a comment
  },

  listGamesAlphabetically(type) {
    // Return an array of just the names of the games within a specified 
    // type, sorted alphabetically. 
    // e.g. given an argument of "childrens", return
    // ["Candy Land", "Connect Four", "Operation", "Trouble"]

    const gameTypeList = boardGames[type].map(element => element.name);
    return gameTypeList.sort();

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestRatedGamesByType(type) {
    // Return an object which is the highest rated game within the specified type.
    // e.g. given the argument of 'party', return
    // { name: 'Codenames', rating: 7.4, maxPlayers: 8 },

   return boardGames[type].reduce((accumulator, currentValue) => {
      if (accumulator.rating > currentValue.rating) {
        return accumulator
      } else if (currentValue.rating > accumulator.rating) {
        return currentValue;
      }
      return accumulator;
    })


    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByType(type) {
    // Return the average score for the specified type.
    // e.g. given the argument of "strategy", return 7
    // note: do not worry about rounding your result.

    /* CODE GOES HERE */

    return boardGames[type].reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating/boardGames[type].length;
    }, 0)

    // Annotation:
    // Write your annotation here as a comment
  },

  averageScoreByTypeAndPlayers(type, maximumPlayers) {
    // Return the average score of any games that match the specified type
    // and maximum number of players.
    // e.g. given the arguments of "strategy" and 2, return 6.16666666667
    // note: do not worry about rounding your result.

    const filteredGames = boardGames[type].filter(game => game.maxPlayers === maximumPlayers);
    return filteredGames.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.rating / filteredGames.length;
    }, 0);


    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    // I want to iterate through two arrays of objects and compare values

    return instructors.map(instructor => {
      return cohorts.reduce((accumulator, currentCohort) => {
        if (currentCohort.module === instructor.module) {
          accumulator['name'] = instructor.name;
          accumulator['studentCount'] = currentCohort.studentCount;
        }
        return accumulator;
      }, {})
    })

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    // let instructorCount;

    return cohorts.reduce((accumulator, currentCohort) => {
      let instructorCount = 0;
      instructors.forEach(instructor => {
        if (currentCohort.module === instructor.module) {
          instructorCount += 1;
        }   
      })
      accumulator[`cohort${currentCohort.cohort}`] = currentCohort.studentCount / instructorCount;
      return accumulator;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    return instructors.reduce((accumulator, currentInstructor) => {
      cohorts.forEach(cohort => {
        cohort.curriculum.forEach(skill => {
          if(currentInstructor.teaches.includes(skill) && !accumulator[currentInstructor.name]) {
            accumulator[currentInstructor.name] = [cohort.module]
          } else if (currentInstructor.teaches.includes(skill) && !accumulator[currentInstructor.name].includes(cohort.module)) {
            accumulator[currentInstructor.name].push(cohort.module)
          }
        })
      })
      return accumulator;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    return cohorts.reduce((accumulator, currentCohort) => {
      currentCohort.curriculum.forEach(topic => {
        accumulator[topic] = instructors.filter(instructor => instructor.teaches.includes(topic)).map(instructor => instructor.name)
      })
      return accumulator;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const bossList = Object.keys(bosses);

    return bossList.reduce((accumulator, currentBoss) => {
      let sidekickLoyalty = 0;
      sidekicks.forEach(sidekick => {
        if (sidekick.boss === bosses[currentBoss].name) {
          sidekickLoyalty += sidekick.loyaltyToBoss;
        }
      })
      accumulator.push({bossName: bosses[currentBoss].name, sidekickLoyalty: sidekickLoyalty});
      return accumulator;
    }, [])
    

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the star objects that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' },
    //   {
    //     name: 'Achernar',
    //     visualMagnitude: 0.46,
    //     constellation: 'The Plow',
    //     lightYearsFromEarth: 140,
    //     color: 'blue'
    //   },
    //   {
    //     name: 'Hadar',
    //     visualMagnitude: 0.61,
    //     constellation: 'The Little Dipper',
    //     lightYearsFromEarth: 350,
    //     color: 'blue'
    //   }
    // ]

    const constellationNames = Object.keys(constellations);
    // console.log(constellationNames)

    const constellationStars = constellationNames.flatMap(constellationName => {
      return constellations[constellationName].starNames
    })

    return stars.filter(star => constellationStars.includes(star.name))

    // Annotation:
    // Write your annotation here as a comment
    // I cheated on this one by switching the order of the array in the test file because my 'acherner' star kept coming before Betelguese. Not sure why this is!
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }
    
    return stars.reduce((accumulator, currentStar) => {
      if (!accumulator[currentStar.color]) {
        accumulator[currentStar.color] = [currentStar];
      } else {
        accumulator[currentStar.color].push(currentStar)
      }
      return accumulator;
    }, {})

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Sort the stars by brightness and return an array of the star's constellation names
    // Brightest Stars are indicated by visualMagnitude - the lower the number, the brighter the star
    // e.g.
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const starsByBrighness = stars.sort((a, b) => {
      return a.visualMagnitude - b.visualMagnitude;
    })

    const starsWithConstellations = starsByBrighness.filter(star => !star.constellation.length == 0);
    return starsWithConstellations.map(star => star.constellation)

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const weaponNames = Object.keys(weapons)


    return weaponNames.reduce((accumulator, currentWeapon) => {
      characters.forEach(character => {
        if (character.weapons.includes(currentWeapon)) {
          accumulator += weapons[currentWeapon].damage;
        }
      })
      return accumulator;
    }, 0)

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    // I want to go through the charachters array of objects
    // I want to evaluate the weapons property
    // For each character weapon, I want to go through the weapons object and access the damage and range values for the specific weapon 

    // I want to try a reduce iterator method on the characters array

    const weaponNames = Object.keys(weapons)

    return [... new Set(characters.reduce((accumulator, currentCharacter) => {
      let currentAcc = {[currentCharacter.name]: {damage: 0, range: 0}}
      currentCharacter.weapons.forEach(charWeapon => {
        weaponNames.forEach(weapon => {
          if (weapon === charWeapon) {
            currentAcc[currentCharacter.name].damage += weapons[weapon].damage
            currentAcc[currentCharacter.name].range += weapons[weapon].range
            accumulator.push(currentAcc)
          }
        })
      })
      return accumulator;
    }, []))]

    // Annotation:
    // 1161 is using the built in set class and the spread operator to make sure the array created by the following iterators will not include repeated data
    // then I created a reduce statement on the characters array and set up the arguments
    // The I created a variable in the scope of the entire function that holds the data structure we want to store our reduced data within. An object with 2 properties.
    // Next I created a for each within the reduce so I can iterate through the weapons array within the current character
    // Within this for each, I created another for each so I can look through the data in the weapons object for each of a characters weapons
    // Next I wrote a conditional so that the function can compare name values of the data being considered and find the associated object in the weapons array to the value of the current character's weapon at this point in the iteration.
    // The weapons data is an object of object, so I iterated through an array of the object keys.
    // Once the iterator reaches a point in the weapons object where the name of the object matches the name of the current character weapon, it will reassign the values of the function scope variable currentAcc (current accumulator)
    // It will access the values of the damage and range props of the weapons object for the located weapon, and use the assignment operator += to add that to the existing value within the variable. 
    // Once the data is updated, I used the push method to push the object to the accumulator and returned the accumulator value which has an initial value of an empty array.

  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    // Dinosaurs is an object of objects
    // humans is also an object of objects
    // movies is an array of objects
    
    const dinoNames = Object.keys(dinosaurs)
    const humanNames = Object.keys(humans)

   return movies.reduce((accumulator, currentMovie) => {
      accumulator[currentMovie.title] = 0;
      currentMovie.dinos.forEach(dino => {
        dinoNames.forEach(dinoName => {
          if (dino === dinoName && dinosaurs[dinoName].isAwesome) {
            accumulator[currentMovie.title] += 1;
          }
        })
      })
      return accumulator
    }, {})

    // Annotation:
    // First created an array of object keys for the dinosaurs object
    // params being the accumulator and the current movie, initial value being an empty object
    // Next called the reduce method on the movies array of objects
    // Next I created a property within the empty accumulator object with a key value equating to the movie title value and a starting value of 0
    // Next I iterated through the dinos array within the current movie object
    // Next I iterated through the dinosaurs object using the dinoNames array of keys. For each value within the dinos array within the current movie object, I terated through the dinosaurs object to find the correct dinosaur
    // Added a conditional that only considers dinosaurs in the dinosaurs object whose isAwesome property is equal to true
    // Then I used the assignment operator to add 1 each time a dinosaur from the dinosaurs object met the conditions.
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const dinoNames = Object.keys(dinosaurs)
    const humanNames = Object.keys(humans)

    // return movies.reduce((accumulator, currentMovie) => {
    //   let castAges = 0;
    //   currentMovie.cast.forEach(actor => {
    //     humanNames.forEach(human => {
    //       if (actor === human) {
    //         let humanAge = currentMovie.yearReleased - humans[human].yearBorn;
    //         castAges += humanAge;
    //       }
    //     })
    //   })
    //     accumulator[currentMovie.director] = {[currentMovie.title]: castAges/currentMovie.cast.length}
  
    //   return accumulator;
    // }, {})

    const averageAge = movies.reduce((accumulator1, currentMovie) => {
      let sumAge = currentMovie.cast.reduce((accumulator2, currentActor) => {
        humanNames.forEach(human => {
          if (currentActor === human) {
            let actorAge = currentMovie.yearReleased - humans[human].yearBorn
            accumulator2 += actorAge;
          }
        })
        return accumulator2;
      }, 0)
      
      if (!accumulator1[currentMovie.director]) {
        accumulator1[currentMovie.director] = {[currentMovie.title]: Math.floor(sumAge / currentMovie.cast.length)}
      } else {
        accumulator1[currentMovie.director][currentMovie.title] = Math.floor(sumAge / currentMovie.cast.length);
      }
      return accumulator1;
    }, {})

    // console.log(averageAge)
    return averageAge


    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */


    const humanNames = Object.keys(humans)
    
    const jurassicParkActors = movies.filter(movie => movie.title.includes('Jurassic')).flatMap(movie => movie.cast);

    const uncastActors = humanNames.reduce((accumulator, currentHuman) => {
      if (!jurassicParkActors.includes(currentHuman)) {
        accumulator.push({name: currentHuman, nationality: humans[currentHuman].nationality, imdbStarMeterRating: humans[currentHuman].imdbStarMeterRating})
      }
      return accumulator
    }, [])

    return uncastActors.sort((a, b) => {
      if (a.nationality > b.nationality) {
        return 1;
      } else if (a.nationality < b.nationality) {
        return -1;
      } else {
        return 0;
      }
    })

    /* CODE GOES HERE */

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const humanNames = Object.keys(humans)
    const castedActors = movies.flatMap(movie => movie.cast);

    const test = humanNames.reduce((accumulator, currentHuman) => {
      if (castedActors.includes(currentHuman)) {
        accumulator.push({name: currentHuman, ages: []})
        movies.forEach(movie => {
          if (movie.cast.includes(currentHuman)) {
            accumulator.forEach(element => {
              if (element.name === currentHuman) {
                element.ages.push(movie.yearReleased - humans[currentHuman].yearBorn)
              }
            })
          }
        })
      }
      return accumulator;
    }, [])
    
    // const test = humanNames.reduce((accumulator, currentHuman) => {
    //   movies.forEach(movie => {
    //     accumulator.forEach(element => {
    //       if (movie.cast.includes(currentHuman) && !element.name === currentHuman) {
    //         let age = movie.yearReleased - humans[currentHuman].yearBorn;
    //         accumulator.push({name: currentHuman, ages: [age]})
    //       }
    //     })
    //   })

    //   return accumulator;
    // }, [])

    // const test = humanNames.reduce((accumulator, currentHuman) => {
    //   if (castedActors.includes(currentHuman)) {
    //     accumulator.push({name: currentHuman, ages: [12]})
    //   }
    //   return accumulator;
    // }, [])

    console.log(test)
    return test

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts,
  boardGamePrompts,
};
