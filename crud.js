var selectedRow = null;

function onFormSubmit() {
    event.preventDefault();

    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();

   
    var table = document.getElementById("storeList");
    var tbody = table.getElementsByTagName('tbody')[0];
    if (tbody.rows.length > 0) {
        table.style.display = "table";
    }
}



function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
    formData["category"] = document.getElementById("category").value;
    formData["description"] = document.getElementById("description").value;
    formData["status"] = document.querySelector('input[name="status"]:checked').value;
    formData["priority"] = document.getElementById("priority").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productCode;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.category;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.description;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.status;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.priority;

    var cell9 = newRow.insertCell(8);

    var buttonsContainer = document.createElement('div');
    var editButton = document.createElement('button');
    editButton.classList.add("action-button");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', function() { onEdit(newRow); });

    var deleteButton = document.createElement('button');
    deleteButton.classList.add("action-button", "delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', function() { onDelete(newRow); });

    buttonsContainer.appendChild(editButton);
    buttonsContainer.appendChild(deleteButton);
    cell9.appendChild(buttonsContainer);
}

function onEdit(row) {
    selectedRow = row;
    document.getElementById("productCode").value = selectedRow.cells[0].textContent;
    document.getElementById("product").value = selectedRow.cells[1].textContent;
    document.getElementById("qty").value = selectedRow.cells[2].textContent;
    document.getElementById("perPrice").value = selectedRow.cells[3].textContent;
    document.getElementById("category").value = selectedRow.cells[4].textContent;
    document.getElementById("description").value = selectedRow.cells[5].textContent;
    var status = selectedRow.cells[6].textContent;
    if (status === "active") {
        document.getElementById("active").checked = true;
    } else {
        document.getElementById("inactive").checked = true;
    }
    document.getElementById("priority").value = selectedRow.cells[7].textContent;
}

function updateRecord(formData) {
    selectedRow.cells[0].textContent = formData.productCode;
    selectedRow.cells[1].textContent = formData.product;
    selectedRow.cells[2].textContent = formData.qty;
    selectedRow.cells[3].textContent = formData.perPrice;
    selectedRow.cells[4].textContent = formData.category;
    selectedRow.cells[5].textContent = formData.description;
    selectedRow.cells[6].textContent = formData.status;
    selectedRow.cells[7].textContent = formData.priority;
}

function onDelete(row) {
    if (confirm('Do you want to delete this record?')) {
        row.remove(); 
        resetForm();

      
        var table = document.getElementById("storeList");
        var tbody = table.getElementsByTagName('tbody')[0];
        if (tbody.rows.length === 0) {
            table.style.display = "none";
        }
    }
}

function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    document.getElementById("category").value = '';
    document.getElementById("description").value = '';
    document.getElementById("active").checked = false;
    document.getElementById("inactive").checked = false;
    document.getElementById("priority").value = '';
    selectedRow = null;
}

function removeBlur() {
    document.body.style.filter = 'none';
    document.body.style.oFilter = 'none';
    document.body.style.msFilter = 'none';
    document.body.style.mozFilter = 'none';
    document.body.style.webkitFilter = 'none';
}

window.onload = function() {
    setTimeout(removeBlur, 850);
};
// Get the table and its tbody
var table = document.getElementById("storeList");
var tbody = table.getElementsByTagName('tbody')[0];

// Check if tbody has any rows
if (tbody.rows.length == 0) {
    // If no rows, hide the table
    table.style.display = "none";
} else {
    // If rows present, show the table
    table.style.display = "table"; // or "block" if using a div
}

