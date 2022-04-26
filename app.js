// Creating a new object within the easyHTTP class - this one being the get request
const http = new easyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// User data

const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jd@gmail.com'
}

// Create post with above data

// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// Update Post    
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete('https://jsonplaceholder.typicode.com/users/',)
    .then(data => console.log(data))
    .catch(err => console.log(err));

