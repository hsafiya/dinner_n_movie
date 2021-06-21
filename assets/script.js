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
var movieUrl = "https://api.themoviedb.org/3/movie/550?" 

var MOVIE_DB_API = 'api_key=cd59a3a7f869d026c281fb812755e81b';
var MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
var MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
var DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';


// create function that will handle fetch
var fetchLogic = function() {
    
    // store user's recipe input in variable
    searchedRecipe = recipeInput.value.trim();
    

    
    fetch(
        recipeUrl + recipeApiId + recipeApiKey + "&q=" + searchedRecipe 
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        document.querySelector("#recipe-container").innerHTML = `<div class="card col-3 offset-1" style="width: 20rem;">
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="food">
        <div class="card-body">
          <h4 class="card-title"> <strong>${data.hits[0].recipe.label}</strong></h4>
          <p class="card-text">Recipe Source: ${data.hits[0].recipe.source}</p>
          <p class="card-text">Calories: ${Math.floor(data.hits[0].recipe.calories)}</p>
          <p class="card-text">Serving size: ${data.hits[0].recipe.yield}</p>
          <button class="btn btn-primary"> <a href="${data.hits[0].recipe.url}" target="_blank" </a>Get Recipe</button>
        </div>
      </div>`
        
    })

    // store user's movie input in variable
    searchedMovie = movieInput.value.trim();
    
    fetch(
        movieUrl + MOVIE_DB_API + "&q=" + searchedMovie
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
       
        var movieTitle = data.original_title
        console.log(movieTitle)
        document.querySelector("#movie-title").innerHTML = movieTitle
        
        var movieDescription = data.overview
        console.log(movieDescription)
        document.querySelector("#movie-description").innerHTML = movieDescription 

        
        
    }) 
    var moviePoster = data.results[0].poster_path
    console.log(moviePoster)
    document.querySelector("#movie-description").innerHTML = moviePoster 
    var moviePoster = data.results[0].poster_path
        console.log(moviePoster)
        document.querySelector("#movie-description").innerHTML = moviePoster 
        

};


searchBtn.addEventListener("click", fetchLogic);

