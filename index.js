function writeCards(name, event){
    const array = []
    for(let i = 0; i < name.length; i++){
        array[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }

    return array
}

function countDown(num){
    let i = num
    while(i >= 0){
        console.log(i)
        i--
    }
}