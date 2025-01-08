//6. Callback Chaining

function step1(callback){
 console.log("step 1")
 callback();
}

function step2(callback){
    console.log("Step 2");
    callback();
}

step1(()=>{
    step2(()=>{
      console.log("Done");
    })
})

