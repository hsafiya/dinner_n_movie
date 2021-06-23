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

    // store user's movie input in variable
    searchedMovie = movieInput.value.trim();
    
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
        console.log(moviePoster);

        
        
    }) 

    


};


searchBtn.addEventListener("click", fetchLogic);

// function getsource(id){
//     $.ajax({
//         url: "https://api.spoonacular.com/recipes/"+id+"/information?apiKey=45d6a42a7bd9410a991b8738069e8917",
//         success: function(res) {
//             document.getElementById('sourceLink').innerHTML=res.sourceUrl
//             document.getElementById('sourceLink').href=res.sourceUrl
//         }

//     });
// };

// function getrecipe(q){
//     $.ajax({
//         url: "https://api.spoonacular.com/recipes/search?apiKey=45d6a42a7bd9410a991b8738069e8917&number=1&cuisine=&query="+q,
//         success: function(res){
//             document.getElementById("output").innerHTML="<h1>"+res.results[0].title+"</h1></br><img src='"+res.baseUri+res.results[0].image+"'width='400'/><br>Ready in "+res.results[0].readyInMinutes+" minutes"
//             getsource(res.results[0].id)
//             console.log(q)
//         }
//     })
// }
