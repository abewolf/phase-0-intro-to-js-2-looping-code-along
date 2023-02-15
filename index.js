function writeCards(namesArray, eventName) {
    let messagesArray = [];
    for (let i = 0; i < namesArray.length; i++) {
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messagesArray.push(message)
    }
    return messagesArray;
}

function countDown(num) {
    for (let i = num; i >= 0; i--){
        console.log(i)
    }
}
    


    
