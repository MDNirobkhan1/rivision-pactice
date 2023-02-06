// ---------module - 17--------
// -------------------------------


// var onionPrice = 12;
// var eggPrice = 25;
// var sum = onionPrice+eggPrice;
// console.log(sum);

// var tomatoPrice =25;
// tomatoPrice=30;
// console.log(tomatoPrice);

// price1 = '4.25';
// price2 = 30;
// totalCost = price1+price2;
// var price =parseInt(price1);
// var cost=price+price2;
// // console.log(cost);
// var price2Cost= parseFloat(price1);
// console.log(price2Cost);


// var sum1 = 0.1;
// var sum2 = 0.2;
// var sum = sum1+ sum2;
// sum =sum.toFixed(1);
// sum =parseFloat(sum);
//  console.log(sum);


//    array ----
// --------module - 18   -------------


// var friends =['hanif', 'habib', 'jahid', 'yousof', 'mojamal'];
// console.log(friends);
// var friendsAge =[20, 25, 23, 26, 24];
// console.log(friendsAge.length);

// var friendsColor= ['sada', 'kala','semborno', 'kalo', 'beskalo']
// console.log(friendsColor[2])


// var numbers =[25, 26, 28, 29, 52, 45];
// var totalIndex= numbers.length;
// var element = numbers[4];
// var possionSet = numbers.indexOf(52);
// numbers[2] =13;
// console.log(numbers);
// console.log(totalIndex);
// console.log(element);
// console.log(possionSet);
// console.log(numbers);




// var numbers =[25, 26, 28, 29, 52, 45];
// numbers.push(100);
// numbers.pop();
// console.log(numbers);

// var sum1 = 12;
// var sum2 = 15;
// var sum = (12<=15);
// console.log(sum);


// var iphonePrice = 80000;
// var myBudget = 20000;

// if(iphonePrice < myBudget){
//     console.log('ami phone kinbo');
// }
// else{
//     console.log('ami kinbona')
// }


// -----------------module- 19 -----------
// ------------------------------------------


// var rostGiven =0;
// while(rostGiven<7){
//     console.log('rost den plese');
//     console.log(rostGiven);
//     rostGiven ++;
// }
// var number=1;
// while(number <= 10){
//     console.log(number);
//     number++;

// }

// var number =0;
// while(number <=10){
//     console.log(number);
//     number=number+2;
// }
// var number =1;
// while(number <=20){
//     console.log(number);
//     number=number+2;
// }

// for (var number=0; number<=10; number+=2){
//     console.log(number);
// }

// for(var i=0; i<=100; i+=2){
//     console.log(i);
// }

// var numbers =[25, 26, 28, 29, 52, 45];
// for(var i =0; i<numbers.length; i++){
//     var number=numbers[i];
//     console.log(number);
// }

// for (var i = 1; i <= 20; i++){
//     console.log(i);
//     if(i>10){
//         break;
//     }
// }


// var numbers =[25, 26, 28, 29, 52, 45];
// for (var i = 0; i <numbers.length; i++){
//     var number =numbers[i];
//     if(number>30){
//         continue;
//     }
//     console.log(number);
// } 


// var num=1;
// while(num<=10){
//     console.log(num);
//     num++;
// }
// var num=10;
// while(num>0){
//     console.log(num);
//     num--;
// }
// for (var i=10; i>=0; i--){
//     console.log(i);
// }


// ---------------module-20--------
// -----------------------------------

// function bringSungara(money){
//     console.log('eto taka disen:',money);
//     console.log('ai nen  mam singara');  
// }

// bringSungara(20);


// function bringSungara(money){
//     console.log('eto taka disen:',money);
//     console.log('ai nen  mam singara');  
// }

// var taka = 12;
// bringSungara(taka);

// function add(num1, num2){
//     console.log('gont to add', num1, num2);
// }

// var sum1 = 45;
// var sum2 = 23;

// add(sum1, sum2);


// function sum(a,b,c,d,e){
//     console.log(a,b,c,d,e);

// }
// sum(12, 13, 14, 15, 16);


// function add(number1, number2){
//     console.log(number1 ,number2);
//     var sum = number1+ number2;
//     console.log(sum);

// }
// add(12, 25)


// function add(number1, number2){
//     console.log(number1 ,number2);
//     var sum = number1+ number2;
//     return sum;

// }
// var total=add(12,13);
// console.log('total', total);

// function bringSungara(money){
//     var singaraPrice = 10;
//     var quantity  = money/singaraPrice;
//     console.log(money);
//     return quantity;
// }
// var totalTaka = bringSungara(100);
// console.log('den ', totalTaka);  



// function getAverege(assignment1, assignment2, assignment3) {
//     const total = assignment1 + assignment2 + assignment3;
//     const average = total / 3;
//     return average;
// }
// const assignment1Marak = 58;
// const assignment2Marak = 56;
// const assignment3Marak = 58;
// const myaverage = getAverege(assignment1Marak, assignment2Marak, assignment3Marak);
// console.log(myaverage);



// function getAverege(maht,bangla,english,physic,chemesty,bailogy){
//     const totalMark= maht+bangla+english+physic+chemesty+bailogy;
//     const average= totalMark/6;
//     return average;
// }
// const mahtMarks= 60;
// const banglaMarks= 75;
// const englishMarks= 65;
// const physicMarks=55;
// const chemestyMarks= 95;
// const bailogyMarks= 80;
// const myaverage=getAverege(mahtMarks,banglaMarks,englishMarks,physicMarks,chemestyMarks,bailogyMarks);
// console.log(myaverage);


// var muComputer= {
//     brand: 'hp',
//     price:35000,
//     color:'black',
//     processor:'17',
// }
// console.log(muComputer);
// muComputer.muComputer='i9';
// console.log(muComputer);


// var muComputer= {
//     brand: 'hp',
//     price:35000,
//     color:'black',
//     processor:'17',
// }
// var propertic =Object.keys(muComputer);
// var properticValue= Object.values(muComputer);
// console.log(properticValue);
// console.log(propertic);



// var muComputer = {
//     brand: 'hp',
//     price: 35000,
//     color: 'black',
//     processor: '17',
// }
// const keys = Object.keys(muComputer);
// const  value = Object.values(muComputer);
// console.log(keys);
// console.log(value);

// for(var i=0; i<keys.length; i++){
//     var properti= keys[i];
//     var properticValue =muComputer[properti];
//     console.log(properti,properticValue);
// } 

// --------------module- 21--------
// --------------------------------


// function inchToFeet(inches){
//     const feet=inches/12;
//     return feet;
// }

// const dadaInch=144;
// const dadaFeet = inchToFeet(dadaInch);
// console.log('dada fee',dadaFeet);

// const nanaInch= 168;
// const nanaFeet= inchToFeet(nanaInch);
// console.log('nana feet', nanaFeet)

// function mialKilometer(mails){
//     const kilometer = mails*1.60;
//     return kilometer;
// }
// const mailes = 20;
// const totalKilometer= mialKilometer(mailes);
// console.log('kilometer', totalKilometer);


// function isEven(number){
//     const numbers= number%2;
//     if(numbers===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const evenNum =isEven(46);
// console.log(evenNum);
// const odNum=isEven(45);
// console.log(odNum);

// function isLipYear(year){
//     const reminder = year%4;
//     if(reminder===0){
//         console.log('tumi thik aso');
//     }
//     else{
//         console.log('tume thik na');
//     }
// }
// const years = 2024;
// const lipYear=isLipYear(years);



// function getSumArray(numbers){
//     let sum =0;
//     for(let i = 0; i<numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum = sum +element
//        console.log(index,element, sum);
//     }
//     return sum;
// }
// const myNumbers =[25, 26, 54, 85, 36, 69, 87];
// getSumArray(myNumbers);



// function getSumArray(numbers){
//     const oddNumber=[];
//     for(let i = 0; i<numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         if(element %2 !==0){
//             console.log(index,element);
//             oddNumber.push(element);
//         }

//     }
//     return oddNumber
// ;
// }
// const myNumbers =[25, 26, 54, 85, 36, 69, 87];
// const oddNumber = getSumArray(myNumbers);
// getSumArray(myNumbers);
// console.log(oddNumber);


// function sumOffNumber(number) {
//     let sum = 0;
//     for (i = 1; i <= number; i++) {
//         sum = sum + i;
//         console.log(i, sum);
//     }
//     return sum;
    
// }
// const total =sumOffNumber(8);
// console.log(total);


// function factorial(number){
//     let result= 1;
//     for(i = 1; i<=number; i++){
//         result=result*i;
   
//     }
//     return result;
// }
// const miltipoloiction = factorial(9);
// console.log(miltipoloiction);



// function factorial(number){
//     let result= 1;
//     for(i = number; i>=1; i--){
//         result=result*i;
   
//     }
//     return result;
// }
// const miltipoloiction = factorial(9);
// console.log(miltipoloiction);


// -----------------module -22---------
// ------------------------------------

// const userName = 'nirobKhan';
// const userInput = 'Mohiuddin';
// console.log(userName.toLowerCase());
// console.log(userInput.toUpperCase());
// console.log(userInput.toLocaleLowerCase());


// const lyrics = 'amer suner bangla ami tumay blobashi chiro din tumer akash';
// const doesExit = lyrics.includes('suner');
// console.log(doesExit);
// console.log(lyrics.indexOf('tumer'));
// console.log(lyrics.startsWith('amer'));




// const lyrics = 'amer suner bangla ami tumay blobashi chiro din tumer akash';
// const parts = lyrics.split(' ');
// const sentences = lyrics.split('.');
// const chart =lyrics.split('');
// const partial = lyrics.slice(3, 8);

// console.log(partial);

// const result= Math.pow(8, 2);
// console.log(result);

// const num1 = 25;
// const num2 = 45;
// const gap = Math.abs(num1-num2);
// if (gap<30){
//     console.log('tumi amer friend');

// }
// else{
//     console.log('tumi amer friendt na');
// }

// const number =2.5556;
// const fullName =Math.round(number);
// console.log(fullName);


// for(let i=0; i<6; i++){
//     const random= Math.round(Math.random()*6);
//     console.log(random);
// }

// let first= 5;
// let second = 7;

// console.log(first, second);
// // const temp =first;
// // first= second;
// // second=temp;

// [first,second]=[second,first];
// console.log(first, second);


// const nirob =75;
// const tanim= 85;
// const abdullah = 80;
// if(nirob > tanim && nirob > abdullah){
//     console.log('kekh pabe nirob');
// }
// else if(tanim > nirob && tanim >abdullah){
//     console.log('kekh pabe tanim');
// }
// else {
//     console.log('kekh apbe abdullah');
// }


// function maxArray(numbers){
//     let largest= numbers[0];
//     for(let i= 0; i < numbers.length; i++){
//         const index= i;
//         const element= numbers[index];
//         if(element>largest){
//             largest=element;
//         }
//     }
//     return largest;
// }

// const height=[45, 85, 120, 69, 452, 789, 130];
// const tollest = maxArray(height);
// console.log(tollest);









