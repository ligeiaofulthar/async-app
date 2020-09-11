// Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key

const url = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=ccadabc74cb18925fcd2f9f952730b48";
// add &units=metric

//get zip input
let button = document.getElementById("generate");

button.addEventListener('click', getData);

function getData(e){
    const newZip = document.getElementById('zip').value;
    const newCountry = document.getElementById('country').value;
    getZip(url+newZip+','+newCountry+apiKey);

}



const getZip = async (url, newZip, newCountry, apiKey)=>{
    const res = await fetch(url+newZip+','+newCountry+apiKey)
    try {
        const data = await res.json();
        console.log(data);
    }
    catch(error) {
        console.log('error', error);
    }
}

console.log(getZip(url, "vienna", "AT", apiKey));


// const postData = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST',
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//       // Body data type must match "Content-Type" header
//       body: JSON.stringify(data),
//     });

//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       } catch(error) {
//       console.log("error", error);
//       }
//   }

// postData('/add', {answer:42});
// postData('/addAnimal', {animal: 'cat'})
