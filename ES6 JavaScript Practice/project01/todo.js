var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem );

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem )

var removeAll = document.getElementById('removeall');
removeAll.addEventListener('click', removeAllItem)

function addItem() {
    // console.log('add button');
    var input = document.getElementById('input');
    var item = input.value;
    var textnode = document.createTextNode(item);

    if (item === '') {
        let p = document.createElement('p');
        let text = document.createTextNode('Enter your todo');
        p.appendChild(text)
        ul.appendChild(p)
        console.log('something');

        setTimeout(()=>{
            //both can be used
            // ul.removeChild(p)
            p.remove()
        },3000)
        
    }
    else{
        //create li
        li = document.createElement('li');
        //create checkbox
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');
        //create label
        let label = document.createElement('label');
        label.setAttribute('for', 'item') // optional

        //add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label)
        ul.insertBefore(li, ul.childNodes[0]);
        
        setTimeout(()=>{
            li.className = 'visual'

        },20)

        //clear input 
        input.value = ''
    }
}

function removeItem(){
    // console.log('item removed');
    li = ul.children
    // console.log(li);

    for (let index = 0; index < li.length; index++) {
        // const element = li[index];
        // console.log(element);
        
        while (li[index] && li[index].children[0].checked) {  //while they are same or both index are same remove that index
            ul.removeChild(li[index])
        }
    }
    
    
}

function removeAllItem(){

    li = ul.children

    for (let index = 0; index < li.length; index++) {
        const element = li[index];

        ul.removeChild(element)
        
    }
}