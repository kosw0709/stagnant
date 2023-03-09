var day = document.querySelector("#date");

function setDate() {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var date = today.getDate();
    day.innerText = `${year}년 ${month + 1}월 ${date}일`;
}

setDate();
setInterval(setDate, 1000);
