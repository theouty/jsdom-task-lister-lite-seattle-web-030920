document.addEventListener("DOMContentLoaded", () => {

  const taskList = document.getElementById("list");
  const form = document.getElementById('create-task-form');
  

  form.addEventListener('submit', function(e){
    e.preventDefault()
    let li = document.createElement("li")
    li.textContent = e.target["new-task-description"].value;

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = "delete"
    li.appendChild(buttonDelete);

    buttonDelete.addEventListener('click', function(e){
      e.preventDefault()
      buttonDelete.parentElement.remove()
    })        
    
    taskList.appendChild(li);
  })
});
