// Function to dynamically change the text content
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = "This text has been dynamically updated!";
  }
  
  // Function to modify CSS styles
  function modifyStyle() {
    const textElement = document.getElementById('dynamicText');
    textElement.style.color = "red";
    textElement.style.fontSize = "24px";
    textElement.style.fontWeight = "bold";
  }
  
  // Function to add a new element
  function addElement() {
    const newElement = document.getElementById('newElement');
    if (!newElement.textContent) {
      newElement.textContent = "A new element has been added!";
    } else {
      alert("The element already exists!");
    }
  }
  
  // Function to remove an added element
  function removeElement() {
    const newElement = document.getElementById('newElement');
    if (newElement.textContent) {
      newElement.textContent = "";
    } else {
      alert("No element exists to remove!");
    }
  }
  // Example: Add console logs
function changeText() {
    console.log("ChangeText function called"); // Debugging log
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = "This text has been dynamically updated!";
  }
  
  // Example: Add console logs
function changeText() {
    console.log("ChangeText function called"); // Debugging log
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = "This text has been dynamically updated!";
  }
  
  function modifyStyle() {
    console.log("ModifyStyle function called"); // Debugging log
    const textElement = document.getElementById('dynamicText');
    textElement.style.color = "red";
    textElement.style.fontSize = "24px";
    textElement.style.fontWeight = "bold";
  }
  
  