// Reverse sring

function reverse(str){
    let reverseStr=""
    for(let i = (str.length)-1; i>=0;i--){
        reverseStr += str.charAt(i);
    }
    return reverseStr;
}
console.log(reverse("Hello"));