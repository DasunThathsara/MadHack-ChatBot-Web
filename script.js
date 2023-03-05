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
var identifier = 0;
function generateBotResponse(userMessage) {
    if(userMessage.toLowerCase() == 'hello' || userMessage.toLowerCase() == 'hi')
        return 'Hello!. Do you want to hear a joke? (yep/nope)';
    
    else if(userMessage.toLowerCase() == 'yep'){
        return 'My friend thinks he is smart. He told me an onion is the only food that makes you cry, so I threw a coconut at his face. Can I ask some questions? (y/n)';
    }

    else if(userMessage.toLowerCase() == 'nope'){
        return 'Okay .. Can I ask some questions? (y/n)';
    }

    else if(userMessage.toLowerCase() == 'can you tell a joke?'){
        return 'Once an old man says: When a newly married couple smiles, everyone knows why.But when a fifteen year married couple smiles everyone wonders why..!!!';
    }

    else if(userMessage.toLowerCase() == 'how are you?')
        return 'I am fine, thank you!';
    else if(userMessage.toLowerCase() == 'what is your name?')
        return 'My name is Chatbot';
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

    else if(parseInt(userMessage) >= 5 && validity == 1){
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
        return 'Okay. please contact 1789665420';
    }

    else if(userMessage.toLowerCase() == 'no i dont want' && validity == 1){
        if(mentality_factor >= 2){
            return 'Questionare is completed. You are in good mental health. Have a nice day!';
        }
        else{
            return 'Questionare is completed. You are in bad mental health. Please contact a counselor. Have a nice day!';
        }
    }
    else{
        return 'I am sorry. I do not understand.';
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
