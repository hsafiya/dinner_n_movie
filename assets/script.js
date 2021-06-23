// identify search button 
var searchBtn = document.querySelector("#search-btn");

// identify recipe input
var recipeInput = document.querySelector("#recipe-input");

// identify movie input
var movieInput = document.querySelector("#movie-input");

// recipe url 
var recipeUrl = "https://api.edamam.com/search?"

// recipe api key 
var recipeApiKey = "&app_key=58017978fb4a01d511c9042d6a7ec020"

// recipe api id 
var recipeApiId = "app_id=4689c1af"

// movie url
var movieUrl = "https://api.themoviedb.org/3/search/movie?" 

var MOVIE_DB_API = 'api_key=cd59a3a7f869d026c281fb812755e81b';
var MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
var MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
var DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';

// create array to save recipe searches
var recipeSearchArray = JSON.parse(localStorage.getItem("recipe-history"))||[];

// create array to save movie searches
var movieSearchArray = JSON.parse(localStorage.getItem("movie-history"))||[]; 


// create function that will handle fetch
var fetchLogic = function() {
    
    // store user's recipe input in variable
    searchedRecipe = recipeInput.value.trim();
    // push recipe value to recipe array 
    recipeSearchArray.push(searchedRecipe);


    fetch(
        recipeUrl + recipeApiId + recipeApiKey + "&q=" + searchedRecipe 
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        
        // store length of recipe results in variable
        var numberOfRecipes = data.hits.length;

        // generate a random number to use in selection of data
        var randomNum = Math.floor(Math.random() * numberOfRecipes);

        document.querySelector("#recipe-container").innerHTML = `<div class="card-background-transparent col-3 offset-1" >
        <img src="${data.hits[randomNum].recipe.image}" class="card-img-top" alt="food">
        <div class="card-body">
          <h4 class="card-title"> <strong>${data.hits[randomNum].recipe.label}</strong></h4>
          <ul class="list-group"
          <li class="card-text">Recipe Source: ${data.hits[randomNum].recipe.source}</li>
          <li class="card-text">Calories: ${Math.floor(data.hits[randomNum].recipe.calories)}</li>
          <li class="card-text">Serving size: ${data.hits[randomNum].recipe.yield}</li>
          <button type="submit" class="button is-primary button is-danger is-light"> <a href="${data.hits[randomNum].recipe.url}" target="_blank" </a>Get Recipe</button>
        </div>
      </div>`
        
    })
    .catch(error => alert("Please enter valid recipe search term"));

    // store user's movie input in variable
    searchedMovie = movieInput.value.trim();
    // push movie m=value to movie array 
    movieSearchArray.push(searchedMovie);

    
    fetch(
        movieUrl + MOVIE_DB_API + "&query=" + searchedMovie
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        var numberOfMovies = data.results.length;

        var randomNumTwo = Math.floor(Math.random() * numberOfMovies);
       
        var movieTitle = data.results[randomNumTwo].original_title
        document.querySelector("#movie-title").innerHTML = movieTitle
        
        var movieDescription = data.results[randomNumTwo].overview
        document.querySelector("#movie-description").innerHTML = movieDescription 

        var moviePoster = data.results[randomNumTwo].poster_path;
        document.querySelector("#poster-container").innerHTML = '<img src="https://image.tmdb.org/t/p/w185' + moviePoster + '" />'; 

        
        
    })
    .catch(error => alert("Please enter a valid movie search term"));


    
    // call renderSearches and pass in corresponding values
    renderSearches(recipeSearchArray, movieSearchArray);

    // empty out input fields
    recipeInput.value = " ";
    movieInput.value = " ";


};


var renderSearches = function(recipeArray, movieArray) {

    localStorage.setItem("recipe-array", recipeArray);
    

    localStorage.setItem("movie-array", movieArray);


    displaySavedData();

};

var displaySavedData = function() {

    //console.log(localStorage.getItem("recipe-array"))
    document.querySelector("#recipe-searches").innerHTML = "Recent recipe searches: " + localStorage.getItem("recipe-array");

    //console.log(localStorage.getItem("movie-array"))
    document.querySelector("#movie-searches").innerHTML = "Recent movie searches: " + localStorage.getItem("movie-array");

};


searchBtn.addEventListener("click", fetchLogic);

