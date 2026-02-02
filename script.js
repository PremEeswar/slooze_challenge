const user = localStorage.getItem("user") || "Guest";
document.getElementById("welcome").innerText = "Hello, " + user;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save(){
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(){
  const input = document.getElementById("taskInput");
  if(input.value.trim() === "") return;

  tasks.push(input.value);
  input.value = "";
  save();
  renderTasks();
}

function deleteTask(i){
  tasks.splice(i,1);
  save();
  renderTasks();
}

function renderTasks(){
  const search = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks
    .filter(t => t.toLowerCase().includes(search))
    .forEach((task,i)=>{
      const li = document.createElement("li");
      li.innerHTML = `${task} <span onclick="deleteTask(${i})">❌</span>`;
      list.appendChild(li);
    });
}

function toggleTheme(){
  document.body.classList.toggle("dark");
}

renderTasks();
