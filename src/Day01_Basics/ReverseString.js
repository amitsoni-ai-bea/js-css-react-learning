// Rever String

const reverseString = (str)=>{
    
    let len = str.length;
    let revStr = "";

    for(let i=len-1;i>=0; i--){

        revStr = revStr + str[i];
    }

    return revStr;
}

// console.log(reverseString("Hello"));