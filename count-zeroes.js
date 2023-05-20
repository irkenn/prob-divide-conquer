function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    
    while(leftIdx <= rightIdx){
        let middleIdx = Math.floor([leftIdx + rightIdx]/2);
        let middleVal = arr[middleIdx];
        let middleNextRight = arr[middleIdx + 1];
        let middleNextLeft = arr[middleIdx - 1];
  
        if(middleVal === 0){
            if(middleNextLeft === 1){
                return arr.length - middleIdx;
            }
            else if(middleIdx == leftIdx && middleNextRight === 0){
                return arr.length;
            }
            else{
                rightIdx = middleIdx - 1;
            }
        }
        else if(middleVal === 1){
            if(middleNextRight === 0){
                return (arr.length -1) - middleIdx;
            }
            else{
                leftIdx = middleIdx + 1;
            }
        }
    }
    return 0;
}

module.exports = countZeroes