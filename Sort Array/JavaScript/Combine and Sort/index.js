var sort1 = [2,4,6,8,10];
var sort2 = [1,3,9,11,13];
var sort3 = [1.5, 3.5, 6.5, 9.5, 11.5]
console.log(combineAndSort());
function combineAndSort(){
    var cNS = sort1.concat(sort2, sort3);       // Combined arrays using concatenation
    for(i = 0; i < cNS.length; i++){            // Loop 1
        for(j = i + 1; j < cNS.length; j++){    // Loop 2
            if(cNS[i] > cNS[j]){                // If index i is greater than index j
                var temp = cNS[i];              // 'temp' variable holds value of index i
                cNS[i] = cNS[j];                // index i value becomes index j value
                cNS[j] = temp;                  // index j value becomes 'temp' (index i original value)
            }
        }
    }
    return cNS;
}