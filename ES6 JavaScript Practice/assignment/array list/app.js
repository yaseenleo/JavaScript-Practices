var dataList = [];
var p = document.getElementById("list")
let createList = function() {
    let data = document.getElementById("text").value;
    console.log(data);
    dataList.push(data)
    dataList.forEach(() => {

        document.getElementById("list").innerHTML = dataList
    });
}
