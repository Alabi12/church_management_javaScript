function validateForm(){
    let nameD = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let address = document.querySelector('#address').value;
    let email = document.querySelector('#address').value;
    
    
    if(nameD == ""){
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

    if(email == ""){
        alert("Email is required");
        return false;
    } else if(!email.include("@")){
        alert("Invalid email address");
        return false;
    }
}