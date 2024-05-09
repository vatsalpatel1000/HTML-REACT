let todo=[];

let req = prompt("Please enter your request");
while(true){
    if(req == 'quit'){
        console.log('quitting app');
        break;
    }

    if(req == 'list'){
        console.log('________________');
        for(let i = 0 ; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('________________');
    }
    else if(req == 'add'){
        let task = prompt('please enter the taks you want to add');
        todo.push(task);
        console.log('task add');
    }
    else if(req =='delete'){
        let idx = prompt('please enter the task idx');
        todo.splice(idx,1);
        console.log('task delete');
    }
    else{
        console.log('wrong request');
    }
    req = prompt('Please enter your request');
}