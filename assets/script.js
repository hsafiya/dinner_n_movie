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

// add event listener to search button, then fetch data for movie and recipe and add selected data to webpage
fetchButton.addEventListener("click", movieAndRecipeGenerator);