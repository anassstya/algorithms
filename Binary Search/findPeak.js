var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left<right){
        let mid = Math.floor((left + right)/2);
        if(nums[mid] < nums[mid + 1]){
            left = mid + 1
        } else{
            right = mid
        }
    }
    return right
};

console.log(findPeakElement([1,2,1,3,5,6,4]))
// находит наибольший элемент