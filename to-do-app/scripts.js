const listContainer = document.querySelector(".list-container");

function toDoList() {
    const input = document.getElementById('todoInput');
    if (input.value === "") {
        alert('Add To Do');
    } else {
        const todoText = input.value;

        const listItem = document.createElement('div');
        listItem.className = 'todo-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.title = 'Check to complete task';

        const li = document.createElement('li');
        li.textContent = todoText;
        li.title = 'Double click to edit';

        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        span.title = 'Delete';
        li.appendChild(span);

        listItem.appendChild(checkbox);
        listItem.appendChild(li);
        listItem.appendChild(span);

        listContainer.appendChild(listItem);

        if (!document.querySelector('.edit-hint')) {
            const hint = document.createElement('small');
            hint.className = 'edit-hint';
            hint.textContent = 'Double Click to edit';
            listContainer.parentElement.insertBefore(hint, listContainer);
        }

        input.value = '';
    }
    saveData();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
        const listItem = e.target.nextElementSibling;
        if (e.target.checked) {
            listItem.classList.add("checked");
            e.target.setAttribute('checked', 'checked');
        } else {
            listItem.classList.remove("checked");
            e.target.removeAttribute('checked');
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

// Add double-click event for editing
listContainer.addEventListener('dblclick', function (e) {
    if (e.target.tagName === 'LI') {
        const currentText = e.target.textContent.replace("\u00d7", "").trim();
        const input = document.createElement('input');
        input.type = 'text';
        input.value = currentText;
        input.className = 'edit-input';

        e.target.textContent = '';
        e.target.appendChild(input);

        input.focus();

        input.addEventListener('blur', function () {
            const newText = input.value.trim();
            if (newText === "") {
                alert('To-Do cannot be empty');
                e.target.textContent = currentText + " ";
            } else {
                e.target.textContent = newText + " ";
            }
            saveData();
        });

        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                input.blur();
            }
        });
    }
});

function saveData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem('data');
}

showList();