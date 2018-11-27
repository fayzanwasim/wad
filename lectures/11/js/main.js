function getTodos() {
    var todos = [];
    var todos_str = localStorage.getItem('todo');
    if(todos_str !== null)
        todos = JSON.parse(todos_str);
    return todos;
}

function add() {
    var task = document.getElementById('task').value;
    if(task.trim() == ''){
        document.getElementById('message').style.display = 'block';
        return false;
    } else {
        document.getElementById('message').style.display = 'none';
    }
    var todos = getTodos();
    todos.push({task: task, isDone: false});
    document.getElementById('task').value = '';
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTodos();
    todos.splice(id,1);
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
    return false;
}

function show() {
    document.getElementById('todos').innerText = '';
    var todos = getTodos();
    var ul = document.createElement('ul');
    ul.classList.add("list-group");
    for(var i=0; i<todos.length; i++){
        var li = document.createElement('li');
        li.innerHTML  = '<li>' + todos[i].task + '</li>' +
            '<button class="btn btn-danger" id="' + i + '">' +
            '<i class="fa fa-trash-o"></i> ' +
            '<span class="d-none d-sm-inline"> Delete </span> </button>' +
            '<button class="btn btn-primary" id="' + i + '">' +
            '<i class="fa fa-check"></i> ' +
            '<span class="d-none d-sm-inline"> Done </span>' + ' </button>' +
            '<button class="btn btn-secondary" id="' + i + '">' +
            '<i class="fa fa-edit"></i> ' +
            '<span class="d-none d-sm-inline"> Edit </span>' +
            ' </button>';
        li.classList.add("list-group-item");
        if(todos[i].isDone)
            li.classList.add("done");
        ul.appendChild(li);
    }
    document.getElementById('todos').appendChild(ul);
    var buttons = document.getElementsByClassName('btn-danger');

    for(var i=0; i<buttons.length; i++){
        buttons[i].addEventListener('click',remove);
    }
    var buttons2 = document.getElementsByClassName('btn-primary');

    for(var i=0; i<buttons2.length; i++){
        buttons2[i].addEventListener('click',checkbox);
    }

    var buttons3 = document.getElementsByClassName('btn-secondary');

    for(var i=0; i<buttons3.length; i++){
        buttons3[i].addEventListener('click',edit);
    }
}
function edit() {
    var todos=getTodos();
    var id = this.getAttribute('id');
    var search=this.parentNode.textContent;
    var replaces=document.getElementById('task').value;
    var rep={task: replaces, isDone: false}
    todos[id]=rep;
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
//\"task\":\"dsa\",\"isDone\":false
function checkbox(){
    if(this.parentNode.style.textDecoration==="line-through")
    {
        this.parentNode.style.textDecoration="none";
    }
    else{
        this.parentNode.style.textDecoration="line-through";
    }

}
function isDone(e) {
    var todos = getTodos();
    if(todos[e.target.id].isDone) {
        e.target.classList.add('done');
        todos[e.target.id].isDone = false;
    }
    else{
        e.target.classList.remove('done');
        todos[e.target.id].isDone = true;
    }
    localStorage.setItem('todo',JSON.stringify(todos));
    show();
}
show();





//============================================
//-----------  STEP - 5 ----------------------
//============================================

/*

CLASS ACTIVITY (HOME WORK) :

1- Enable State of todos by clicking on the text completed, started etc
HINT: use text-decoration:line-through; property of CSS

2- Enable Editing todos in text field to update text



*/

