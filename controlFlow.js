//  If and elseIF and Else condision
 
 let hour = 5;

 if(hour >= 6 && hour < 12){
 console.log('Good morning');
 }
 else if(hour >= 12 && hour < 18){
    console.log('Good aftetnoon');
    }
    else{
        console.log('Good bye');
        }

// switch case     
let role = 'guest';


switch(role){
    case 'guest':
        console.log("Guest User");
        break;

        case 'MOderat':
            console.log("Guest User");
            break;

         default:
                console.log("Guest User");
}


// ------------LOOPS------------

// 1.for loop

for (let i =0; i <= 5; i++){
    console.log(i,"Hello Guna")
}
// output
// 0 Hello Guna
// 1 Hello Guna
// 2 Hello Guna
// 3 Hello Guna
// 4 Hello Guna
// 5 Hello Guna
for (let i =5; i >= 1; i--){
if (i % 2 !== 0) console.log(i);
}
// output (revers)
// 5
// 3
// 1
for (let i =0; i <= 5; i++){
    if (i % 2 !== 0) console.log(i);
    }
// output (ordervise) and Odd number
// 1
// 3
// 5


// 2.while LOOP

let i = 0;
while(i <= 5){
    if (i % 2 !== 0) console.log(i);
    i++;
}

// 3.Do while LOOP

let j = 0;
do{
    if (j % 2 !== 0) console.log(j);
    j++;
}while(j <= 5);


// 4.For In LOOP
const person = {
    name: 'Guna',
    age: 30
};

for (let key in person)
 console.log(key, person[key]);

 //5.For OF LOOP

const colors = ['red','green','blue'];

 for (let color of colors)
 console.log(color);




 