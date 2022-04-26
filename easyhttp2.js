// Easy HTTP Library version 2
// Library for making HTTP requests

class easyHTTP {
    // Make HTTP GET Request
    get(url) {
        return new Promise((resolve, reject) =>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }); 
    }

    // Make HTTP POST Request
    post(url, data) {
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }); 
    }

    // Make HTTP PUT request
    put(url, data) {
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        }); 
    }

    // Make HTTP DELETE Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(() => resolve('Resource deleted...'))
            .catch(err => reject(err));
        }); 
    }
}