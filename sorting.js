function sort(){
    let arr=[30,20,50,1,0,42]
    console.log(arr.sort((a,b)=>{
    return b-a
    }));
}
sort()