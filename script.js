const inputText = document.querySelector(".input-text");
const listContainer = document.querySelector(".list-container");


function addTask(){
    if (inputText.value.trim())
    {
      let li = document.createElement('li');

      //create circle icon
      let circleIcon = document.createElement('i');
      circleIcon.classList.add('ri-circle-line');

      //create task text
      let span = document.createElement('span');
      span.textContent = inputText.value.trim();

      //create delete icon
      let deleteIcon = document.createElement('i');
      deleteIcon.classList.add('ri-delete-bin-6-line');

      li.appendChild(circleIcon);
      li.appendChild(span);
      li.appendChild(deleteIcon);

      listContainer.appendChild(li);

      inputText.value = '';
      saveData();
    }
    else{
      alert('Please enter a new task')
    }
    
}

listContainer.addEventListener("click", function(e){
    let li = e.target.closest('li');

    let icon = li.querySelector("i.ri-circle-line, i.ri-checkbox-circle-fill");


    if(e.target.tagName === "SPAN" || 
       e.target.classList.contains("ri-circle-line") || 
       e.target.classList.contains("ri-checkbox-circle-fill"))
    {
      li.classList.toggle("checked");

      if(li.classList.contains("checked")){
        icon.classList.replace("ri-circle-line", "ri-checkbox-circle-fill");
      }
      else{
        icon.classList.replace("ri-checkbox-circle-fill","ri-circle-line");
      }
      
      saveData();
    }
    else if(e.target.classList.contains("ri-delete-bin-6-line")){
      li.remove();
      saveData();
    }
  }, false);
  

function saveData(){
    localStorage.setItem("todo", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("todo");
}

showTask();


inputText.addEventListener('keydown', (e) => {
    if(e.key === "Enter"){
        addTask();
    }
})



