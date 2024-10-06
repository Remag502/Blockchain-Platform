export function testGetRequest() {
    return fetch('http://127.0.0.1:8000/blockchain/hello', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(responseData => {
            return responseData.message;
        })
        .catch(error => {
            console.log(error);
        })
}