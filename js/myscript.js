var taskcount = 0;


$(document).ready(function() {
  // This is just for our logging purposes
  console.log("called ready()");

  // Get the Add Item button, and make it call the addItem() function
  // when clicked. NOTE, it's "addItem" and not "addItem()"
  // If you pass "addItem()" it just calls the addItem() function
  $("#buttonAdd").click(addItem);
  //buttonAdd.addEventListener ('click', addItem);



});

function addItem() {
  //Create checkbox
  var checkbox = document.createElement("input");
  checkbox.setAttribute("id", "checkbox"+taskcount);
  checkbox.type = "checkbox";

  //when checkbox status is changed, it calls toggleLineThrough function
  $('body').on('change', "#checkbox" + taskcount, function() {
    $(this).parent().toggleClass('stroked');

  });


  //Create Task text
  var taskText = document.createElement('span');
  taskText.setAttribute("id", "taskname");
  taskText.textContent=$("#mytext").val();

  //Create delete button

  var deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "btn"+taskcount);
  deleteButton.setAttribute("class", "btn btn-custom");
  deleteButton.appendChild(document.createTextNode("Delete"));


//delete tasks when deletebutton is pressed
  $('body').on("click", "#btn" + taskcount, function() {
    $(this).parent().remove();
  });


  var item = $('<li>').attr("id", "task"+ taskcount);
  item.attr("class", "list-group-item");
  item.append(checkbox).append(taskText).append(deleteButton);
  taskcount ++;

  $("#tasklist").append(item);

}
