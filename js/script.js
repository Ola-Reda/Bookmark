var inputName = document.querySelector("#InputName")
var inputUrl = document.querySelector("#InputUrl")
console.log(inputName, inputUrl)


var list = [];
//function to add data
function addData() {
    var data = {
        name: inputName.value,
        url: inputUrl.value,
    }
    list.push(data)
    displayDta()
    clearInputsValues();
}


//function to display data
function displayDta() {
    var box = document.querySelector(".content")
    var contentBox = ''
    for (var i = 0; i < list.length; i++) {
        contentBox += `
        <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td><button href="${list[i].url}" class="visit-btn rounded"><i class="fa-solid fa-eye me-2"></i>Visit</button></td>
            <td><button class="delete-btn rounded" onclick="deleteData(${i})"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
        </tr>
        `
        box.innerHTML = contentBox
    }
}

//function to delete data
function deleteData(index) {
    list.splice(index, 1)
    displayDta()
}

function clearInputsValues() {
    inputName.value = ''
    inputUrl.value = ''
}