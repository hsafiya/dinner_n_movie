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
