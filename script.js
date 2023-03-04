const messageInput = document.getElementById('message-input');
const submitButton = document.getElementById('submit-button');
const chatHistory = document.getElementById('chat-history');

submitButton.addEventListener('click', function() {
  const userMessage = messageInput.value;
  const botMessage = generateBotResponse(userMessage);
  addMessageToChat('user', userMessage);
  addMessageToChat('bot', botMessage);
  messageInput.value = '';
});

function generateBotResponse(userMessage) {
    if(userMessage.toLowerCase() == 'hello')
        return 'Hello!';
    
    return 'I am a chatbot! Nice to meet you.';
}

function addMessageToChat(sender, message) {
  const messageClass = sender === 'user' ? 'user' : 'bot';
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', messageClass);
  messageElement.innerHTML = `<div class="text">${message}</div>`;
  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
