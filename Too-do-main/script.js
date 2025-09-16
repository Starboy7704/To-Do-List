function addTask(){
    const task=document.getElementById("task");
    const tasklist=document.getElementById("tasklist");
    if(task.value.trim()===""){
        alert("Please enter a task");
        return;
    }

    const li=document.createElement("li");

    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.onclick=function(){
        tasktext.classList.toggle("Completed");
    };

    const tasktext=document.createElement("span");
    tasktext.className="task-text";
    tasktext.textContent=task.value;


    const editBtn=document.createElement("button");
    editBtn.textContent='CHANGE CHEY BRO';
    editBtn.className="edit-btn";
    editBtn.onclick=function(){
        const newTask=prompt("Edit your task:",tasktext.textContent);
        if(newTask!==null && newTask.trim()!==""){
            tasktext.textContent=newTask;
        }
    };

    const dltBtn=document.createElement("button");
    dltBtn.textContent='X';
    dltBtn.className="delete-btn";
    dltBtn.onclick=function(){
        tasklist.removeChild(li);
    };

  
    li.appendChild(checkbox);
    li.appendChild(tasktext);
    li.appendChild(editBtn);
      li.appendChild(dltBtn);

    tasklist.appendChild(li);

    task.value="";
}