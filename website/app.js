// Acquire API credentials from OpenWeatherMap website. Use your credentials and the base url to create global variables at the top of your app.js code.
// Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
// Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
// Inside that callback function call your async GET request with the parameters:
// base url
// user entered zip code (see input in html with id zip)
// personal API key

const apiKey = "ccadabc74cb18925fcd2f9f952730b48";
const url = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid="+apiKey;
let zip = "";

console.log(url);

// const postData = async ( url = '', data = {})=>{
//     console.log(data);
//       const response = await fetch(url, {
//       method: 'POST', 
//       credentials: 'same-origin',
//       headers: {
//           'Content-Type': 'application/json',
//       },
//      // Body data type must match "Content-Type" header        
//       body: JSON.stringify(data), 
//     });

//       try {
//         const newData = await response.json();
//         console.log(newData);
//         return newData;
//       }catch(error) {
//       console.log("error", error);
//       }
//   }

// postData('/add', {answer:42});
// postData('/addAnimal', {animal: 'cat'})
