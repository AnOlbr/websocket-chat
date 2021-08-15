const loginForm = document.querySelector('#welcome-form');
const messagesSection =document.querySelector('#messages-section');
const messagesList = messagesSection.querySelector('#messages-list');
const addMessageForm = messagesSection.querySelector('#add-messages-form');
const userNameInput = loginForm.querySelector('#username');
const messageContentInput = addMessageForm.querySelector('#message-content');

let userName = '';

const login = (e) => {
    e.preventDefault();
    if(userNameInput.value === userName){
        alert('Please enter Your login');
    } else {
        userName = userNameInput.value;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
    }

}
loginForm.addEventListener('submit', login);

function addMessage(author, content) {
    const message = document.createElement('li');
    message.classList.add('message');
    author === userName ? message.classList.add('message--self') : message.classList.add('message--recieved'); 
    message.innerHTML = 
        `<h3 class="message__author">${userName === author ? 'You' : author }</h3>
        <div class="message__content">
            ${content}
        </div>`;
    messagesList.appendChild(message);
  }

const sendMessage = (e) => {
    e.preventDefault();
    if(messageContentInput.value === ''){
        alert('Please type Your message');
    } else{
        addMessage(userName, messageContentInput.value);
        messageContentInput.value = '';
    } 
}
addMessageForm.addEventListener('submit', sendMessage);