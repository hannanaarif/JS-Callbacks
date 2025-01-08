//4. Asynchronous Callback with setTimeout

function fetchData(callback){
    console.log("Fetching Data...")
    setTimeout(()=>{
       callback("Data received")
    },3000)

}

fetchData((data)=>{
    console.log("Data :-",data);
})