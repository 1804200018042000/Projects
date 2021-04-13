let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenValue='';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;
        console.log('Button text is',buttonText);
        //logic
        if(buttonText == 'X')
        {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue; //clicking
        }
        else if(buttonText == 'C'){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}