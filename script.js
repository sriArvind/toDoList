// Querying the Input Value;
var newValue = document.getElementById('myTask');
// Keypress Event;
newValue.addEventListener('keypress', (event) => {
    keyCheck(event.key);
});
// Checking the Key;
function keyCheck(key) {
    if (key === 'Enter') {
        newElement(event);
    }
}

// Querying the Submit Button; 
var addValue = document.getElementById('add');
// Mouseclick Event;
addValue.addEventListener('click', (event) => {
    newElement(event);
});

// Querying the UL;
var lists = document.getElementById('myUL');

// Function for Adding New Element;
function newElement(event) {
    event.preventDefault();

    if (newValue.value === "") {
        alert(`Please Enter Valid Input`);
    }
    else if (checkTasks()) {
        alert(`Task Already Exists`);
    }
    else {

        var li = document.createElement('li');
        li.innerText = newValue.value;

        var deleteBtn = document.createElement('span');
        deleteBtn.className = 'close';
        deleteBtn.innerHTML = '&times;';

        li.appendChild(deleteBtn);
        lists.appendChild(li);

        alert(`Item Successfully Added to the List`);
    }

}

// To Check the Input with Existing checkTasks;
var listValue = lists.children;

function checkTasks() {
    for (var task of listValue) {
        var oldValue = task.firstChild.textContent;

        if (newValue.value.trim().toLowerCase() === oldValue.trim().toLowerCase()) {
            return true;
        }
    }
    return false;
}

// Remove an Item;
lists.addEventListener('click', function (e) {
    if (e.target.classList.contains('close')) {
        if (confirm('Are You Sure?')) {
            var list = e.target.parentElement;
            lists.removeChild(list);
        }
    }
});

// Strike Thru the Item;
lists.addEventListener('click', function (e) {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked');
    }
});