//Objective is to find the index of the array where the sum of the left and
//right sides are equal

let nums = [1,7,3,6,5,6]


//O(n) solution where we find the total sum first then we find where the two
//sums match using subtraction from the total

let sum = 0
    
//Find the total sum
for (let num of nums) {
    sum += num
}

let leftSum = 0

for (let i = 0; i < nums.length; i++) {
    if (leftSum == sum - nums[i] - leftSum) {
        return i
    }
    leftSum += nums[i]
}

return -1