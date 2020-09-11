// Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key

const url = "http://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=ccadabc74cb18925fcd2f9f952730b48";
const metric = "&units=metric";

//get zip input

document.getElementById("generate").addEventListener('click', getData);

// There will be a GET request to open weather API to get the temperature
// There will be another GET request to our server to get information about recent entry from the last temperature
// There will be a POST request to submit the new data entry to the server.

function getData(e){
    e.preventDefault();
    let newZip = document.getElementById('zip').value;
    let newCountry = document.getElementById('country').value;
    getZip(newZip+','+newCountry);
}

const getZip = async (zip, country)=>{
    const res = await fetch(url+zip+','+country+apiKey+metric)

    // const res = await fetch(`${url}${newZip},${newCountry}${apiKey}`)
    try {
        const data = await res.json();
        console.log(data);
    }
    catch(error) {
        console.log('error', error);
    }
}

// console.log(getZip(url, "vienna", "AT", apiKey));


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
