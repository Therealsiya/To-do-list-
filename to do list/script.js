const btnAdd = document.getElementById('btnAdd');
const reset = document.getElementById('Reset');
const tasks = [];

 function neww() {
    const task = (document.getElementById('task').value);

    const list = document.getElementById('list');
    let newList = document.createElement('li');
   
    list.appendChild(newList);
   
    newList.innerHTML = task;
    

    newList.addEventListener('click', function () {//draw line through completed tasks
        newList.style.textDecoration = 'line-through'
        
    });

    tasks.push(task);
    
    if (tasks.length > 4) {//checks if the user has too many tasks for the day
        alert('enough tasks for the day');
        
    }

    reset.addEventListener('click', ()=> {
        newList.remove();
    })



    btnAdd.addEventListener('click', neww);

    






    

    
}

neww();
