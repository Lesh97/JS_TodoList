const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const login = document.querySelector("#login");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

onLoginSubmit = (event) => {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintLogin();
}

paintLogin = () => {
    const username = localStorage.getItem(USERNAME_KEY);
    login.classList.remove(HIDDEN_CLASSNAME);
    login.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintLogin();
}