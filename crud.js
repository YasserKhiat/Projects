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
}

function readFormData() {
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perPrice"] = document.getElementById("perPrice").value;
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
    cell5.appendChild(buttonsContainer);
}

function onEdit(row) {
    selectedRow = row; 
    document.getElementById("productCode").value = selectedRow.cells[0].textContent;
    document.getElementById("product").value = selectedRow.cells[1].textContent;
    document.getElementById("qty").value = selectedRow.cells[2].textContent;
    document.getElementById("perPrice").value = selectedRow.cells[3].textContent;
}

function updateRecord(formData) {
    selectedRow.cells[0].textContent = formData.productCode;
    selectedRow.cells[1].textContent = formData.product;
    selectedRow.cells[2].textContent = formData.qty;
    selectedRow.cells[3].textContent = formData.perPrice;
}

function onDelete(row) {
    if (confirm('Do you want to delete this record?')) {
        row.remove(); 
        resetForm();
    }
}

function resetForm() {
    document.getElementById("productCode").value = '';
    document.getElementById("product").value = '';
    document.getElementById("qty").value = '';
    document.getElementById("perPrice").value = '';
    selectedRow = null;
}

window.onload = function() {
    setTimeout(removeBlur, 850);
};

function removeBlur() {
    document.body.style.filter = 'none';
    document.body.style.oFilter = 'none';
    document.body.style.msFilter = 'none';
    document.body.style.mozFilter = 'none';
    document.body.style.webkitFilter = 'none';
}