const nextLogic =(number)=>{
    if(number%14==0){
        console.log("foobar");
    }else if(number%7==0){
        console.log("bar");
    }else if (number%2==0){
        console.log("foo")
    }else{
        console.log(number);
    }
}

nextLogic(70);