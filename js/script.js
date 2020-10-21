// ИЗМЕНИТЬ
let token = ""; // Вставляем сюда свой access_token из URL
let timerHours = 10; // время отправки, в часах (Формат: 0-23 часов)
let message = ""; // Сообщение, форматируется с помощью HTML. <br> для переноса строки

// МОЖНО ИЗМЕНИТЬ, ЕСЛИ ПОНИМАЕШЬ ЧТО ДЕЛАЕШЬ
let user_id = ; // ID страницы адресата

// НЕ ТРОГАТЬ!!!
let random_id = getRandomInt(-9999999999, 9999999999);
let date = new Date();

let request = new XMLHttpRequest();
request.withCredentials = true;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sendMessage() {
    request.open("POST", "https://api.vk.com/method/messages.send?access_token=" + token + "&v=5.103&user_id=" + user_id + "&random_id=" + random_id + "&message=" + message, true);
    request.send(null);
    console.log("Сообщение отправлено!");
}

document.querySelector("#getAccessToken-btn").onclick = function() {
    window.open("https://oauth.vk.com/authorize?client_id=2685278&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=notify,photos,friends,audio,video,notes,pages,docs,status,questions,offers,wall,groups,messages,notifications,stats,ads,offline&response_type=token&v=5.103", "_blank");
    console.log("Не забудь заменить токен на новый!");
}

document.querySelector("#setTimer-btn").onclick = function() {
    console.log("Сообщение будет отправлено в " + timerHours + " часов.");
    
    let timer = setInterval(function() {
        date = new Date();        
    
        if (date.getHours() == timerHours) {
            sendMessage();
            clearInterval(timer);
        }
        else {
            console.log("Текущее время: " + date.getHours() + ":" + date.getMinutes() + ".");
        }
    }, 600000);
}

document.querySelector("#setTimerTest-btn").onclick = function() {
    console.log("Тестовое сообщение отправлено!");
    user_id = 82685893;
    message = "Тестовое сообщение";
    sendMessage();
}