//API stands for Application Programming Interface,
// which defines how software components should interact, typically used for web development to access functionality and data from other services or platforms.



//Fetch api
//Fetch api provide us an interface for sending and reciving resource.

/* const url = "your url"

const name = async() =>{

    let response = await fetch(url);
    console.log(response);
}
 */




// Make a POST request to the API

//To send data to an API, you use the POST method with fetch.

/* fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData) // Convert data to JSON format
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
 */


  //Example of Using a Browser API

  // Check if Geolocation is available
/* if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      error => {
        console.error('Error getting location:', error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  } */
  
