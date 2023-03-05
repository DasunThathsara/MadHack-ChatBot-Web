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

var mentality_factor = 0;
var validity = 1;
function generateBotResponse(userMessage) {
    if(userMessage.toLowerCase() == 'hello')
        return 'Hello!. Can I ask some questions? (y/n)';
    else if(userMessage.toLowerCase() == 'how are you?')
        return 'I am fine, thank you!. Can I ask some questions? (y/n)';
    else if(userMessage.toLowerCase() == 'what is your name?')
        return 'My name is Chatbot. Can I ask some questions? (y/n)';
    else if(userMessage.toLowerCase() == 'y'){
        validity = 1;
        return 'How are you feeling today? (good or bad)'; 
    }
    else if(userMessage.toLowerCase() == 'n'){
        validity = 0;
        return 'Okay. Have a nice day!'; 
    } 
    else if(userMessage.toLowerCase() == 'good' && validity == 1){
        mentality_factor += 1;
        return 'How many hours of sleep did you get last night? (1-10)';
    }

    else if(userMessage.toLowerCase() == 'bad' && validity == 1){
        mentality_factor -= 1;
        return 'How many hours of sleep did you get last night? (1-10)';
    }

    else if(parseInt(userMessage) > 5 && validity == 1){
        mentality_factor += 1;
        return 'Have you been feeling any stress or tension lately? (yes/no)';
    }

    else if(parseInt(userMessage) < 5 && validity == 1){
        mentality_factor -= 1;
        return 'Have you been feeling any stress or tension lately? (yes/no)';
    }

    else if(userMessage.toLowerCase() == 'no' && validity == 1){
        mentality_factor += 1;
        return 'Do you like to contact a counselor? (yes I want/no I dont want)';
    }
    
    else if(userMessage.toLowerCase() == 'yes' && validity == 1){
        mentality_factor -= 1;
        return 'Do you like to contact a counselor? (yes I want/no I dont want)';
    }

    else if(userMessage.toLowerCase() == 'yes i want' && validity == 1){
        return 'Okay. Pleace hold on..';
    }

    else if(userMessage.toLowerCase() == 'no i dont want' && validity == 1){
        if(mentality_factor >= 2){
            return 'Questionare is completed. You are in good mental health. Have a nice day!';
        }
        else{
            return 'Questionare is completed. You are in bad mental health. Please contact a counselor. Have a nice day!';
        }
    }
}

function addMessageToChat(sender, message) {
  const messageClass = sender === 'user' ? 'user' : 'bot';
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', messageClass);
  messageElement.innerHTML = `<div class="text">${message}</div>`;
  chatHistory.appendChild(messageElement);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}
