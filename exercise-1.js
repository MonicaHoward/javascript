// ***For all the exercises, be sure to log the output of the function to the console.***

        /*PROBLEM #1 - TEKCAMP ***********************************************************************************/
        // Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

        // storing begining int and ending int as seperate variables in case I want to change the range later
        let lowRange = 1;
        let highRange = 100;
        // storing numbers in variables for optimum dynamic-ness
        let num1 = 3;
        let num2 = 5;
        
        // passing in default values
        function tekCamp(lowRange=1, highRange=100, num1, num2) {
            for (var i = lowRange; i < highRange; i++) {
                if(i % (num1 * num2) === 0){
                    console.log(i, " TEKcamp")
                }
                else if (i % num1 === 0) {
                    console.log(i, " TEK")
                }
                else if (i % num2 === 0 ) {
                    console.log(i, " camp")
                } 
            }       
        }
        tekCamp(lowRange, highRange, num1, num2);



        /* PROBLEM #2 - FAHRENHEITH TO CELSIUS ***********************************************************************************/
        //Write a function that converts the current temperature from Fahrenheit to Celsius. 

      
        function farenheitCelsius(tempFarh) {
            let tempCel = (tempFarh - 30) * (5/9) ;
            console.log("Celsius temp is: ", tempCel)
            return tempCel
        }

        farenheitCelsius(100)


        /* PROBLEM # 3 - CELSIUS TO FAHRENHEIT*********************************************************************************************************************/
        //Write a function that converts the Celsius temperature back to Fahrenheit. 

        //your code...
        function celsiusFarenheit(tempCel) {
            let tempFarh = (tempCel * 9/5) + 32
            console.log("Farhenheit temp is ", tempFarh)
            return tempFarh
        }

        celsiusFarenheit(100)



        /* PROBLEM #4 - CAN VOTE?***********************************************************************************/
        // Write a function to determine if someone is old enough to vote.  The function should return a boolean of true or false.

        //your code...
        function canVote(age) {
            age > 18 ? console.log(true) : console.log(false)
            // return false;
        }


        canVote(18)




        /************************************************************************************/
        // Write a function that converts a string to an array. It should return an array.  

        //your code...
    
        function strToArr(str) {
            //converts to an array of strings
            let arr = str.split(" ")
            console.log(arr)
            // converts to an array with one single string
             let newArr = arr.join(" ").split();
            console.log(newArr)
            // return [];
        }

        strToArr("The mouse ran up the clock")





        /************************************************************************************/
        // Write a function that reverses your telephone number.  It should return the reversed telephone number.

        //your code...
        function reversePhone(number) {
            let numberRev = number.toString().split('').reverse().join('');
            console.log(numberRev)
        }

        reversePhone(6822471110)



        /************************************************************************************/
        // Write a function that returns a car object using some given info about your car. Required inputs are the make, model, year, and color.

        //your code...

        let myCar = (make, model, year, color) => {
            console.log(`I have a ${color} ${year} ${make} ${model}! `)
        }


        myCar('Ford', 'Edge', '2012', 'black')

        /************************************************************************************/
        // Write a function that accepts a list of numbers.  The function should identify each number as being even or odd.  The function should output a set of key value pairs, with the key being the number, and the value being the string "even" or "odd".

        //example : [10,23,3,4] => function() => {10 : 'even', 23 : 'odd', 3 : 'odd', 4 : 'even'}

        //your code...


        let evenOrOdd = (arr) => {
            arr.forEach(num => console.log({num: num % 2 === 0 ? 'even' : 'odd'}))
        }


        evenOrOdd([10, 23, 3, 4])

        /************************************************************************************/
        const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
        // Write a "for" loop that console.log()'s the first value in the  array, and every 3rd number, i.e. 0, 3, 6, 9: the zeroth, third, sixth, and ninth values.

        //your code...
        const firstAndThird = (numbers) => {
            let newArr = [];
            for(let i = 0; i < numbers.length; i++) {
                if (i === 0 || i % 3 === 0){
                    newArr.push(numbers[i]);
                }
            }
            //Assuming you want all of the values in a single array
            console.log(newArr);
        }

firstAndThird(numbers)
        /************************************************************************************/
        const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {program : 'TEKcamp'} ];
        //access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

       let school =  foodArray[foodArray.length - 1].program;
       console.log("The value of the new variable called school is ", school);

        const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
        // Using both the foodArray and the adjectiveArray, write "for" loop that console.log()'s a sentence for each corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  i.e. "Potatoes are salty", "Lemon is sour".

        let arraySentence = (foodArray, adjectiveArray) => {
            for (let i = 0; i < foodArray.length; i++){
                for (let i = 0; i < adjectiveArray.length; i++){
                    
                }
            }
        }


        /************************************************************* */
        // Refactor the for() loop to be a while loop.


        for(let i=0; i<10; i++) {
            // console.log(" the value of i in the loop is : " + i);
        }

        let i = 0;
        while (i < 10 ) {
            console.log(" the value of i in the loop is : " + i);
            i++

        }

        //your code...




        /************************************************************* */
        //Multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2
        //use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

        //your code...
        console.log("Amir's Equation: " + " ((30 + 2) * 20) / (10 ** 2) = " + (((30 + 2) * 20) / (10 ** 2)))

        /************************************************************* */
        //Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation values : 

        // ex : 3 is truthy, because it is a number, and numbers are type coerced as 'true' when performing logical (boolean) operations.

        // 20
        console.log(`20 is truthy because it is a number/value and number are type coerced as 'true'`)
        // 0
        console.log(`'0' is falsey because it has no value`)
        // "zero";
        console.log(`'zero' is a string so its type coerces to true`)
        // const zero = 20;
        console.log(`In this case the variable zero stores an int /(a value greater than 1/) so its type coerces to true`)
        // null
        console.log(`Null is truthy because it is one of the weird parts of javascript it symbolizes that something doesn't exist "yet"`)
        // "0"
        console.log(`truthy`)
        // !""
        console.log(`truthy`)
        // {}
        console.log(`falsey`)
        // () => {console.log("hello TEKcamp!");
        console.log(`truthy`)
        // 125
        console.log(`truthy`)
        // undefined
        console.log(`'undefined' is falsey because basically it means that something doesn't exist`)
        // ""
        console.log(`'an empty string' is truthy because that is my best guess based on what I know`)





        /************************************************************* */
        // Refactor the following code using a switch statement:

        const day = "friday";

        // if(day === "monday") {
        //     console.log("we got a long week ahead of us...");
        // } else if(day === "tuesday") {
        //     console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        // } else if (day === "wednesday") {
        //     console.log("We are smack dab in the middle of the week");
        // } else if (day === "thursday") {
        //     console.log("Thursday night... the mood is right");
        // } else if (day === "friday") {
        //     console.log("TGIF.  Friday truly is the best day of the week!")
        // } else {
        //     console.log("It's a weekend!")
        // }

        // switch(day) {
        //     case "monday":
        //         console.log("we got a long week ahead of us...");
        //         break;
        //     case "tuesday":
        //         console.log("tuesday's are still beterr than mondays, but LONG way to go still");
        //         break;
        //     case "wednesday": 
        //         console.log("We are smack dab in the middle of the week");
        //         break;
        //     case "thursday": 
        //     console.log("Thursday night... the mood is right");
        //         break;
        //     case "friday":
        //         console.log("TGIF.  Friday truly is the best day of the week!");
        //         break;
        //     default:
        //         console.log("It's a weekend!");
        switch(day){
            case "monday":
                console.log("we got a long week ahead of us...");
                break;
            case "tuesday":
                console.log("tuesday's are still beterr than mondays, but LONG way to go still");
                break;    
            
            case "wednesday":
                console.log("We are smack dab in the middle of the week");
                break;
            case "thursday":
                console.log("Thursday night...the mood is right");
                break;
            case "friday":
                console.log("TGIF, Friday truly is the best day of the week!");
                break;
            default: 
            console.log("It's a weekend!");            
        }

        /************************************************************* */
        // Refactor the following statements to use ternary expressions:

        const age = 10;
        // if (age > 21) console.log("adult"); else {
        //     console.log("minor");
        // }
        age > 21 ? console.log("adult") : console.log("minor")
        // if (age > 13 && age < 19) console.log('teen'); else {
        //     console.log("not a teenager");
        // };
        age > 13 && age < 19 ? console.log("teenager") : console.log("not a teenaer");
        // if (age > 65) console.log("retired"); else {
        //     console.log("still working...");
        // }
        age > 65 ? console.log("retired") : console.log("still working...")

        /************************************************************* */
        //Create an object literal representing yourself.  Set it equal to a variable that appropriately describes the object.  Include the following properties:
        /*
        -name
        -age
        -gender
        -healthy ? (yes or no)
        -hobbies
        -profession
        -education

        -add a method on your object, entitled 'learn'.  The learn method should print out the message : "[your name] is learning JavaScript".  The learn method should print the value of the name property using the 'this' keyword.

        -add another method on your object of any action you want to perform, using some property that exists on your object.  Make sure to reference any properties on your objedct using the 'this' keyword.
        */

        const TEKcamper = {
            name: "monica",
            age: 34,
            gender: "female",
            healthy: "yes",
            hobbies: ["programming", "collecting memes", "eating tacos"],
            profession: "programmer",
            education: "college",
            learn: function(){ console.log(`${this.name} is learning Javascript`)},
            birthYear: function(currentYear){
                console.log( currentYear - this.age)
            }
        }
        TEKcamper.birthYear(2021);

        /************************************************************* */

        {
            const year = 2021;
            const nums = [1,2,3,4,5];
            let sum = 0;
            let i = 0;
            const doubled = [];

            //Refactor the following statements into expressions


            // 1.
            if(year > 2000 && year < 2100) {
                console.log("welcome to the 21st century");
            }
            let century;
            // 2.
            for(let i=0; i<nums.length; i++) {
                sum += nums[i];
            }
            console.log(sum);
            
            // let sum;
            // 3.
            while(i < nums.length) {
                doubled.push(nums[i]*2);
                i++;
            }
            // let doubled;
            console.log(doubled);
        }


        /************************************************************* */
        // Use array methods to solve the following problems.

        const nums = [1,2,3,4,5];
        // Square every number in the array.  Store the squares in a new array.

        nums.map(x => console.log(` ${x} squared is ${x * x}`) )




        const fivePlus = [1,3,5,7,9,1,3,5,2,3,1,23,4,232,3,4,1,2,2,2,3,4,4,1,12,11,23,3,4,5];
        //Remove all numbers that are less than 5.  Store the results in a new array.

        let removeLittles = fivePlus.filter(x => x < 5);
        console.log( `Array of numbers greater than 5 = ${removeLittles}` )





        // Create an array of 20 randomly generated integers.  Calculate the sum of the elements in the array.

        //your code...
        
        let arrayOfRandomNumbers = (randomNum) => {
            let arr = []
            while(randomNum > 0) {
                arr.push(Math.random());
                randomNum--;
            }
        }
        console.log(`Array of Random Numbers = ${arrayOfRandomNumbers(20)}`)

        const showNums = [12,22,33,44,55,66,77,88,99,101];
        //Print out the value of each number divided by 2.  There is no need to store the output in an array.

        const halfNums = showNums.map(x => x/2);
        console.log(`halfShowNums = ${halfNums}`)


        /************************************************************* */
        /* Chess pieces have point values associated with them.  

        Pawn = 1, Rook = 5, Bishop = 3, Knight = 3, Queen = 9, King = N/A 

        Write a function that calculates the total point value of any given input list of Chess pieces.  
        ex : ['king','queen','pawn','pawn','pawn','bishop'] => chessCalc() => 15

        If there are invalid chess pieces, discard those elements.
        ex : ['iPhone','queen','pawn'] => chessCalc() => 10
        ['android'] => chessCalc() => null

        */

        // function chessCalc(pieces) {
            

        
        // }
        let chessPieces = {
            PAWN: 1,
            ROOK: 5,
            BISHOP: 3,
            KNIGHT: 3,
            QUEEN: 9, 
        }
        function chessCalc(pieces) {
            let total = 0
            for(let i of pieces){
                for(let j in chessPieces){
                    let i = i.toUpperCase()
                    if(i == j){
                        total += chessPieces[i]
                    } 
                }
            }
            return total
        }
        chessCalc(["queen", "pawn", "bishop"])



        /************************************************************* */

        const ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
        //reverse the array, without modifying / `mutating` the ones array.

        const reversedOnes = ones.reverse();
        console.log(reversedOnes);

        /************************************************************* */
        //create a function called performer(cb) that takes in a callback function and runs that callback function.  The function should return the output of the callback function.

        let myCB = ()=>{
            console.log(`I'm a call back`)
        }
        function performer(cb) {
            //code goes here
        }

        performer(myCB())

        /************************************************************* */
        // For the given list of developers : 
        const devs = [
            {
                name: 'Cameron',
                age: 23,
                gender: 'm',
                "tech_stack" : ['html','css','js','React']
            },
            {
                name: 'Liz',
                age: 20,
                gender: 'f',
                "tech_stack" : ['java','spring-boot','MySql']
            },
            {
                name: 'Chris',
                age: 102,
                gender: 'm',
                "tech_stack" : ['react','express','python']
            },
            {
                name: 'Rashid',
                age: 27,
                gender: 'm',
                "tech_stack" : ['thymeleaf','postgres','js','Angular']
            },
            {
                name: 'Annie',
                age: 30,
                gender: 'F',
                "tech_stack" : ['html','scss','less','DynamoDB','GraphQL']
            },
            {
                name: 'Dr. Patel',
                age: 52,
                gender: 'M',
                "tech_stack" : null
            },
            {
                name: 'Isaiah',
                age: 48,
                gender: 'M',
                "tech_stack" : ['Java','','less','DynamoDB','GraphQL']
            },
            {
                name: 'Saima',
                age: 33,
                gender: 'F',
                "tech_stack" : ['MongoDB','Route53','Jenkins','Terraform','Kubernetes']
            },
            {
                name: 'Omar',
                age: 33,
                gender: 'm',
                "tech_stack" : ['c++']
            },
            {
                name: 'Mariam',
                age: 32,
                gender: 'f',
                "tech_stack" : null
            },
        ];

        /************************** */  
        // Find all devs older than 24

        //your code here...
        // const devsOver24 = devs.filter(devs.age > 24 ? console.log(devs.name) : return);
        // console.log(devsOver24);

        let elderly = devs.filter(twentyFivePlus => twentyFivePlus.age > 24);
      
        // const elderly = devs.filter(character => character.age > '24');


        console.log("Devs over 24 ", elderly)

        /************************** */  
        // Remove all people who are not developers (i.e. no tech stack)

        let notDevs = devs.filter(isnt => isnt.tech_stack === null)
        console.log("You ain't no dev ", notDevs)


        /************************** */  
        // Calculate the total age of all the devs

        //your code here...
        let totalAge = devs.filter(age => age.age += age.age)

        console.log("Total Age ", totalAge)
        /************************** */  
        // Find all female devs

        let bestDevs = devs.filter(f => f.gender.toLowerCase() ==='f')
        console.log("Female devs ", bestDevs);

        /************************** */  
        // lowercase the genders of every dev

        //your code here...
        let lowerCase = devs.filter(l => l.gender.toLowerCase())

        console.log("All genders to Lowercase ", lowerCase)
        /************************** */  
        // Sort the developers by name

        //your code here
        let sortByName = devs.sort((a, b) => a.name - b.name)

        let sortedByName =sortByName.forEach((e) => e);
    
        console.log("sort by name ", sortedByName)    

        /************************** */  
        // Sort the devs by age in descending order

        //your code here



        /************************** */  
        // Sort the male coders by age

        //your code here


        /************************** */  
        // For the list of devs, print out sentences including the name and tech stack of each dev, leaving out other information.  Example output is provided below : 

        /*
        Liz specializes in Java, Spring Boot, and MySql.
        Chris specializes in React, Express, and Python.
        Dr. Patel is not a developer.
        */

        //your code here


        /************************************************************* */
        //  Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
        const numbersMixed = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:"val"},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

        function maxNumber(numbers) {
            //your code...
        }

        //After the numbers array has been cleaned up to only have numbers in it, Write a function that sorts the modified numbers array.  Allow the function to sort the array in descending order as well.

        function sortNums(numbers,desc=false) {
            //your code...
        };



        /************************************************************* */
        //Research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.


        // * Arrow function were introduced in ES6 and it completely changed how functions could be written and changed the binding for the 'this' keyword;
            let arrowFunction = () => console.log("I'm an arrow function")
            arrowFunction();

        // * Template Literals which I love and have used throughout this assignment were introduced in ES6 and simplifies concat'ing values. I learned that you CAN'T use template literals on objects nested inside of arrays!
            var sentence = "This is sentence"
            console.log(`This works ${ sentence }`)

            var coolArr = [{day: "Tuesday"}, {time: 1349}]
            console.log(`This won't work  ${coolArr} `)


        /************************************************************* */
        //Add an example of the 5 primary JavaScript data types to the given mapObj.  The key is an example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

        const mapObj = new Map();
        mapObj.set(
        
            "object", {car: "Mazda"},
            "number", 5,
            "boolean", true,
            );

        console.log(mapObj.has(mapObj.bar));

        //The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code `mapObj.set()`, so the code : `mapObj.has() returns true.  The goal is to successfully check and see if {company : "TEKsystems"} exists in the mapObj.

        //your code...


        //loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']


        /************************************************************* */
        //Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly selects one of the mathematical operations whenever it is invoked.  The doMath() function should print to the console the mathetmatical function that was carried out.  The doMath() function should return the computed value of any operation performed.

        // ex : 2,3 => doMath(2,3) => adding : 5
            const addSomething = function(a, b)  { var result = a + b; console.log(`${a} + ${b} = result`);}
            const subtractSomething = function(a, b)  { var result =  a - b; console.log(`${a} - ${b} = result`);}
            const multiplySomething = function(a, b)  { var result =  a * b; console.log(`${a} 
                * ${b} = result`);}
            const divideSomething = function(a, b)  { var result =  a / b; console.log(`${a} / ${b} = result`);}


        const operations = [addSomething(), subtractSomething() ]
        // ]multiplySomething, divideSomething];
        function doMath(a, b) {
            let thisIndex = Math.floor(Math.random() * operations.length);
            // Math.random() * operators.length )
            console.log(operations[thisIndex]);
        };
        doMath(10, 5)
        //your code...



        /************************************************************* */
        //- Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that accepts another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

        //your code...


        //- Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

        //your code


        // Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

        //your code...



// DO NOT DELETE THIS EXPORT
module.exports = {
    tekCamp,
    canVote
}


//*************************************** */



