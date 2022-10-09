var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["LoginID"] = document.getElementById("LoginID").value;
    formData["Name"] = document.getElementById("Name").value;
    formData["Phone"] = document.getElementById("Phone").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.LoginID;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Name;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Phone;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("LoginID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Name").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Phone").value = selectedRow.cells[2].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.LoginID;
    selectedRow.cells[1].innerHTML = formData.Name;
    selectedRow.cells[2].innerHTML = formData.Phone;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("LoginID").value = '';
    document.getElementById("Name").value = '';
    document.getElementById("Phone").value = '';
    selectedRow = null;
}

// for second table 

var selectedRowInvoice = null

function onFormSubmitInvoice(e) {
	event.preventDefault();
        var formDataInvoice = readFormDataInvoice();
        if (selectedRowInvoice == null){
            insertNewRecordInvoice(formDataInvoice);
		}
        else{
            updateRecordInvoice(formDataInvoice);
		}
        resetFormInvoice();    
}

//Retrieve the data
function readFormDataInvoice() {
    var formDataInvoice = {};
    formDataInvoice["InvoiceNumber"] = document.getElementById("InvoiceNumber").value;
    formDataInvoice["CustomerName"] = document.getElementById("CustomerName").value;
    formDataInvoice["Date"] = document.getElementById("Date").value;
    return formDataInvoice;
}

//Insert the data
function insertNewRecordInvoice(data) {
    var table = document.getElementById("storeInvoice").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.InvoiceNumber;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.CustomerName;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Date;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = `<button onClick="onEditInvoice(this)">Edit</button> <button onClick="onDeleteInvoice(this)">Delete</button>`;
}

//Edit the data
function onEditInvoice(td) {
    selectedRowInvoice = td.parentElement.parentElement;
    document.getElementById("InvoiceNumber").value = selectedRowInvoice.cells[0].innerHTML;
    document.getElementById("CustomerName").value = selectedRowInvoice.cells[1].innerHTML;
    document.getElementById("Date").value = selectedRowInvoice.cells[2].innerHTML;
}
function updateRecordInvoice(formDataInvoice) {
    selectedRowInvoice.cells[0].innerHTML = formDataInvoice.InvoiceNumber;
    selectedRowInvoice.cells[1].innerHTML = formDataInvoice.CustomerName;
    selectedRowInvoice.cells[2].innerHTML = formDataInvoice.Date;
}

//Delete the data
function onDeleteInvoice(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeInvoice').deleteRow(row.rowIndex);
        resetFormInvoice();
    }
}

//Reset the data
function resetFormInvoice() {
    document.getElementById("InvoiceNumber").value = '';
    document.getElementById("CustomerName").value = '';
    document.getElementById("Date").value = '';
    selectedRowInvoice = null;
}

                 // for product table

var selectedRowProduct = null

function onFormSubmitProduct(e) {
	event.preventDefault();
        var FormDataProduct = readFormDataProduct();
        if (selectedRowProduct == null){
            insertNewRecordProduct(FormDataProduct);
		}
        else{
            updateRecordProduct(FormDataProduct);
		}
        resetFormProduct();    
}

//Retrieve the data
function readFormDataProduct() {
    var formDataProduct = {};
    formDataProduct["Quantity"] = document.getElementById("Quantity").value;
    formDataProduct["UnitPrice"] = document.getElementById("UnitPrice").value;
    formDataProduct["ProductName"] = document.getElementById("ProductName").value;
    return formDataProduct;
}

//Insert the data
function insertNewRecordProduct(data) {
    var table = document.getElementById("Product").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Quantity;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.UnitPrice;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.ProductName;
    cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Quantity * data.UnitPrice;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick="onEditProduct(this)">Edit</button> <button onClick="onDeleteProduct(this)">Delete</button>`;
}

//Edit the data
function onEditProduct(td) {
    selectedRowProduct = td.parentElement.parentElement;
    document.getElementById("Quantity").value = selectedRowProduct.cells[0].innerHTML;
    document.getElementById("UnitPrice").value = selectedRowProduct.cells[1].innerHTML;
    document.getElementById("ProductName").value = selectedRowProduct.cells[2].innerHTML;
}
function updateRecordProduct(formDataProduct) {
    selectedRowProduct.cells[0].innerHTML = formDataProduct.Quantity;
    selectedRowProduct.cells[1].innerHTML = formDataProduct.UnitPrice;
    selectedRowProduct.cells[2].innerHTML = formDataProduct.ProductName;
    selectedRowProduct.cells[3].innerHTML = formDataProduct.Quantity * formDataProduct.UnitPrice;
}

//Delete the data
function onDeleteProduct(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('Product').deleteRow(row.rowIndex);
        resetFormProduct();
    }
}

//Reset the data
function resetFormProduct() {
    document.getElementById("Quantity").value = '';
    document.getElementById("UnitPrice").value = '';
    document.getElementById("ProductName").value = '';
    selectedRowProduct = null;
}