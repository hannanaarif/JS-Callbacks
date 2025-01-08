function doWork(callback){
  console.log("waiting...")
  callback()
}
doWork(()=>{
    console.log("Anonymous function Executed")
})