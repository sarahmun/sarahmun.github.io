// mood indecator start
let checkbox = document.getElementById('#theme');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon')

checkbox.addEventListener('change', () => {
    if(checkbox.checked){
        document.documentElement.setAttribute('data-theme','dark');
        localStorage.setItem('theme', 'dark')
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    }
})
if(localStorage.getItem('theme') == 'light'){
    document.documentElement.setAttribute('data-theme', 'light');
} else {
    document.documentElement.setAttribute('data-theme','dark');
}
// mood indecator end

// ckecked task indecator start
// let done = document.getElementById('done');
// let tasks = document.getElementsByClassName('tasks')
// let task = done.nextElementSibling;
// done.addEventListener('change', ()=>{
//     if(done.checked){
//         task.style.textDecoration = 'line-through';
//     // task.style.color = 'grey'
//     } else {
//         task.style.textDecoration = 'none';
//         // task.style.color = '#34526A';
//     }
    
// });

// cecked task indecator end

// new tasks generator indecator next
let taskContainer = document.querySelector('#task');
// taskContainer.removeAttribute('class')
function taskGenerator (text) {
    let newDiv = taskContainer.cloneNode(true)
    let createdDiv = newDiv.firstChild.nextSibling.nextElementSibling.textContent = `${text}`;
    newDiv.removeAttribute('id');
    newDiv.setAttribute('class', 'task')
    // newDiv.firstChild.setAttribute('class', 'done')
    taskContainer.before(newDiv)
    let checkbox = newDiv.firstChild.nextElementSibling;
    if(localStorage.getItem(''+text+'') === 'checked'){
        checkbox.checked = true;
        checkbox.nextElementSibling.style.
            textDecoration = 'line-through'
    };
    if(localStorage.getItem(''+text+'') === 'nonChecked'){
        checkbox.checked = false;
        checkbox.nextElementSibling.style.
            textDecoration = 'none'
    };
    checkbox.addEventListener('change', ()=>{
        if(checkbox.checked){
            checkbox.nextElementSibling.style.
            textDecoration = 'line-through';
            localStorage.setItem('' +text+'', 'checked')
            
        } else {
            checkbox.nextElementSibling.style.textDecoration = 'none';
            localStorage.setItem(''+text+'', 'nonChecked')
        }
        
    })
}

// taskGenerator("booo");
// taskGenerator("lololo");
// taskGenerator("kokoko");
// new tasks checked indecator end

// start submit action
function addTask(){
    let mainInput = document.getElementById('main-input').value;
    localStorage.setItem(''+mainInput+'', 'nonChecked')
    taskGenerator(`${mainInput}`);
    let inputBox = document.getElementById('main-input');
    inputBox.value ='';
    
};
document.onkeydown=function(){
    if(window.event.keyCode=='13'){
        addTask()
    }
}

// end submit action

// delet one task start
let minus = document.querySelector('.minus');
// minus.style.color = 'red'

function clearThis(el){
    text = el.parentNode.firstChild.nextElementSibling.nextElementSibling.textContent
    localStorage.removeItem(text)
}

// console.log(minus[3].style.color = 'red')
// function deleteThis(e){
//     e.parentNode.parentNode.removeChild(e, parentNode);
    
// }
// minus.addEventListener('click', ()=>{
//     document.body.style.backgroundColor = 'red';
// })
// delete one task end

// delete all tasks start
function clearAll(){
    let allDivs = document.getElementsByClassName('task')
    for(var i = allDivs.length - 1 ; i>=0; --i){
        allDivs[i].remove();
    }
    // while(localStorage.length>1){
    //     i = 1;
    // }
    theme = localStorage.getItem('theme');
    localStorage.clear()
    localStorage.setItem('theme', theme)
    
}; 
// delete all tasks end
// console.log(localStorage.key(1));
// localStorage.getItem(localStorage.key(0))
// console.log(localStorage.length)
// window.onload())
// window.onload()
function restore(){
    for(i = 0 ; i < localStorage.length ; i++){
        if(localStorage.key(i) !== 'theme'){
        taskGenerator(localStorage.key(i))
        }
    }
}
console.log(localStorage.key(4))
