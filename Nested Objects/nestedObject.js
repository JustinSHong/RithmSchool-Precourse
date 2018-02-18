// Write functions that operate on the nested data structure below:

var instructorData = {
    name: "Elie",
    additionalData: {
        instructor: true,
        favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
        moreDetails: {
            favoriteBasketballTeam: "New York Knicks",
            numberOfSiblings: 3,
            isYoungest: true,
            hometown: {
                city: "West Orange",
                state: "NJ",
            },
            citiesLivedIn: ["Seattle", "Providence", "New York"]
        }
    }
};

// Write a function called displayCities that console.logs
// all the values in the citiesLivedIn array:

function displayCities() {
    var arr = instructorData.additionalData.moreDetails.citiesLivedIn;

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

displayCities();

// "Seattle"
// "Providence"
// "New York"

// Write a function called displayHometownData that console.logs
// all the values inside of the hometown object

function displayHometownData() {
    var obj = instructorData.additionalData.moreDetails.hometown;

    for (key in obj) {
        console.log(obj[key]);
    }
}

displayHometownData();

// "West Orange"
// "NJ"


// Let's write a function called addDetail that accepts two parameters
//, a key and a value and adds the key and value to the moreDetails object
// and returns the moreDetails object

function addDetail(key, val) {
    var obj = instructorData.additionalData.moreDetails;

    obj[key] = val;

    return obj;
}


addDetail("isHilarious", true);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/

addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/


// Finally, let's write a function called removeDetail that removes a key
// in the moreDetails object and returns the moreDetails object
// (the new keys added above are not included in these examples).

function removeDetail(key) {
    var obj = instructorData.additionalData.moreDetails;
    delete obj[key];
    
    return obj;
}

removeDetail('citiesLivedIn');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/

removeDetail('hometown');
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/

removeDetail('favoriteBasketballTeam');
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/




