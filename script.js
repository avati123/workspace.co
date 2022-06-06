const submit = document.getElementById("submit-btn");
inputBox = document.getElementById("task-add");
submit.onclick = () =>{
    addTask()
}

addTask = () => {
    let newTask = document.getElementById("task-add").value;
    document.getElementById('task-add').value = ''
    console.log(newTask);
}

inputBox.addEventListener("keypress", function(event){
    if(event.keyCode === 13){
        document.getElementById("submit-btn").click();
    }
})

addTaskElement = () => {
    const newTaskDiv = document.createElement("div");
    const newTaskInfo = document.createElement("h3");
    newTaskInfo.appendChild(newTaskDiv);

}



