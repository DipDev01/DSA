
// Palindrome check
function reverse(str){
    let reverseStr=""
    for(let i = (str.length)-1; i>=0;i--){
        reverseStr += str.charAt(i);
    }
    if(str.toLowerCase()===reverseStr.toLowerCase()){
        return `${str} is palindrom`
    }
    return `${str} is not palindrom`
}
console.log(reverse("JEe"));
console.log(reverse("JEj"));