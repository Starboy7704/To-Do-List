// Add task on Enter key press in the input
window.onload = function() {
    var taskInput = document.getElementById("task");
    taskInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
};
function addTask(){
    var task = document.getElementById("task");
    var priority = document.getElementById("priority");
    var tasklist = document.getElementById("tasklist");

    if(task.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.classList.add(priority.value); // Add priority class

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function(){
        tasktext.classList.toggle("Completed");
    };

    const tasktext = document.createElement("span");
    tasktext.className = "task-text";
    tasktext.textContent = task.value;

    const editBtn = document.createElement("button");
    editBtn.textContent = 'EDIT';
    editBtn.className = "edit-btn";
    editBtn.onclick = function(){
        const newTask = prompt("Edit your task:", tasktext.textContent);
        if(newTask !== null && newTask.trim() !== ""){
            tasktext.textContent = newTask;
        }   
    };

    const dltBtn = document.createElement("button");
    dltBtn.textContent = 'DELETE';
    dltBtn.className = "delete-btn";    
    dltBtn.onclick = function(){
        tasklist.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(tasktext);
    li.appendChild(editBtn);
    li.appendChild(dltBtn);

        // Insert based on priority
        if (priority.value === "high") {
            // High: always at the very top
            tasklist.insertBefore(li, tasklist.firstChild);
        // } else if (priority.value === "medium") {
        //     // Medium: after all high, before all medium/low
        //     let highs = tasklist.querySelectorAll('.high');
        //     if (highs.length > 0) {
        //         // Insert after last high
        //         highs[highs.length - 1].after(li);
        //     } else {
        //         // No high, insert at top
        //         tasklist.insertBefore(li, tasklist.firstChild);
        //     }
        } else {
            // Low: always at the bottom
            tasklist.appendChild(li);
        }

    task.value = "";
}
// Add task on Enter key press in the input
window.onload = function() {
    var taskInput = document.getElementById("task");
    taskInput.addEventListener("keyup", function(e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
};
function addTask(){
    var task = document.getElementById("task");
    var priority = document.getElementById("priority");
    var tasklist = document.getElementById("tasklist");

    if(task.value.trim() === ""){
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.classList.add(priority.value); // Add priority class

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function(){
        tasktext.classList.toggle("Completed");
    };

    const tasktext = document.createElement("span");
    tasktext.className = "task-text";
    tasktext.textContent = task.value;

    const editBtn = document.createElement("button");
    editBtn.textContent = 'EDIT';
    editBtn.className = "edit-btn";
    editBtn.onclick = function(){
        const newTask = prompt("Edit your task:", tasktext.textContent);
        if(newTask !== null && newTask.trim() !== ""){
            tasktext.textContent = newTask;
        }   
    };

    const dltBtn = document.createElement("button");
    dltBtn.textContent = 'DELETE';
    dltBtn.className = "delete-btn";    
    dltBtn.onclick = function(){
        tasklist.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(tasktext);
    li.appendChild(editBtn);
    li.appendChild(dltBtn);

        // Insert based on priority
        if (priority.value === "high") {
            // High: always at the very top
            tasklist.insertBefore(li, tasklist.firstChild);
        // } else if (priority.value === "medium") {
        //     // Medium: after all high, before all medium/low
        //     let highs = tasklist.querySelectorAll('.high');
        //     if (highs.length > 0) {
        //         // Insert after last high
        //         highs[highs.length - 1].after(li);
        //     } else {
        //         // No high, insert at top
        //         tasklist.insertBefore(li, tasklist.firstChild);
        //     }
        } else {
            // Low: always at the bottom
            tasklist.appendChild(li);
        }

    task.value = "";
}
