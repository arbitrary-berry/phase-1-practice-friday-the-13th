Core deliverables
as a user i can:
view all movies in the nav element on pg load
view the first movie details on pg load
click a movie in the nav and see its details in the deets section
click watched

1. For each movie returned from http://localhost:3000/movies create an image and add it to the movie-list nav element.
[X] fetch on it
[] for each loop
[] create an image element
[] add to movie list nav element

2. As soon as the page loads, we should see the details of the first movie in the dataset.
[] Render the movie details

3.When you click on each movie image in the top nav, you should populate the detail area with the image, title, release_year, description, watched, and blood_amount for the movie that was clicked. 

If the value of 'watched' is false, the button should say 'Unwatched'. If the value is true, then the button should say 'Watched'.

[] create event listeners for click event
[]render the movie details (image, title, release year, description, watched, and blood_amount)


//Dataset


    "id": 1,
    "title": "Friday the 13th",
    "release_year": 1980,
    "description": "Camp counselors are stalked and murdered by an unknown assailant while trying to reopen a summer camp that was the site of a child's drowning.",
    "image": "./assets/f13-1.jpeg",
    "watched": false,
    "blood_amount": 0
  },