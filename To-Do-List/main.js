// Create a "close" button and append it to each list item
let myNodeList = document.getElementsByTagName("LI");
let i;
for(i=0; i<myNodeList.length; i++) {
    let span = document.createElement('SPAN');
    let txt = document.createTextNode('\u00D7') //Unicode UTF-8 'X' symbol. '\u' is a unicode escape sequence
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('close');
let e;
for(e=0; e<close.length; e++) {
    close[e].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');//toggle = on and off 
    }
}, false);//false is actualy default and with this 'bubbling propagation' is being used. when the value is set to true, the event uses the 'capturing propagation' which handles the outer most element's event first. 


// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue==="" || inputValue.trim() === "") {
        alert("You must write something!");//Do not accept null or only space filled input
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    document.getElementById('myInput').value ="";

    let span = document.createElement('span');
    let txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);

    for (let a = 0; a<close.length; a++) {
        close[a].onclick = function() {
            let div = this.parentElement;
            div.style.display = 'none';
        }
    }
}