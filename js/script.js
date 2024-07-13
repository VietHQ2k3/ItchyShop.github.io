
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if(i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
   }

//sign in, sign up
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
function login1(){
    window.location.href = "../html/login.html";
}

function Home(){
    window.location.href = "../index.html";
}

function Product(){
    window.location.href = "../html/login.html";
}

function Manager(){
    window.location.href = "../html/login2.html";
}

/////////////////Chat box
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();
    
    if (message === '') return;

    const chatBox = document.getElementById('chat-box');

    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.className = 'chat-message';

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = '';
}

document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}

  