let parentList = document.getElementById('parentList');
let ADDBTN = document.getElementById('Add_Btn');
ADDBTN.addEventListener('click', addchp);

let namee = prompt('Enter your name here')
let Icon = document.getElementById('Icon');
Icon.innerText = `${namee}`
function addchp(e) {
    if (parentList.children[0].className == "emptyMsg") {
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapterName = currentInput.value;

    let newLi = document.createElement('li')
    newLi.classList.add('list-group-item')
    newLi.className = "list-group-item d-flex justify-content-between"
    newLi.innerHTML = `  <h3 class="flex-grow-1"> ${currentChapterName}</h3>
              <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
              <button class="btn btn-danger " onclick="removeChapter(this)">Remove</button>`
    parentList.appendChild(newLi);
}
function removeChapter(currElement) {
    currElement.parentElement.remove()
    let parentList = document.getElementById('parentList');
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement('h5')
        newEmptyMsg.classList.add("emptyMsg")
        newEmptyMsg.textContent = "Nothing is here. Please Add chapter !!"
        parentList.appendChild(newEmptyMsg)
    }
}

function editChapter(currElement) {
    let currentChapterName = currElement.previousElementSibling.value
    let currInput = document.createElement('input');
    if (currElement.textContent == "Done") {
        currElement.textContent = "Edit"
        let currHeading = document.createElement('h3');
        currHeading.className = "flex-grow-1"
        currHeading.textContent = currentChapterName
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling)
    } else {
        let currentChapterName = currElement.previousElementSibling.textContent;
        currElement.textContent = "Done"
        currInput.type = 'text'
        currInput.placeholder = 'Chapter Name'
        currInput.className = 'form-control'
        currInput.value = currentChapterName
        currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling)
    }
}