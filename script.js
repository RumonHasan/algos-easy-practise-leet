const dataValue = document.querySelector('[data-value]');
const input = document.querySelector('[data-input]');


// roman numerals problem
const convertFuckingRomanNumerals = (romanArray)=>{

    const romanTable = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1,
    };
    
    // will contain the accumulated final value
    let finalValue = 0;
    let currentConvert;
    let nextConvert;

    const convertedArray = romanArray.split('');

    for(let i = 0; i< convertedArray.length; i++){
        // assiging indexex to the first and second values
        currentConvert = romanTable[convertedArray[i]];
        nextConvert = romanTable[convertedArray[i + 1]];

        // last edge case
        if(!nextConvert && currentConvert){
            finalValue += currentConvert;
        }
        // middle pair cases
        if(currentConvert >= nextConvert){
            finalValue += parseFloat(currentConvert);
        }if(currentConvert < nextConvert){
            finalValue -= parseFloat(currentConvert);
       }

    };
    return finalValue;
    
};

// 50 + 5 + 1 + 1 + 1 = 58

// console.log('Final Value:', convertFuckingRomanNumerals('MCMX'));

// longest common prefix problem
const longestCommonPrefix = (string)=>{
    console.log(string);

    for(let i = 0; i < string[0].length; i++){
        if(string.some((singleString)=> singleString[i] !== string[0][i])){
            return string[0].slice(0,i);
        }
    }
    
    return string[0];
}

//console.log(longestCommonPrefix(['flower', 'flow']));

//Plus One problem leetcode 

const plusOne = (integers)=>{
    for(let i = integers.length - 1 ; i >= 0; i--){

        if(integers[i] !== 9){
            integers[i] += 1;
            return integers;
        }
        // edge case
        if(integers[i] === 9){
            integers[i] = 0;
        }
    }
    // final edge case if for example the number is 99
    return [1, ...integers];
};
// value is 99 
// 9 => 0, 9=> 0 ,, return => 1,00
// 199 => 0,0, 2=> return 200

// const integerArray = [2,1,0];

// console.log(plusOne(integerArray));

// contains duplicates
const containsDuplicate = (nums)=>{
    // for(let i = 0; i < array.length; i++){
    //     for(let j = i + 1; j < array.length; j++){
    //         if(array[i] === array[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    //optimized
    // using sets
    const array = [...new Set(nums.map((singleNum)=> singleNum))];
    return nums.length !== array.length;
    
}

// console.log(containsDuplicate([1,2,4,6,5]));
const initialVal = 0;
const totalArray = [1,2,3,4,5,6,7].reduce((accumulator, total)=>
  accumulator + total, initialVal
);

// // console.log(totalArray);
// const obj = {};
// const array1 = [1,2,3,4];
// obj[array1[3]] = 3;
// obj[array1[2]] = 2;
// if(obj[array1[2]] === 3){
//     console.log(obj[3]);
//     console.log('true');
// }
// console.log(obj);


// two sum problem
const twoSum = (nums, target)=>{
    let indexStorage = {}
    for(let i = 0; i < nums.length; i++){
       const val = nums[i];
       if(indexStorage[target - val] !== undefined){
           return [indexStorage[target - val],i]
       }
       indexStorage[val] = i;
    }
}
const array = [2,7,11,15];
const target = 9;
// console.log(twoSum(array, target));


// buying and selling stock problem 
const buyingAndSelling = (prices)=>{
    let profit = 0;
    let costPrice = prices[0];
    for(let i = 1; i < prices.length; i++){
        if(costPrice > prices[i]){
            costPrice = prices[i];
            return; // till it finds the biggest profit
        }
        profit = Math.max(prices[i] - costPrice, profit);
    }
    return profit;
}

//console.log(buyingAndSelling([7,1,5,3,6,4]));
// output should be 5
// cost price = 7
// 7 > 1 => cp = 1(buying at a cheaper price)
// cp = 1 > 5 => else => profit = 5 - 1 = 4,
// profit => 4.
// 
// cp = 1
// cp = 1> 5 false => 5 - 1 = 4,
// cp = 1 > 3 flase => 3 - 1 = 2, 4 => 4
// cp = 1 > 6 false => 6 - 1, 5
// 


// maximum subarray
const maxSubarray = (nums)=>{
    let sum = nums[0];
    let finalSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(sum + nums[i] > nums[i]){
            sum += nums[i];
        }else{
            sum = nums[i];
        }
        finalSum = Math.max(finalSum, sum);
    }
    return finalSum;
}
//console.log(maxSubarray([1,2,3,4,-5]));

// sum = 5, 9 < 4, sum = 9
// 9 - 1 < -1 = no 8 < 9, sum = 9
// 9 + 7 = 16 < 7, sum = 16,
// 

const pattern = (array)=>{
    let result = '';
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i]; j++){
            document.write('x');
        }
        document.write('<br>')
    }
    return result;
}

// console.log(pattern([5,2,5,2,2]))

// two sum problem 
const twoSumPractise = (array, target)=>{
    let valueIndexes = {}; // will store the object indexes
    for(let i = 0; i < array.length; i++){
        const value = array[i];
        const complement = target - value;
        // checking whether the complement is present on the object array or not
        if(valueIndexes[complement] !== undefined){
            console.log(valueIndexes);
            return [valueIndexes[complement], i]
        }else{
            valueIndexes[value] = i;
        }
    }
}


// console.log(twoSumPractise([1,2,3,4,6,8], 14))

// removing duplicates from a sorted array
const removeDuplicatesSorted = (nums)=>{
    let index = 0;// length of final array
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[index]){
            index = index + 1;
            nums[index] = nums[i];
        }
    }
    return index + 1 ;
}

//console.log(removeDuplicatesSorted([1,1,2,3]));
// i = 1, 1,  false,
// i = 2, 2 != 1, true, index = 1, array of index 1 = 2,
// 
const singleNumber = (nums)=>{
    let num = 0;
    let tallyCount = {};
    for(let i = 0; i < nums.length;i++){
        if(tallyCount[nums[i]] !== undefined){
            tallyCount[nums[i]] += 1;
        }else{
            tallyCount[nums[i]] = 1;
        }
    }
    // counting the objects to check which one has a higher count
    for(const key in tallyCount){
        if(tallyCount[key] === 1){
            num = key
        }
    }
    return num;
}

//console.log(singleNumber([2,2,1,1,3,3,4,4,5]))

// missing number
const missingNumber = (nums)=>{
    let missingNumber = 0;
    let hashNumbers = {};
    for(let index = 0; index < nums.length; index++){
         hashNumbers[nums[index]] = nums[index];
    };
    for(let i = 0; i < nums.length; i++){
        // edge case for last element
        if(hashNumbers[nums.length] === undefined){
            missingNumber = nums.length;
        }
        // other elements other than edge case
        if(hashNumbers[i] === undefined){
            missingNumber = i;
        }
    }
    return missingNumber;
}
//console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

// happy number
const isHappy = (n)=>{
    let seen = {};
    if(n === 1) return true;
    // till the while loop does not see the same number being repeated
    while(n !== 1 && !seen[n]){
        seen[n] = true;
        n = checkSumSquares(n);
    }
    // returns 1 if its true
    return n === 1 ? true : false;
};
// checking sum squares
const checkSumSquares = (n)=>{ // returning the square of the number
    return n.toString().split('').reduce((sum, num)=> {
        return sum + Math.pow(num, 2)
    }, 0);
}
//console.log(isHappy(4));
// 4 => 16 => 37 => 58 => 89=> 145=> 42=> 20 => 4

const majorityElement = (nums)=>{
    const threshold = Math.floor(nums.length / 2);
    let numObject = {};
    let finalOutput;
    // incase there is only one element in an array... edge case
    if(nums.length === 1){
        return finalOutput = nums[0];
    }
    for(let i = 0; i < nums.length; i++){
        if(numObject[nums[i]] !== undefined){
            numObject[nums[i]]++;
            // checking whether the object value is greater than the threshold or not
            if(numObject[nums[i]] > threshold){
                return finalOutput = nums[i];
            }
        }else{
            numObject[nums[i]] = 1;
        }
    }
    return finalOutput;
}
//console.log(majorityElement([1]));
