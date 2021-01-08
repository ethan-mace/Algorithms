// randomized array length, elements, and pivot
console.log("Output: " + partition())
function partition(){
    var arrLength = Math.floor(Math.random() * 50);
    var pivot = Math.floor(Math.random() * arrLength);
    var arr = [];
    var left = []; 
    var right = [];
    var i = 0;
    while(i <= arrLength){
        arr.push(Math.floor(Math.random() * 100));
        i++;
    }
    console.log("Generated array: " + arr);
    for(i = 0; i < arr.length; i++){
        if(arr[i] <= arr[pivot] && i < pivot || arr[i] < arr[pivot] && i != pivot){
            left.push(arr[i]);
        }        
        else if(arr[i] >= arr[pivot] && i != pivot){
            right.push(arr[i]);
        }
    }
    console.log("Left: " + left + "\nPivot: " + arr[pivot] + " at index " + pivot + "\nRight: " + right)
    return left.concat(arr[pivot], right);
}