// state.js
// for managing application state between views

import { writable } from "svelte/store";

// the user of the application
// a svelte writable so we can subscribe to updates
export const user = writable({
    netid: "",
    loggedIn: false,
	role: "",
});
