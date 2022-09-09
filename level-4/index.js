const getInputFieldValueById = (id) => {
      const inputField = document.getElementById(id);
      const inputFieldValue = inputField.value;
      inputField.value = '';
      return inputFieldValue;
}

// display elements
const displayName = document.getElementById('displayName');
const displayEmail = document.getElementById('displayEmail');
const displayMessage = document.getElementById('displayMessage');

// Name save and delete
const saveName = () => {
      const name = getInputFieldValueById('name');
      displayName.innerText = name;
      localStorage.setItem('name', name);
}
const deleteName = () => {
      displayName.innerText = '';
      localStorage.removeItem('name');
}
// email save and delete
const saveEmail = () => {
      const email = getInputFieldValueById('email');
      displayEmail.innerText = email;
      localStorage.setItem('email', email);
}
const deleteEmail = () => {
      displayEmail.innerText = '';
      localStorage.removeItem('email');
}
// message save and delete
const saveMessage = () => {
      const message = getInputFieldValueById('message');
      displayMessage.innerText = message;
      localStorage.setItem('message', message);
}
const deleteMessage = () => {
      displayMessage.innerText = '';
      localStorage.removeItem('message');
}

const sendAll = () => {
      const name = getInputFieldValueById('name');
      const email = getInputFieldValueById('email');
      const message = getInputFieldValueById('message');
      const allInfo = {name: name, email: email, message: message};
      const allInfoStrigifyed = JSON.stringify(allInfo)
      localStorage.setItem("Information", allInfoStrigifyed)
}

// Reset all data 
const reset = () => {
      localStorage.clear()
      displayName.innerText = '';
      displayEmail.innerText = '';
      displayMessage.innerText = "";
}


// display all localstorage data
const savedName = localStorage.getItem('name');
if (savedName) {
      displayName.innerText = savedName;
}
else {
      displayName.innerText = 'No Name';
}

const savedEmail = localStorage.getItem('email');
if (savedEmail) {
      displayEmail.innerText = savedEmail;
}
else {
      displayEmail.innerText = 'No email';
}

const savedMessage = localStorage.getItem('message');
if (savedMessage) {
      displayMessage.innerText = savedMessage;
}
else {
      displayMessage.innerText = "NO message";
}