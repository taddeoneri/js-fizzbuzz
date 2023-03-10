/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

let number;

const box = document.querySelector('.box');

for(let i = 1; i <= 100; i++){
    if((i % 3 == 0) && (i % 5 == 0)){
        number = 'FizzBuzz';
        background = 'bg-fizz-buzz';
    }else if(i % 5 == 0){
        number = 'Buzz';
        background = 'bg-buzz';
    }else if(i % 3 == 0){
        number = 'Fizz';
        background = 'bg-fizz';
    }else{
        number = i;
        background = 'bg-n';
    }
    box.innerHTML += `
        <div class="square d-flex center ${background}">
            <div class="content">${number}</div>
        </div>
    `;

}