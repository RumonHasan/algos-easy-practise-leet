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

const removeElement = (nums, val)=>{
    return nums.filter((singleNumber)=> singleNumber !== val);
}
//console.log(removeElement([3,2,2,3], 3))

const findTheDifference = (s, t)=>{
    const sArray = s.split('');
    const tArray = t.split('');
    let sHash = {};

    // populating the sHash with with the positions
    for(let i = 0; i < sArray.length; i++){
        if(sHash[sArray[i]] !== undefined){
            sHash[sArray[i]]++;
        }else{
            sHash[sArray[i]] = 1;
        }
    }
    console.log(sHash['a']);
    for(let l = 0; l < tArray.length; l++){
        console.log(sHash);
        if(!sHash[tArray[l]]){
            return tArray[l];
        }else{
             sHash[tArray[l]]--;
        }
    }
    // s: !a of t => a - 1, a; 0,
    // s: !e of t=>  e - 1, e: 0
    // s2: !a
  
}

//console.log(findTheDifference('aba', 'abab'));

const wordPattern = (pattern, s)=>{
    let stringArray = s.split(' ');

    let stringHash = {};

    // edge case important because the the second string should be an array of words
    if(stringArray.length !== pattern.length){
        return false;
    }
    
    for(let i = 0; i < stringArray.length; i++){
        if(stringHash[pattern[i]]){
            if(stringHash[pattern[i]] !== stringArray[i]){
                return false;
            }
        }else{
            if(Object.values(stringHash).indexOf(stringArray[i]) !== -1){
                return false;
            }else{
                stringHash[pattern[i]] = stringArray[i];
            }
            
        }
        
    }
    
    return true;
}

//console.log(wordPattern("abba", "dog cat dog cat"));

const matchingElements = (array1, array2)=>{
    let hash = {};
    for(let i = 0; i < array1.length; i++){
        hash[array1[i]] = true;
    }
    console.log(hash);
    for(let j = 0; j < array2.length; j++){
        if(hash[array2[j]]){
            return array2[j];
        }
    }
    return false;
}

//console.log(matchingElements([1,2,3,4], [5,6,7,8]));

const powerOfTwo = (n)=>{   
    if(n === 0) return false;
   if( n === 1) return true;
   if(n % 2 !== 0){
       return false;
   }
   return powerOfTwo(n / 2);
}

//console.log(powerOfTwo(14));

// find restaurant problem
// initial approach;
// var findRestaurant = function(list1, list2) {
//     let restaurantHash = {};
//     let collection = [];
//     let leastIndexOutput = {};
//     let minIndex = 0;
//     let finalResult = [];
//     // populating first list
//     for(let i = 0; i < list1.length; i++){
//         restaurantHash[list1[i]] = i;
//     }
//     for(let i = 0; i < list2.length; i++){
//         if(restaurantHash[list2[i]] !== undefined){ // in order to get access to the first element
//             let totalIndex = restaurantHash[list2[i]] + i;
//             collection.push({key: list2[i], index: totalIndex});
//         }
//     }
//     minIndex = Math.min(...collection.map(item=> item.index));
//     leastIndexOutput = collection.filter((item)=> item.index === minIndex);
//     finalResult.push(leastIndexOutput[0].key);

//     return finalResult;
// };

// concise version
const findRestaurant = (list1, list2) => {
    let restaurantHash = {};
    let collection = [];
    let minIndex = Infinity;
    // populating first list
    for(let i = 0; i < list1.length; i++){
        restaurantHash[list1[i]] = i;
    }
    for(let i = 0; i < list2.length; i++){
        if(restaurantHash[list2[i]] !== undefined){ // in order to get access to the first element
            let totalIndex = restaurantHash[list2[i]] + i;
            collection.push({key: list2[i], index: totalIndex});
            minIndex = Math.min(minIndex, totalIndex);
        }
    }

    return collection.filter(item => item.index === minIndex).map(item=> item.key);
}
// finding the least index sum and common

//console.log(findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"],
//["KFC","Shogun","Burger King"]))

const numJewelsInStones = (jewels, stones)=>{
   let jewelHash = {};
   let counter = 0;
   for(let i = 0; i < jewels.length; i++){
       jewelHash[jewels[i]] = jewels[i];
   }
   console.log(jewelHash);
   for(let j = 0; j < stones.length; j++){
        if(jewelHash[stones[j]] !== undefined){
            counter = counter + 1;
        }
   }
   return counter;
}

//console.log(numJewelsInStones("aA","aAAbbbb"))

const isAnagram = (s, t)=>{
    let hash = {};
    // incase the length dont match
    if(s.length !== t.length){
        return false;
    }
    for(let i = 0; i < s.length; i++){
        if(hash[s[i]] !== undefined){
            hash[s[i]]++;
        }else{
            hash[s[i]] = 1;
        }
    }
    for(let j = 0; j < t.length; j++){
        if(!hash[t[j]] || hash[t[j]] < 0){
            return false;
        }else{
            hash[t[j]]--;
            console.log(hash);
        }
    }
    return true;
}

//console.log(isAnagram("anagram", "nagraam"));

// finding the dissapeaared elements

const findDisappearedNumbers = (nums)=>{
    let numHash = new Set();
    let missingCollection = [];
    for(let i = 0; i < nums.length; i++){
        numHash.add(nums[i]); // adding to the set as it filters out copied elements
    }
    for(let j = 1; j <= nums.length; j++){
       if(!numHash.has(j)){
           missingCollection.push(j);
       }
    }
    return missingCollection;
}
//console.log(findDisappearedNumbers([1,1]))


// repeated substring problem
const repeatedSubstringPattern = (s)=>{
    if(s.length === 1){ // if the length is one there can be no substring
        return false;
    }
    let stringTemp = ''; // empty substring to check whether it equals the main one or not
    for(let i = 0; i < s.length /2; i++){
        while(stringTemp.length < s.length){
            stringTemp = stringTemp + s.substring(0, i + 1);
        }
        // first case returns aaaa
        if(stringTemp === s){
            return true;
        }else{
            stringTemp = '';
        }
    }
    return (stringTemp === s) ? true: false;
}
//console.log(repeatedSubstringPattern('abcabc'))

// is palindrom
const isPalindrome = (string)=>{
    for(let i = 0; i < string.length / 2; i++ ){
        if(string[i] !== string[string.length - i - 1]){
            return false;
        }
    }
    return true;
}

//console.log(isPalindrome('boob'))

// find the shortest subarray
const findShortestSubarray = (nums)=>{
    
}
//console.log(findShortestSubarray([1,2,2,3,1]))

// add digits
const addDigits = (num)=>{
    let n = addTheNumbers(num);
    if(n < 10){
        return n;
    }
    return addDigits(n);
}
// recursive add 
const addTheNumbers = (n)=>{
    return n.toString().split('').reduce((sum, num)=>{
        return parseFloat(sum) + parseFloat(num) 
    },0)
}
//console.log(addDigits(199))

const canPlaceFlowers = (flowerbed, n) => {
    let possibleFlower = 0;
    for(let i = 0; i < flowerbed.length; i++){
        // checking adjacent conditions in order to check whether there is a plant or not
            if(possibleFlower < n){
                if(flowerbed[i] === 0){
                    const nextEl = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];
                    const prevEl = i === 0 ? 0 : flowerbed[i - 1];
                   
                    if(prevEl === 0 && nextEl === 0){
                        flowerbed[i] = 1;
                        possibleFlower++;
                    }
                   
                }
            }
    }
    return possibleFlower === n ? true: false;
}
//console.log(canPlaceFlowers([1,0,0,0,0,1], 2));


const intersection = (nums1, nums2)=>{
    let arrayHash = {};
    let intersectionCollection = new Set();
    for(let i = 0; i < nums1.length; i++){
        arrayHash[nums1[i]] = true;
    }
    for(let i = 0; i < nums2.length; i++){
        if(arrayHash[nums2[i]]){
            intersectionCollection.add(nums2[i]);
        }
    }
    return Array.from(intersectionCollection);
}

//console.log(intersection([4,9,5], [9,4,9,8,4]));

const moveZeroes = (nums)=>{
    let tempNonZeroIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
          nums[tempNonZeroIndex] = nums[i];
          tempNonZeroIndex++;
        }
    }
    // refill the ending indexes starting from the remaining non zero indexes
    for(let i = tempNonZeroIndex; i< nums.length; i++){
        nums[i] = 0;
    }
    return nums;
}
// i = 0, nums[0] !== 0 false;
// i = 1, nums[1] !== 0 true; nums[0] = nums[1] = 1 , tempIndex = 1;
// i = 2, nums[2] !== 0 false;
// i = 3, nums[3] === 3, true; nums[1] = nums[3] = 3,, tempIndex = 2;
// i = 4, nums[4] !== 0 true, nums[4] = ; nums[2] = nums[4] = 12;


//console.log(moveZeroes([0,1,0,3,12]));

const removeElementArray = (nums, val)=>{
    let newArray = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== val){
            newArray.push(nums[i]);
        }
    }
    return newArray.length;
}
//console.log(removeElementArray([3,2,2,3],3))

const intersectII = (nums1, nums2)=>{
    // need to return all the same number of elements 
    let numHash = {};
    let numArray = [];
    for(let i = 0; i < nums1.length; i++){
        if(numHash[nums1[i]] !== undefined){
            numHash[nums1[i]]++;
        }else{
            numHash[nums1[i]] = 1;
        }
    }
    for(let i = 0; i < nums2.length; i++){
        if(numHash[nums2[i]]){
            numArray.push(nums2[i]);
            numHash[nums2[i]]--;
        }
    }
    return numArray;
}

//console.log(intersectII([4,9,5], [9,4,9,8,4]))

const duplicateZeroes = (arr)=>{
    let zeroCounter = 0;
    for(let i = 0; i < arr.length; i++){
        // igrnoring the last element
        if(arr[i] === 0 && i !== arr.length - 1){
           arr.splice(i, 0, 0);
           i++; // in order to move the counter to the next element
           zeroCounter++;
        }
    }
   for( let j = 0; j < zeroCounter; j++){
       arr.pop();
   }
   return arr;
}


//console.log(duplicateZeroes([1,0,2,3,0,4,5,0]))
const shuffleString = (s, indices)=>{
    if(s.length !== indices.length){
        return;
    }
    let wordObjArray = [];
    let returnString =  '';
    let tempIndex = 0;
    for(let i = 0; i < s.length; i++){
        wordObjArray.push({ letter: s[i],index:indices[tempIndex]});
        tempIndex++;
    }
    let sortedObject = wordObjArray.sort((a,b)=> a.index - b.index);
    sortedObject.map((item)=> returnString += item.letter);
    return returnString;
}

//console.log(shuffleString("codeleet", [4,5,6,7,0,2,1,3]));

// two out of three easy problem... done using sets
const twoOutOfThree = (nums1, nums2, nums3)=>{
    let valueSet = new Set();
    // array sets
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);
   
    // set approach
    const combinationSet = [...new Set([...nums1, ...nums2, ...nums3])];
    const mainSet = new Set(combinationSet);
    console.log(mainSet);

    for(const value of mainSet.values()){
        let counter = 0; // counter to check how many have a value
        if(set1.has(value)){
            counter++;
        }
        if(set2.has(value)){
            counter++;
        }
        if(set3.has(value)){
            counter++;
        }
       
        if(counter >= 2){
            valueSet.add(value);
        }
    }
    return Array.from(valueSet);
}

//console.log(twoOutOfThree([1,1,3,2], [2,3], [3]));


const maxWordsFound = (sentences) =>{
    let maxLen = 0;
    for(let i = 0; i < sentences.length; i ++){
       maxLen = Math.max(maxLen, sentences[i].split(' ').length);
    }
    return maxLen;
}

//console.log(maxWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]));

const divideArray = (nums)=>{
    if(nums.length % 2 !== 0){
        return false;
    };
    let numHash = {}

    for(let i = 0; i < nums.length; i++){
        if(numHash[nums[i]] !== undefined){
            numHash[nums[i]]++;
        }else{
            numHash[nums[i]] = 1;
        }
    }
    for(const [key, value] of Object.entries(numHash)){
        if(value % 2 !== 0){
            return false;
        }
    }
    return true;
};

//console.log(divideArray([18,19,5,5,18,19,5,6,12,19,13,4,16,11,4,16,10,8,12,8,2,1,8,17,4,18,3,5,16,2,16,12,17,16,7,16,2,17,19,9,1,20,17,17,4,6]));

const intersectionArray = (nums)=>{
    let collection = [];
    // es6 approach using every function
    for(let i = 0; i < nums[0].length; i++){
        // uses every to check whether all the series have the elements or not
        if(nums.every((singleSeries)=> singleSeries.includes(nums[0][i]))){
            collection.push(nums[0][i]);
        }
    }
    return collection.sort((a, b)=> a - b);
}

//console.log(intersectionArray([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))

const arrayPairSum = (nums) =>{
    let maxSum =0;
    nums = nums.sort((a, b)=> a - b);
    console.log(nums);

    for(let i = 0; i < nums.length; i+=2){
        maxSum += nums[i];
    }
    return maxSum;
}
//console.log(arrayPairSum([6,2,6,5,1,2]));

const climbStairs = (n)=>{

}
//console.log(climbStairs(3));

const longestContinuousIncreasingSub = (nums)=>{    
    let maxLen = 0;
    let currentLen = 0;
    for(let i = 0; i < nums.length; i++){
        if((i === 0) || (nums[i] > nums[i - 1])){
            currentLen = currentLen + 1;
        }else{
            // if its not bigger then returns currentLength = 1;
            currentLen = 1;
        }
        maxLen = Math.max(maxLen, currentLen);
    }
    return maxLen;
}

//console.log(longestContinuousIncreasingSub([1,3,5,4,7]))

const commonChars = (words)=>{
    let collection = [];
    const firstWord = words[0];
    for(let char of firstWord){
        if(words.every(singleWord=> singleWord.includes(char))){
            // removing the letters after adding them
            collection.push(char);
            words = words.map(item=> item.replace(char, ''));
        }
    }
    // checking the occurences instead;
    return collection;
}
//console.log(commonChars(["bella","label","roller"]));

const canThreePartsEqualSum = (arr)=>{
    // sum needs to be divisble by three in order to be equal
    let partitionCount = 0;
    let sum = 0;
    let partitionSum;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    // if the sum is not equal to three then it cannot show the possible three section
     if(sum % 3 !== 0){
            return false;
     }
    // checking the three partitions
    partitionSum = sum / 3; let secondarySum = 0;
    for(let i = 0; i < arr.length; i++){
        // have to check whether the partitions equal the sum or not
        secondarySum += arr[i];
        if(secondarySum === partitionSum){
            partitionCount++;
            secondarySum = 0;
        }
    }
    return partitionCount >= 3; // bigger than 3 only in the case of all 0s in the array
    
}
//console.log(canThreePartsEqualSum([0,0,0,0]));

const nextGreatestLetter = (letters, target)=>{
    let ans = letters[0];
    for(let i = 0 ; i < letters.length; i++){
        if(letters[i] > target){
            ans = letters[i];
            break;
        }
    }
    return ans;
}

//console.log(nextGreatestLetter(["c","f","j"], 'a'));

const rotate = (nums, k)=>{
    // removing the last k elements
    for(let i = 0; i < k; i++){
        nums.unshift(nums.pop());
    }
   return nums;
}
//console.log(rotate([1,2,3,4,5,6,7], 3))

const findDifference = (nums1, nums2)=>{
    let array1 = [];
    let array2 = [];
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    // set1 
    for(let item of set1){
        if(!set2.has(item)){
            array1.push(item);
        }
    }
    // set2
    for(let item of set2){
        if(!set1.has(item)){
            array2.push(item);
        }
    }
    return [array1, array2];

}
//console.log(findDifference([1,2,3,3], [1,1,2,2]))




