var inputName = document.querySelector("#InputName")
var inputUrl = document.querySelector("#InputUrl")

var list = [];
if(localStorage.getItem("data")) {
    list = JSON.parse(localStorage.getItem("data"))
    displayData()
}


function nameValidation() {
    var regax = /^[a-zA-Z0-9]{3,15}$/
    var myName = inputName.value
    regax.test(myName)
    if(regax.test(myName)){
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")
        return true
    }
    else {
        inputName.classList.add("is-invalid")
        inputName.classList.remove("is-valid")
        return false
    }
}


function urlValidation() {
    var regax = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
    var myUrl = inputUrl.value
    regax.test(myUrl)
    if(regax.test(myUrl)) {
        inputUrl.classList.add("is-valid")
        inputUrl.classList.remove("is-invalid")
        return true
    }
    else {
        inputUrl.classList.add("is-invalid")
        inputUrl.classList.remove("is-valid")
        return false
    } 
}



//function to add data
function addData() {
    if(nameValidation() && urlValidation()){
        var data = {
        name: inputName.value,
        url: inputUrl.value,
    }
    list.push(data)
    localStorage.setItem("data",JSON.stringify(list))
    displayData()
    clearInputsValues();
    }else {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "question"
            });
        }
}


//function to display data
function displayData() {
    var box = document.querySelector(".content")
    var contentBox = ''
    for (var i = 0; i < list.length; i++) {
        contentBox += `
        <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td><a href="${list[i].url}" class="visit-btn rounded"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
            <td><button class="delete-btn rounded" onclick="deleteData(${i})"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
        </tr>
        `
        box.innerHTML = contentBox
    }
}

//function to delete data
function deleteData(index) {
    list.splice(index, 1)
    localStorage.setItem("data",JSON.stringify(list))
    displayData()
}

function clearInputsValues() {
    inputName.value = ''
    inputUrl.value = ''
}