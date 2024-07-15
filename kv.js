function palindrom(str){
    let reverse="";
    for(let i=str.length-1;i>=0;i--){
        reverse=reverse+str[i];
    }
            if(reverse==str){
                console.log("its a palindrome")
            }
            else{
                 console.log("its not a palindrome")
            }

}
palindrom("malayalam");
palindrom("hey");

