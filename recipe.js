let searchButton = document.querySelector('#search')

// addan event listener to the button that runs the sendApiRequest
searchButton.addEventListener('click', ()=>{
    console.log("please")
})

// an asynchronous function to fetch data from the API
async function sendApiRequest(){
    let APP_ID = "4689c1af"
    let API_KEY ="58017978fb4a01d511c9042d6a7ec020"
    let response = await fetch(``)
    console.log("WORK!")
}
//collects data to show user choice of recipe
function useApiData (data){
    console.log(data)
}


/* 

Chase's JS

// reference to search button element
var searchButton = document.querySelector("#search-btn");

// api key 
var apiKey = 45d6a42a7bd9410a991b8738069e8917

// function that will generate movie and recipe
var generate = function() {

    // ref to recipe value
    var recipeGenre = document.querySelector("#food-selection").value;

    // ref to movie value
    var movieGenre = document.querySelector("#movie-selection").value; 

    // fetch recipe
    fetch(
        "https://api.spoonacular.com/recipes/search? + apiKey + recipeGenre
    )
    .then(funcion(response) {

        // if response is successful
        if (response.ok) {
            console.log("success")
        }else {
            console.log("unsuccessful")
        }

        return response.json()

    })
    .then(function(data) {

        // this is where recipe will be displayed to page

    })

    // fetch movie
    fetch(
        "https://" + movieGenre
    )
    .then(fucntion(response) {
        
        return response.json();

    })
    .then(function(data) {

        //this is where movie will be displayed to page

    })




};

// add event listener to search button, then call generate function
searchButton.addEventListener("click", generate);

*/