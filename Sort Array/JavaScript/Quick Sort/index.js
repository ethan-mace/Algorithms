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
    console.log("Left: " + left + "\nPivot: " + arr[pivot] + " at index " + pivot + "\nRight: " + right);  
    output =  sortLeftRight(arr, left, pivot, right);
    return output;
}
function sortLeftRight(arr, left, pivot, right){
    for(i = 0; i < left.length; i++){
        for(j = 0; j < left.length; j++){
            if(left[i] < left[j]){
                var temp = left[i];
                left[i] = left[j];
                left[j] = temp;
            }
        }
    }
    console.log("Left sorted: " + left);
    for(i = 0; i < right.length; i++){
        for(j = 0; j < right.length; j++){
            if(right[i] < right[j]){
                var temp = right[i];
                right[i] = right[j];
                right[j] = temp;
            }
        }
    }
    console.log("Right sorted: " + right);    
    return left.concat("Pivot: " + arr[pivot], right);
}