// 1  Sigma - Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).

function sigma(a){
    var sum=0;
    for(var i=1;i<=a;i++){
        sum=sum+i;
    }
    console.log(sum);
    return(sum);
}

sigma(2);
sigma(3);
sigma(4);
sigma(5);
sigma(6);
sigma(7);
sigma(8);


// 2  Factorial - Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).

function factorial(num){
    while(num>=0){
        var product=1;
        for(var i=num;i>0;i--){
            product = product*i;
        }
        console.log(product);
        return(product);
    }
    console.log('null');
    return(null);
}
factorial(0);
factorial(1);
factorial(2);
factorial(3);
factorial(4);
factorial(5);
factorial(6);
factorial(7);
factorial(8);

factorial(-1);
factorial(-2);
factorial(-3);


// 3  Fibonacci - Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.

function fibonacci(num){
    fib=[0,1];
    for(var i=2;i<=num;i++){
        fib.push(fib[fib.length-1]+fib[fib.length-2])
    }
    console.log("Fibonacci "+num);
    console.log(fib[num]);
    return(fib[fib.length-1]);
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);


// 4  Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.

function secondToLast(arr){
    while(arr.length>1){
        console.log(arr[arr.length-2]);
        return(arr[arr.length-2])
    }
    console.log(null)
    return(null);
}

arr1=[1];
arr2=[1,2];
arr3=[1,2,3];
arr4=[1,2,3,4];
arr5=[1,2,3,4,5];
arr6=[1,2,3,4,5,6];

secondToLast(arr1);
secondToLast(arr2);
secondToLast(arr3);
secondToLast(arr4);
secondToLast(arr5);
secondToLast(arr6);


// 5  Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.

function nthToLast(arr,n){
    if (arr.length>=n){
        console.log(arr[arr.length-n]);
        return(arr[arr.length-n]);
    }
    else {
        console.log(null);
        return(null);
    }
}

arr6=[1,2,3,4,5,6];

nthToLast(arr6,1);
nthToLast(arr6,2);
nthToLast(arr6,3);
nthToLast(arr6,4);
nthToLast(arr6,5);
nthToLast(arr6,6);
nthToLast(arr6,7);
nthToLast(arr6,8);


// 6  Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr){
    if (arr.length>1){
        var max=arr[0];
        for(var i=1;i<arr.length;i++){
            if(arr[i]>max){
                max=arr[i];
            }
        }
        var arrTwo=[]
        for(var i=0;i<arr.length;i++){
            if(arr[i] != max){
                arrTwo.push(arr[i]);
            }
        }
        var max2=arrTwo[0];
        for(var i=0;i<arrTwo.length;i++){
            if(arrTwo[i]>max2){
                max2=arrTwo[i];
            }
        }
        console.log("second largest = "+max2);
        return(max2);
    }
    else {
        console.log(null);
        return(null);
    }
}

y=[2];
secondLargest(y);

x=[9,9,1,7,4,8,3,9,2,5,6,4];
secondLargest(x);

z=[1,2,3,4,5,4,3,2,1];
secondLargest(z);

// 7  Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].

function doubleTrouble(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(arr[i]);
        newArr.push(arr[i]);
    }
    return(newArr);
}

x=[4, "Ulysses", 42, false];
console.log(x);
y=doubleTrouble(x);
console.log(y);
