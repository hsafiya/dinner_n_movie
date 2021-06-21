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
        document.querySelector("#recipe-container").innerHTML = `<div class="card col-3 offset-1" >
        <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="food">
        <div class="card-body">
          <h4 class="card-title"><strong>${data.hits[0].recipe.label}</strong></h4>
          <p class="card-text"><strong>Recipe Source: </strong>${data.hits[0].recipe.source}</p>
          <p class="card-text"><strong>Calories: </strong>${Math.floor(data.hits[0].recipe.calories)}</p>
          <p class="card-text"><strong>Serving size: </strong>${data.hits[0].recipe.yield}</p>
          <button type="submit" class="button is-primary button is-danger is-light"> <a href="${data.hits[0].recipe.url}" target="_blank" </a>Get Recipe</button>
        </div>
      </div>`
        
    })

    // store user's movie input in variable
    searchedMovie = movieInput.value.trim();
    console.log(searchedMovie);
    
    fetch(
        movieUrl + MOVIE_DB_API + "&query=" + searchedMovie
    )
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {

        console.log(data);
       
        // var movieTitle = data.results[0].original_title
        // console.log(movieTitle)
        // document.querySelector("#movie-title").innerHTML = movieTitle
        
        var moviePoster = "https://image.tmdb.org/t/p/w500/" + data.results[0].poster_path
        console.log(moviePoster)

        document.querySelector("movie-poster").innerHTML = `
        <div class="col-md-3">
          <div class="well text-center">
            <img src="${moviePoster}">
            <h5>${data.results[0].original_title}</h5>
            
            <a onclick="${moviePoster}" class="btn btn-primary" href="#">Movie Details</a>
          </div>
        </div>
        `;
        
        var movieDescription = data.results[0].overview
        console.log(movieDescription)
        document.querySelector("#movie-description").innerHTML = movieDescription 
        
        
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
