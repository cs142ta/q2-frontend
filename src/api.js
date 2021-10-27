// api.js
// for managing the connection to the q2 api

// the base url of the api
const url = "http://192.168.14.49:8080/";

export async function get(endpoint, data) {
    const apiUrl = url + endpoint;
    const response = await fetch(apiUrl, {
	method: "POST",
	headers: {
	    "Content-Type": "application/json",
	},
	body: JSON.stringify(data),
    });
    const json = await response.json();
    return json;
}
