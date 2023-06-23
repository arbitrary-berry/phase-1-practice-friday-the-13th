//Globals
const url = 'http://localhost:3000/movies'
let selectedMovie;
//cannot declare a variable with no assignment with a const but can w let
//dom selectors
const nav = document.querySelector('movie-list')
const detailImage = document.querySelector('#detail-image')
const title = document.querySelector('#title')
const yearReleased = document.querySelector('#year-released')
const description = document.querySelector('#description')
const watched = document.querySelector('#watched')
const amount = document.querySelector('#amount')
const form = document.querySelector('#blood-form')
const bloodInput = document.querySelector('blood_amount')

//event listeners

watched.addEventListener('click',toggleWatched)
form.addEventListener('submit', addBlood)

//event handlers
function addBlood(e){
    e.preventDefault()
    console.dir(e.target)
    console.log('bloodInput:', bloodInput.value);
    const newBlood = parseInt(bloodInput.value)
    selectedMovie.blood_amount += newBlood
    renderDetail(selectedMovie)
  
}
function toggleWatched(){
selectedMovie.watched = !selectedMovie.watched
//make this the opposite of what it is currently with bang operator
console.log(selectedMovie)
if (selectedMovie.watched) {
    watched.textContent = "Watched"
} else {
    watched.textContent = "Unwatched"
}
}

//if its true now set to be false 
//fetches

function getAllMovies(url){
    return fetch(url)
    .then(response => response.json())
}

//render functions 

function renderInNav(movieObj){
    //console.log('movieObj:', movieObj);
    const navImage = document.createElement('img');
    navImage.src = movieObj.image
    navImage.addEventListener('click', () => {renderDetail(movieObj)})
    console.log('navImage:', navImage);
    nav.append(navImage);
}

function renderDetail(movieObj){
    selectedMovie =movieObj;
    detailImage.src = movieObj.image
    title.textContent = movieObj.title
    yearReleased.textContent = movieObj.release_year
    description.textContent = movieObj.description
    let watchVal = movieObj.watched ? "watched" : "not watched"
    //if watched is true, set text to watched, if false, set to not watched
    watched.textcontent = watchVal
    amount.textContent = movieObj.blood_amount
}
//initializers

getAllMovies(url).then(movieArr => {
movieArr.forEach(renderInNav)
renderDetail(movieArr[0])

// get first movie from movie array
})

// view all movies in the NAV elements, so fetch all movie data


// create an <img> for each. make sure to add src (from the movie object)


//iterate through the movies array


//select nav element as anchor. anchor is where you inject new things


//append each <img> to the nav element


//view list of movie details on page load. we can use the array we fetched above
//dont have to refetch 


//select the proper DOM elements

//set the attributes for the dom elements with selected movie object details


//get the first movie from movie array, and send it to the render function
//all of the movie data is in the movie object, so we can use it to render the page

//add event listeners (click event) to each image in NAV 

//can use the same render function as above for the click event
//the listner passes movie object to the render function
//the render function sets the attributes for the elements with object values

//add event listners to each button. the callback function needs a conditional
//for button text


//handle form input. so select form then listen to form (add listners)
//PREVENT DEFAULT()

//when the form is submitted, we need to get the input value from the form

//increment the blood amount of detail movie 

//update the dom