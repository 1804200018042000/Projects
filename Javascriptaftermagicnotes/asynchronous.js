for (let index = 0; index < 4; index++) {
    // const element = index;
    console.log("this is an index number", +index);
}
//idhar kya hora ki ek baar mein ek hi task hora(sync programming)



setTimeout(() => {
    for (let index = 0; index < 4005; index++) {
        const element = index;
        console.log("this is an index number", +index);
    }
}, 100); //100ms ke second baad print hoga tab tak niche wala part print hoga(async programming)


console.log("done printing");