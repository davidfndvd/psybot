const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

// Function to send user message and receive response
function sendMessage() {
  const userMessage = userInput.value;
  addMessage('Você', userMessage, 'user');
  userInput.value = '';

  fetch('/get-response', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userMessage })
  })
  .then(response => response.json())
  .then(data => {
    const therapistResponse = data.response;
    addMessage('Terapeuta', therapistResponse, 'therapist');
  })
  .catch(error => console.error('Erro:', error));
}

// Function to add messages to the chat box
function addMessage(sender, message, type) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', type);
  messageDiv.innerHTML = `<span class="sender">${sender}:</span> ${message}`;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Event listener for send button
sendButton.addEventListener('click', sendMessage);

// Initial welcome message
addMessage('Terapeuta', 'Olá! Como posso ajudar você?', 'therapist');
