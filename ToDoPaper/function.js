

function addTodoItem(todoItem){
    if (isValid(todoItem)){
        //add to array
    }
}
function isValid(todoItem){
    return true;
}
var todoItem = {text: 'text', completed: true, id: 1};


//Check if todoItem is valid and if yes, add it to todoItems array. Function should return the result of validity
//check (text field is not empty, all fields are present and id is unique).
//todoItem : { text: string, completed: boolean, id: number }


function viewTodoList(itemsType)


//Function takes itemsType argument (‘completed’, ‘not_completed’, ‘all’) and returns all items of this type.


function editTodoItem(todoItemId, newText)

//If newText is not empty, function changes text of todoItem by todoItemId on the new text. It should return
//flag, whether edit was successful.


function deleteTodoItem(todoItemId: number)

//Delete todoItem by todoItemId, return flag, whether delete was successful.

function completeTodoItem(todoItemId: number)

//Change completed field of todoItem (get it by todoItemId) on true.