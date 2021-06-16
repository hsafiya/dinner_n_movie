// get reference to input value for movie genre from drop down menu
var movieGenre = document.querySelector("#movie-genre").value;

// get reference to input value for food genre from drop down menu
var foodGenre = doucment.querySelector("#food-genre").value;

// get reference to search button element 
var fetchButton = document.querySelector("#search-btn");

// create function that will fetch the necessary data and display the selected data to the webpage
var movieAndRecipeGenerator = function(){
    
// fetch movie data
fetch("https://....&q=" + movieGenre......)
.then(function(response) {
    return response.json();
})
.then(function(response) {
    // append chosen info to div that will contain movie info
    movieContainer.appendChild(movieData);
});

// fetch food data
fetch("https://....&q=" + movieGenre......)
.then(function(response) {
    return response.json();
})
.then(function(response) {
    // append chosen info to div that will contain recipe info
    recipeContainer.appendChild(recipeData);
})

// fetch food data
fetch("https://....&q=" + foodGenre ......);
}

// add event listener to search button, then fetch data for movie and recipe and add selected data to webpage
fetchButton.addEventListener("click", movieAndRecipeGenerator);