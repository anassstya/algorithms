var closestElements = function (nums, k, x){
    function binarySearch(nums, x){
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let mid = Math.floor((left + right) / 2);

            if(nums[mid] < x){
                left = mid + 1
            } else if(nums[mid] > x){
                right = mid - 1;
            } else {
                return mid
            }
        }
        return left
    }

    let index = binarySearch(nums, x);
    let left = index - 1;
    let right = index;
    let result = [];
    while (k > 0) {
        if (left < 0) {
            result.push(nums[right]);
            right++;
        } else if (right >= nums.length) {
            result.push(nums[left]);
            left--;
        } else {
            if (Math.abs(nums[left] - x) <= Math.abs(nums[right] - x)) {
                result.push(nums[left]);
                left--;
            } else {
                result.push(nums[right]);
                right++;
            }
        }
        k--;
    }
    return result.sort((a, b) => a - b);
}

console.log(closestElements([1,2,3,4,5], 4, 4))
// k – кол-во ближайших чисел к X, которые надо найти
//x - число, к которому ищем ближайшие