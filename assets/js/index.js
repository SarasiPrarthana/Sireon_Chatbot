const chatBox = document.getElementById("chatBox");

// Navigation
function showHome() {
  document.getElementById("homeScreen").classList.remove("hidden");
  document.getElementById("focusScreen").classList.add("hidden");
  document.getElementById("chatScreen").classList.add("hidden");
}

function showFocusArea() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("focusScreen").classList.remove("hidden");
  document.getElementById("chatScreen").classList.add("hidden");
}

function showChat() {
  document.getElementById("homeScreen").classList.add("hidden");
  document.getElementById("focusScreen").classList.add("hidden");
  document.getElementById("chatScreen").classList.remove("hidden");
}

// Chatbot
function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (userText === "") return;

  appendMessage(userText, "user");

  setTimeout(() => {
    const botReply = getBotResponse(userText);
    appendMessage(botReply, "bot");
  }, 700);

  input.value = "";
}

function appendMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello 👋 I'm Navi! How can I help you today?";
  } else if (input.includes("parent") || input.includes("child")) {
    return "Parenting is a journey 🌸 Would you like tips on safety, emotions, or play?";
  } else if (input.includes("bye")) {
    return "Goodbye! Take care 💕";
  } else {
    return "I'm here to support you 💡 Try asking me about parenting topics!";
  }
}
