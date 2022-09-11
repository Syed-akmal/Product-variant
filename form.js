var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}
function readFormData() {
    var formData = {};
    formData["brand"] = document.getElementById("brand").value;
    formData["emp"] = document.getElementById("emp").value;
    formData["size"] = document.getElementById("size").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("varient").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.brand;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.emp;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.size;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("brand").value = "";
    document.getElementById("emp").value = "";
    document.getElementById("size").value = "";
    
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("brand").value = selectedRow.cells[0].innerHTML;
    document.getElementById("emp").value = selectedRow.cells[1].innerHTML;
    document.getElementById("size").value = selectedRow.cells[2].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.brand;
    selectedRow.cells[1].innerHTML = formData.emp;
    selectedRow.cells[2].innerHTML = formData.size;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("varient").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("brand").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}