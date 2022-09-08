import { CSRF_TOKEN } from "./csrf_token.js";
// axios.defaults.baseURL = "https://api.example.com";

// https://axios-http.com/docs/config_defaults
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

// document.addEventListener("DOMContentLoaded", function(event) {
//   //do work
//   console.log("DOMContentLoaded");

//   router.beforeEach((to, from, next) => {
//     console.log("to", to);
//     console.log("from", from.name);
//     next();
//   });
// });

function handleResponse(response) {
    if (response.status === 204) {
        return "";
    } else if (response.status === 404) {
        return null;
    } else if (response.status === 401) {
        console.log(
            "Unauthorized: User not logged in. push to login",
            response.statusText
        );
        return null;
    } else {
        return response.json();
    }
}

function apiService(endpoint, method, data, content_type) {
    // D.R.Y. code to make HTTP requests to the REST API backend using fetch

    const config = {
        method: method || "GET",
        body: data !== undefined ? JSON.stringify(data) : null,
        headers: {
            "content-type": content_type || "application/json",
            "X-CSRFTOKEN": CSRF_TOKEN,
            "Access-Control-Allow-Origin": "http://127.0.0.1:8000",
        },
    };

    return fetch(endpoint, config)
        .then(handleResponse)
        .catch((error) => console.log(error));
}

export { apiService };