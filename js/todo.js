var inputbox = document.querySelector("#input");
var list = document.querySelector("#list");
var cnt = 1;

function clickButton() {
    var temp = document.createElement('li');
    temp.setAttribute("id", "li"+cnt);
    temp.innerText = inputbox.value;
    temp.innerHTML += "<button onclick='removeList("+cnt+")'>X</button>";
    list.appendChild(temp);
    cnt++;
    inputbox.value=''
}

function removeList(cnt) {
    var li = document.querySelector("#li"+cnt);
    list.removeChild(li);
}