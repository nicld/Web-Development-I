function addStudent() {
    var id = document.getElementById('id').value;
    var name = document.getElementById('name').value;

    if (id && name) {
        var table = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);

        cell1.innerHTML = id;
        cell2.innerHTML = name;
        cell3.innerHTML = '<button onclick="editStudent(this)">Edit</button> ' +
                          '<button onclick="deleteStudent(this)">Delete</button>';

        document.getElementById('id').value = '';
        document.getElementById('name').value = '';
    } else {
        alert('Please enter ID and Name');
    }
}

function editStudent(button) {
    var row = button.parentNode.parentNode;
    var id = row.cells[0].innerHTML;
    var name = row.cells[1].innerHTML;

    document.getElementById('id').value = id;
    document.getElementById('name').value = name;

    row.parentNode.removeChild(row);
}

function deleteStudent(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}