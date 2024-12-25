var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left<right){
        let mid = Math.floor((left + right)/2);

        if(nums[mid] > nums[right]){
            left = mid + 1
        } else {
            right = mid
        }
    }
    return nums[left];
};
console.log(findMin([1,2,1,3,5,6,4, 0]))
// находит наименьший элемент