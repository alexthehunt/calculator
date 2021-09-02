function add(nums) {
    sum = 0
    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

function subtract(nums) {
    sum = nums[0]
    for (i = 0; i < nums.length; i++) {
        sum -= nums[i];
    }

    return sum;
}

function multiply(nums) {
    sum = nums[i]
    for (i = 0; i < nums.length; i++) {
        sum *= nums[i];
    }
    return sum;
}

function divide(nums) {
    sum = nums[i]
    for (i = 0; i < nums.length; i++) {
        sum /= nums[i];
    }
    return sum;
}

// function screenValue() {
//     let button = document.getElementsByClassName('.btn')

//     for (let i = 0; i < button.length; i++) {
//         button[i].addEventListener('click', function () {
//             var x = button.value;
            
//         }
//     }
// }