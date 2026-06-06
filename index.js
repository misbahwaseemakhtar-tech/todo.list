 var getTodovalue = JSON.parse(localStorage.getItem("usertask")) || [];

    function addTaskHandler() {
        let inputValue = document.getElementById("inputValue");
        if (inputValue.value == "") { 
            alert("Please enter a task");
            return;
        }

        var taskObj = {
            id: new Date().getTime(),
            task: inputValue.value
        };

        getTodovalue.push(taskObj);
        localStorage.setItem("usertask", JSON.stringify(getTodovalue));
        getTask();
        inputValue.value = ""; 
    }

    function getTask() {
        var listTask = document.getElementById("listTask");
        listTask.innerHTML = "";

        
        for (var i = 0; i < getTodovalue.length; i++) {
        listTask.innerHTML += `<li>${getTodovalue[i].task} 
        <button class="edit-btn" onclick="EditTask(${getTodovalue[i].id})">Edit</button> </li> 
        <button  class = "delete-btn" onclick="deleteTask(${getTodovalue[i].id})">Delete</button> `
    }
    }

    function deleteTask(id){
        getTodovalue = getTodovalue.filter(item => item.id !== id);
        localStorage.setItem("usertask", JSON.stringify(getTodovalue));
        getTask();
    }

    function EditTask(id){
        var updateBtn = document.getElementById("update");
        var addBtn = document.getElementById("add");
        var inputField = document.getElementById("inputValue");
        
        updateBtn.style.display = "block";
        addBtn.style.display = "none";
        
        for(var i=0; i<getTodovalue.length; i++){
            if(getTodovalue[i].id == id){
                inputField.value = getTodovalue[i].task;
            }
        }

        updateBtn.onclick = function(){
            for(var i=0; i<getTodovalue.length; i++){
                if(getTodovalue[i].id == id){
                    getTodovalue[i].task = inputField.value;
                    inputField.value = "";
                }
            }
            localStorage.setItem("usertask", JSON.stringify(getTodovalue));
            getTask();
            updateBtn.style.display = "none";
            addBtn.style.display = "block";
        }
    }

    getTask(); 