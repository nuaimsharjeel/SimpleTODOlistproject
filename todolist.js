const input = document.querySelector("#Title");
const  btn = document.querySelector("#Button");
const list = document.querySelector("#list");
var el = document.getElementsByTagName('li');

// this function will allow us to add elements when we click the button
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('you must write something');
    }else{
        
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("Delete"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);

    function deleteListItem(){
        document.getElementById("list").classList.add("delete");
    }
};

