var inpArray = [1,5,3,3,3];
var k = 6;
var hash = new Map();
var count = 0;
for(let i=0;i<inpArray.length;i++){
    
    let x = 0;
    let y = 0;
    if(k-inpArray[i]>0){
       if(hash.has(k-inpArray[i])){
        count += hash.get(k-inpArray[i]);
        y = inpArray[i];
        console.log("Y if ",y);
       if(hash.has(y)){
           x = hash.get(y);
       }
    //    console.log('x value ',x,inpArray[i]);
       hash.set(inpArray[i],x+1);
    }else{
        y = inpArray[i];
        console.log("Y else ",y);
        if(hash.has(y)){
           x = hash.get(y);
       }
    //    console.log('x value else',x,inpArray[i]);
       hash.set(inpArray[i],x+1);
    } 
    }
    
    }
console.log(hash);