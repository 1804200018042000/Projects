//you have to create div a div and inject it into the page which contains a heading
//whenever someone clicks on the div,it should be converted into an editable item,
//whenever user clicks away(blur) save into the local storage
let divElem = document.createElement('div');

//add text to created element 
let val = localStorage.getItem('text');
let text;
if (val == null) {
    text = document.createTextNode('this is my element click to edit it');
} else {
    text = document.createTextNode(val);
}
divElem.appendChild(text);

//give element id,class,style
divElem.setAttribute('id', 'elem ');
divElem.setAttribute('style', 'border:2px solid black;width:154px;margin:4px;margin:4px;padding:23px;');


//grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');


//insert the element before element with id first
container.insertBefore(divElem, first);
divElem.appendChild(text);
console.log(divElem, container, first);

//add event listener to thedivElem  and if we want to give multiple class then give space in b/w
divElem.addEventListener('click', function() {
    let noTextAreas = document.getElementsByClassName('textarea').length; //editable banane ke liye ek baar click kiya toh edit karne nahi dega mouse click evenet
    if (noTextAreas == 0) {
        let html = divElem.innerHTML;
        divElem.innerHTML = `<textarea class="form-control" class="textarea" id="textarea" rows="3">${html}</textarea>
        `;
    }



    // listen for the blur event on textarea now we can type but it is not saving so 
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function() {

        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value);
    });
});