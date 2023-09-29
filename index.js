function myFunction(){
    debugger
    let a = document.getElementById('insertNumber').value;
    if(a%3 == 0 && a%5 == 0){
        document.getElementById('result').value = 'FizzBuzz';
        console.log('FizzBuzz');
    }
    else if(a%3 != 0 && a%5 == 0){
        document.getElementById('result').value = 'Fizz';
        console.log('Fizz');
    }else if(a%3 == 0 && a%5 != 0){
        document.getElementById('result').value = 'Buzz';
        console.log('Buzz');
    }
}
