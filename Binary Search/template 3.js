function binarySearch(nums, target){
    let left = 0;
    let right = nums.length - 1;

    while(left + 1 < right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid
        } else if(nums[mid] < target){
            left = mid
        } else {
            right = mid
        }
    }

    if(nums[left] === target){
        return left
    }
    if(nums[right] === target){
        return right
    }
    return -1
}

console.log(2.00000 ** 10)