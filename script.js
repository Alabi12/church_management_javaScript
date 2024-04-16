// Validate from input before adding data
function validateForm(){
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let address = document.querySelector('#address').value;
    let email = document.querySelector('#email').value;
    
    
    if(name == ""){
        alert('Name is required');
        return false;
    }

    if(age == ""){
        alert("Age is required")
    } else if(age < 1){
        alert("Age must be not be zero or less than zero")
    return false;
    }
    
    if(address == ""){
        alert("Address is required");
        return false;
    }

    if (email === "") {
        alert("Email is required");
        return false;
    } else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }

    return true;
}


// function to show Data
function showData() {
    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    let html = "";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.age + "</td>";
        html += "<td>" + element.address + "</td>";
        html += "<td>" + element.email + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button><button onclick="updateData(' + index + ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#crudTable tbody").innerHTML = html;
}


// Loads All data when document or page loaded
    document.onload = showData();

// function to add data
document.getElementById("addData").addEventListener("click", AddData);

function AddData(){
        // if form is validated
    if(validateForm() == true){
        let name = document.querySelector("#name").value
        let age = document.querySelector("#age").value
        let address = document.querySelector("#address").value
        let email = document.querySelector("#email").value
    
        let peopleList;
        if(localStorage.getItem("peopleList") == null){
        peopleList = [];
        }
        else{
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            age: age,
            address: address,
            email: email,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        
        showData();

        document.querySelector("#name").value = "";
        document.querySelector("#age").value = "";
        document.querySelector("#address").value = "";
        document.querySelector("#email").value = "";
    }
} 