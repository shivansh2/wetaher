const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbotToggler = document.querySelector(".chatbot-toggler");

const API_KEY = "15efaaece1974456b33141606230312"; // Update with your API key
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    chatLi.innerHTML = `<p>${message}</p>`;
    return chatLi;
}

const closeChatbotEvent = new Event('closeChatbot');

const closeButton = document.querySelector('.close-btn');

closeButton.addEventListener('click', () => {
  document.dispatchEvent(closeChatbotEvent);
});

document.addEventListener('closeChatbot', () => {
  // Hide the Chatbot interface
  document.body.classList.remove('show-chatbot');

  // If using iframe, remove it from the DOM
  const chatboxIframe = document.getElementById('chatbot-iframe');
  if (chatboxIframe) {
    chatboxIframe.parentNode.removeChild(chatboxIframe);
  }
});

const getWeather = (city) => {
    const API_URL = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=${API_KEY}&q=${city},india&num_of_days=7&tp=3&format=json`;
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.json();
        })
        .then(data => {
            const weather = `Weather in ${city}: ${data.data.weather[0].hourly[0].weatherDesc[0].value}, Temperature: ${data.data.weather[0].maxtempC}°C, Humidity: ${data.data.weather[0].hourly[0].humidity}%`;
            chatbox.appendChild(createChatLi(weather, "incoming"));
            chatbox.scrollTo(0, chatbox.scrollHeight);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            chatbox.appendChild(createChatLi("Oops! Weather data unavailable.", "incoming"));
            chatbox.scrollTo(0, chatbox.scrollHeight);
        });
}

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        chatbox.appendChild(createChatLi("Fetching weather...", "incoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        getWeather(userMessage);
    }, 600);
}

chatInput.addEventListener("input", () => {
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);

// Toggle chatbot interface
const toggleChatbot = () => {
    document.body.classList.toggle("show-chatbot");
}

// Add click event listener to chatbot toggler button
chatbotToggler.addEventListener("click", toggleChatbot);



