// const requestURL = 'https://catfact.ninja/fact'
// function sendRequest(method, url) {
//     const headers = {
//         'Content-Type': 'application/json'
//     }
//     return fetch(url, {
//         method: method,
//         // body: JSON.stringify(body),
//         headers: headers
//     }).then(response => {
//         return response.json()
//     })
// }
// // const body = {
// //     name: 'D',
// //     age: 19
// // }
// sendRequest('GET', requestURL)
// .then(data => console.log(data))
// .catch(err => console.log(err))

  fetch('https://catfact.ninja/fact', {mode: 'cors'})  
  .then(function(response) {  
    return response.text();  
  })  
  .then(function(text) {  
    console.log('Request successful', text);  
  })  
  .catch(function(error) {  
    log('Request failed', error)  
  });