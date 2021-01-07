console.log(partition([7,9,1,6,2,10,8,4,3],3))
function partition(arr, pivot){
    var left = []; var right = [];    
    for(i = 0; i < arr.length; i++){
        if(arr[i] < arr[pivot] && i != pivot){
            left.push(arr[i]);
        } else if(i != pivot){
            right.push(arr[i]);
        }
    }
    return left.concat(arr[pivot], right);
}