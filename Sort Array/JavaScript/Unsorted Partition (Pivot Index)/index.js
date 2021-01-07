console.log(partition([10,6,8,6,1,2,6,3],3))
function partition(arr, pivot){
    var left = []; var right = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] <= arr[pivot] && i < pivot || arr[i] < arr[pivot] && i != pivot){left.push(arr[i]);}        
        else if(arr[i] >= arr[pivot] && i != pivot){right.push(arr[i]);}
    }
    return left.concat(arr[pivot], right);
}