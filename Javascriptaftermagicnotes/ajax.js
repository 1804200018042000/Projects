// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler() {
//     console.log('You have clicked the fetchBtn');

//     //instantiate an xhr object
//     const xhr = new XMLHttpRequest(); // create obj

//     //open obj
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true); //get request
//     
//     post request(iske saath data ko bhi bhejna padta hain)
//     xhr.open('POST', 'http: //dummy.restapiexample.com/api/v1/create', true);
//     xhr.getResponseHeader('Content-type', 'application/json'); // url mein hi bhej raha apne form ka data 

//     //what to do on progress (we can use it or no its optional)
//     xhr.onprogress = function() {
//         console.log('On progress');
//     }


//     //previously we were using on ready state change instead of onload  ..there are five ready states 
//     // xhr.onreadystatechange = function() {
//     //     console.log('ready state is ', xhr.readystate); //state change hua toh call hota hain
//     // }


//     //what to do when response is ready
//     xhr.onload = function() {
//         if (this.status === 200) { //200 respnose code hota hai http ka
//             console.log(this.responseText);
//         } else {
//             console.log("some error occured");
//         }
//     }

//     //yaha tak sirf bola hain abhi abhi req send nahi ki hain

//     //send the request
//     params = ` {
//         "name =test123 & salary =123 &age = 23 "
//     }`;

//     xhr.send(params);
//     console.log("we are done ");
//     //ye pehle ayega o/p mein kyu ki humne block nahi kiya async (true) use kiya hai
// }


let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the popHandler');

    //instantiate an xhr object
    const xhr = new XMLHttpRequest(); // create obj

    //open obj
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true); //get request
    // //post request(iske saath data ko bhi bhejna padta hain)

    xhr.onload = function() { // to replace xhr we go to fetch api
        if (this.status === 200) { //200 respnose code hota hai http ka
            let obj = JSON.parse(this.responseText); // we get response in form of string
            console.log(obj); //if we want only of few employees


            let list = document.getElementById('list');
            str = "";
            //for in loop

            for (key in obj) { // for in loop
                str += `<li>${obj[key]}</li>`
            }
            list.innerHTML = str;
        } else {
            console.log("some error occured");
        }
    }


    //send req
    xhr.send();
    console.log("we are done fetching employees");




}