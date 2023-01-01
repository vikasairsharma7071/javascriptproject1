let arr = [{id:1,name:"john",age:"18",profession:"developer"},
{id:2, name:"jack",age:"20", profession:"developer"},
{id:3, name:"karen", age:"19",profession:"admin"}];

let resultBox = document.getElementById("results");
let dropDown = document.getElementById("dropdown");
// let dropDownValue = dropDown.value;
let btn = document.getElementById("filterBtn");


function filterByProfession(){

    resultBox.innerHTML = "";

    let dropDownValue = dropDown.value;
    console.log(dropDownValue);


    if(dropDownValue === "profession"){
        alert("Please select the option from the drop down menu");
        return;
    }

    // To see what can printed in the console 
    // if(dropDownValue === "admin"){
    //     console.log(adminResult);
    // }else{
    //     console.log(developerResult);
    // }


    // Way of printing the filter out function using the forEach loop 
    arr3.forEach((e) => {
        if(e.profession === dropDownValue){
            console.log(e);
            let elementResult = document.createElement("div");
            elementResult.innerText = e.id +" Name :"+e.name+" Profession: "+e.profession+" age: "+e.age;
            resultBox.append(elementResult);
        }
    })


    
}

btn.addEventListener("click",filterByProfession);



// When i want to add new object this existing array then in that case i will be using the push method of array
// arr.push({id:4,name:"vikas",age:"21",profession:"developer"});


// What if here is another array and now i want to merge those two arrays then in that case i will basically be using the concat function
// let arr2 = [{id:4,name:"john1",age:"181",profession:"developer1"},{id:5,name:"john2",age:"182",profession:"developer2"},{id:6,name:"john3",age:"183",profession:"developer3"}] ;
// now i can use the concat method which basically return a new array
// arr = arr.concat(arr2); 


// Now can i use the spread function to merge two array
// let arr2 = [{id:4,name:"john1",age:"181",profession:"developer1"},{id:5,name:"john2",age:"182",profession:"developer2"},{id:6,name:"john3",age:"183",profession:"developer3"}] ;
// let arr3 = [...arr,...arr2] ;

// arr3.forEach((e)=>{
//     console.log(e);
// });
// console.log("break");

// This is how we'll be using the spead operator 




// for(let i = 0;i < arr.length;i++){
//     console.log(arr[i]);
// }


// arr.map((e) => {
//     e.age = (Number)(e.age);
// })

// arr.forEach((e) => {
//     console.log(e);
// })


// This below map will change the type of age from string to number
// arr.map(function changeMap(e){
//     e.age = (Number)(e.age);
// } ) 

// arr.forEach((e) => {
//     if(e.name === "john"){
//         e.age = 19;
//     }
// })

// this can be written as 
// arr.map((e) => {
//     if(e.name === "john"){
//         e.age = 19;
//     }
// })

// arr.forEach((e) => {
//     console.log(e);
// })



// Use case of map function 
// let newArr = arr.map(function hmm(e){
//     return e;
// });
// console.log(newArr);



// This will change the type of age from string to number using the map method 
arr.map(function changeMap(e){
    e.age = (Number)(e.age);
} );


// This will change the age of john from 18 to 19 using the forEach function  
arr.forEach((e) => {
    if(e.name === "john"){
        e.age = 19;
    }
})



// Now can i use the spread function to merge two array
let arr2 = [{id:4,name:"john1",age:"181",profession:"developer"},{id:5,name:"john2",age:"182",profession:"admin"},{id:6,name:"john3",age:"183",profession:"admin"}] ;
let arr3 = [...arr,...arr2] ;


// arr3.forEach((e) => {
//     if(e.profession === "developer"){
//         console.log(e);
//         let elementResult = document.createElement("div");
//         elementResult.innerText = e.id +" Name :"+e.name+" Profession: "+e.profession+" age: "+e.age;
//         resultBox.append(elementResult);
//     }
// })


// console.log("break");
// arr3.forEach((e) => {
//     console.log(e);
// })


// Use of filter function is that it will return only the element with the given condition

let adminResult = arr3.filter((e)=>{
    if(e.profession === "admin"){
        return e;
    }
});

let developerResult = arr3.filter((e)=>{
    return e.profession === "developer";
});

// console.log(developerResult);


