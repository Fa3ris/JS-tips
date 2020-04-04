const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const USERS_ID = 'users';
const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
const TODOS_ID = 'todos';

function get(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr);
            } else {
                reject(xhr);
            }
        }
        
        xhr.onerror = function () {
            reject(xhr);
        }

        xhr.open('GET', url);
        xhr.send();
        }
    )
}

get(usersUrl)
.then(processUsersSuccess)
.then(processTodoSuccess)
.catch(processError);


function processUsersSuccess(response) {
    console.log(response);
    const userElmt = document.getElementById(USERS_ID); 
    const jsonUsers = JSON.parse(response.responseText);
    const user1 = jsonUsers[0];
    console.log(user1);
    userElmt.innerHTML = JSON.stringify(user1);

    return get(todoUrl);
}

function processTodoSuccess(response) {
    console.log(response);
    const userElmt = document.getElementById(TODOS_ID); 
    const jsonTodos = JSON.parse(response.responseText);
    const todo1 = jsonTodos[0];
    console.log(todo1);
    userElmt.innerHTML = JSON.stringify(todo1);
}

function processError(response) {
    console.log(response);
}