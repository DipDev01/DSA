

// Any practice ideas : Code Here---->

// Find the Largest Number in an Array
// Write a function that returns the largest number from an array.
// Example: [1, 5, 3, 9, 2] → 9


function largeNumber(arr){

    let largest = arr[0]

    for(let i=0; i<=arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    }
    return largest;
}
console.log(largeNumber([1, 5, 3, 9, 2]))