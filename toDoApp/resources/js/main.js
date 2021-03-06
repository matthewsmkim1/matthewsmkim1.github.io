
var data = (localStorage.getItem('todoList')) ? JSON.parse(localStorage.getItem('todoList')):{
  todo: [],
  completed: []
};

// Remove and complete icons in SVG format
var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
var completeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';

renderTodoList();


//Sets the alarm
//var alarm = setInterval(function(){ reminder() }, 3600000);

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById('add').addEventListener('click', function() {
   var value = document.getElementById('item').value;

   //This adds text if there is stuff inside

   if (value) {
      addItem(value);
   }
   //This adds text regardless if there is text, so it would add an
   //empty box if you just press enter
   //addItem(value);

});

document.getElementById('item').addEventListener('keydown', function (e) {
   var value = this.value;
   if (e.code === 'Enter' && value) {
     addItem(value);
   }

});



//Notification
document.addEventListener('DOMContentLoaded', function () {
   if (!Notification) {
      alert('Desktop notifications not available in your browser. Try Chromium.');
      return;
   }

   if (Notification.permission !== "granted") {

      Notification.requestPermission();
   }

});


//Sets reminder for user to finish their todo list
function reminder() {


   if (data.todo.length != 0) {
      for (var i = 0; i < data.todo.length; i++) {
         if (Notification.permission !== "granted") {
            Notification.requestPermission();
         } else {
            /*var notification = new Notification('Notification title', {
               icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
               body: 'You have ' + data.todo.length + ' items to finish!',
            });*/

            notification.onclick = function () {
               // window.open("http://matthewkim.me"); I don't know why it has matthewkim.me so i put google for now 6/18/20
               window.open("https://google.com");
            };

         }
      }
   }
}

function addItem (value) {

   //todo length is one after inserting one
   if (data.todo.length == 0) {
      alarm = setInterval(function(){ reminder() }, 3600000);

      //BUG doesn't save changes in boxes, and
      //when characters == 0 inside box, deletes
      //whole box

      //Makes content editable if todo boxes exist
      //document.getElementById('todo').contentEditable='true';
   }

   addItemToDOM(value);
   document.getElementById('item').value = '';

   data.todo.push(value);
   dataObjectUpdated();
}

function renderTodoList() {

   if (!data.todo.length && !data.completed.length) return;

   for (var i = 0; i < data.todo.length; i++) {
      var value = data.todo[i];

      addItemToDOM(value);

   }

   for (var j = 0; j < data.completed.length; j++) {
      var value = data.completed[j];
      addItemToDOM(value, true);
   }


}

function dataObjectUpdated() {
    localStorage.setItem('todoList', JSON.stringify(data));
}

function removeItem() {
   var item = this.parentNode.parentNode;
   var parent = item.parentNode;
   var id = parent.id;
   var value = item.innerText;

   if (id == 'todo') {
      data.todo.splice(data.todo.indexOf(value), 1);

   } else {
      data.completed.splice(data.completed.indexOf(value), 1);
   }
   dataObjectUpdated();

   parent.removeChild(item);

   if (data.todo.length == 0) {
      window.clearInterval(alarm);
      //document.getElementById('todo').contentEditable='false';
   }
}

function completeItem() {
   var item = this.parentNode.parentNode;
   var parent = item.parentNode;

   var id = parent.id;
   var value = item.innerText;

   if (id == 'todo') {
     data.todo.splice(data.todo.indexOf(value), 1);
     data.completed.push(value);

   } else {
     data.completed.splice(data.completed.indexOf(value), 1);
     data.todo.push(value);

   }
   dataObjectUpdated();

   // Check if the item should be added to the completed list or to re-added to the todo list
   var target = (id == 'todo') ? document.getElementById('completed') : document.getElementById('todo');

   parent.removeChild(item);

   //This adds new thing to do at top
   //target.insertBefore(item, target.childNodes[0]);
   target.appendChild(item);

   if (id == 'todo' && data.todo.length == 0) {
      //document.getElementById('todo').contentEditable='false';
      window.clearInterval(alarm);
   } else if (id == 'completed' && data.todo.length == 1) {
      //document.getElementById('todo').contentEditable='true';
      alarm = setInterval(function(){ reminder() }, 3600000);
   }

}

// Adds a new item to the todo list
function addItemToDOM(text, completed) {
   var list = (completed) ? document.getElementById('completed') : document.getElementById('todo');

   var item = document.createElement('li');
   item.innerText = text;

   var buttons = document.createElement('div');
   buttons.classList.add('buttons');

   var remove = document.createElement('button');
   remove.classList.add('remove');
   remove.innerHTML = removeSVG;

   // Add click event for removing the item
   remove.addEventListener('click', removeItem);

   var complete = document.createElement('button');
   complete.classList.add('complete');
   complete.innerHTML = completeSVG;

   // Add click event for completing the item
   complete.addEventListener('click', completeItem);

   buttons.appendChild(remove);
   buttons.appendChild(complete);
   item.appendChild(buttons);

   //This adds new thing to do at top
   //list.insertBefore(item, list.childNodes[0]);

   //This adds new thing to do at the bottom
   list.appendChild(item);

}
