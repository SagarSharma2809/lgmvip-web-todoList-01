


function func() {
    if (document.getElementById('userInput').value.length == 0) {
        alert("Please enter a Todo Task");
        document.querySelector(".taskList").innerHTML = "";
    }
    else {


        let input = document.getElementById('userInput').value;

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task");
        taskDiv.classList.add("center");
        taskDiv.classList.add("padding");


        taskDiv.innerHTML = `<button class="checked-btn" onClick="checked.call(this)">✓</button>
             <span class="content">${input}</span>
             <button class="delete-btn" onClick="remove.call(this)">x</button>`



        let current = document.getElementById("newDiv");
        document.body.insertBefore(taskDiv, current);

        document.getElementById("myForm").reset();

    }


}


function checked() {
    let parent = this.parentNode;
    parent.classList.toggle("tick");

}

function remove() {
    this.parentNode.style.display = "none";
}















