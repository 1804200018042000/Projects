function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true; //server 
            if (!error) {
                console.log('Your promise has been resolved');
                resolve();
            } else {
                console.log('Your promises has been rejected');
                reject('Sorry not fulfilled ');
            }
        }, 2000);
    })
}
func1().then(function() { //function call
    console.log("harryy:thanks for giving");
}).catch(function(error) { //function call
    console.log("harryy:not good bro " + error);
})