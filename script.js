const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();

  // Check if input is empty
  if (!task) {
    alert("Please write down a task");
    return;
  }

  // Create a new list item (li)
  const li = document.createElement("li");

  // Set the inner HTML of the list item
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
  `;

  // Append the new task to the list container
  listContainer.appendChild(li);

  // Clear the input box
  inputBox.value = "";
}