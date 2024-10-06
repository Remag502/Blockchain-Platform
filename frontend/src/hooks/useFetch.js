export function testGetRequest() {
    return fetch('url', {
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