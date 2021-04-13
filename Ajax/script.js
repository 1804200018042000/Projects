let popBtn=document.getElementById('popBtn');
popBtn.addEventListener('click',popHandler);

function popHandler(){
 console.log('you have clicked');
 
 const xhr=new XMLHttpRequest();

 xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
 xhr.onload=function() {
    if(this.status === 200){
        let obj=JSON.parse(this.responseText);
        console.log(obj);
    }
    else{
        console.log("some error occured");
    }
}
 xhr.send();
}




