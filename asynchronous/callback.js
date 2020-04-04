const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const USERS_ID = 'users';
const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
const TODOS_ID = 'todos';

function get(url, success) {
    const xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.open('GET', url);
    xhr.send();
}

get(usersUrl, processUsersSuccess);


function processUsersSuccess() {
    console.log(this);
    const userElmt = document.getElementById(USERS_ID); 
    const jsonUsers = JSON.parse(this.responseText);
    const user1 = jsonUsers[0];
    console.log(user1);
    userElmt.innerHTML = JSON.stringify(user1);

    get(todoUrl, processTodoSuccess)
}

function processTodoSuccess() {
    console.log(this);
    const userElmt = document.getElementById(TODOS_ID); 
    const jsonTodos = JSON.parse(this.responseText);
    const todo1 = jsonTodos[0];
    console.log(todo1);
    userElmt.innerHTML = JSON.stringify(todo1);
}