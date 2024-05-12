const student  = {                /* Object literals  it will show object with key & their values  and always create const  */
    name : " ",
    age: 23,
    marks : 75.5
}

let student1  = ["vatsal",23,75.5];                  /* Array  it will show only values */

const instagram = {
    username : '@vatsalpatel1000',
    content : '#first post',
    likes : 150,
    report : 5,
    tags : '@apnacollege'
};

// instagram['username']; OR                            Get object literal value
// instagram.username;                                  can't use instagram.username; for varible always use instagram['username'];


//                                                       object litrals create "key" to  string  first then it call the value 

instagram.tags = "@instagram";                          // to change the value to object litrals 
instagram.gender = 'male';                              // to add new key and value on object litrals 
delete instagram.gender;                                // to delete key and value from object litrals 


const classinfo = {                                     // Create nested object litrals 
    Vatsal : {
        username : '@vatsalpatel1000',
        content : '#first post',
        likes : 150,
        report : 5,
        tags : '@apnacollege'
    },
    Bhavesh : {
        username : '@Bhavesh1000',
        content : '#first post',
        likes : 150,
        report : 5,
        tags : '@apnacollege'
    },
    Nirbhay : {
        username : '@Nirbhay1000',
        content : '#first post',
        likes : 150,
        report : 5,
        tags : '@apnacollege'
    }
};

classinfo.Vatsal;
classinfo.Bhavesh;
classinfo.Nirbhay.username;


const classinfo1 = [                                      // array object litrals 
    {
        username : '@vatsalpatel1000',
        content : '#first post',
        likes : 150,
        report : 5,
        tags : '@apnacollege'
    },
    {
        username : '@Bhavesh1000',
        content : '#first post',
        likes : 150,
        report : 5,
        tags : '@apnacollege'
    },
    {
        username : '@Nirbhay1000',
        content : '#first post',
        likes : 150,
        report : 5,
        tags : '@apnacollege'
    }
];

classinfo1[0].username;                             // call object
classinfo1[1].content;                              // call object
classinfo1[2].report = '8';                         // update object key &value
classinfo1[0].gender = 'male';                      // add  object with key value 


let step1 = Math.random();
step2 = step1 *10;
step3 = Math.floor(step2);
result  = step3 +1;

let random = Math.floor(Math.random() * 10) + 1;    // Generate random numsber 0-10
let random1 = Math.floor(Math.random() * 100) + 1;    // Generate random numsber 0-100
let random2 = Math.floor(Math.random() * 5) + 1;    // Generate random numsber 0-5
let random3 = Math.floor(Math.random() * 5) + 21;    // Generate random numsber 21-25


const max = prompt('enter the max value ');
const random14 = (Math.floor(Math.random * max) + 1);
let guess = prompt('Guess the number ');
while(true){
    if(guess == 'quit'){
        console.log('use quit')
        break;
    }
    if(guess == random){
        console.log('u r right');
        break;
    }
    else if(guess < random){
        guess = prompt("u r guess was too large ");
    }
    else{
        guess = prompt("u r guess was too small ");
    }
    
    // else{
    //     guess = prompt('ur guess was wrong');
    // }
}


