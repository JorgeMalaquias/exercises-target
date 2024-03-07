function fibonacciCheck(number){
    let nextTolastNumber = 0;
    let lastNumber = 1;
    
    do{
        if(number===nextTolastNumber){
            return "O número informado faz parte da sequência Fibonacci";
        }else{
            if(number===lastNumber){
                return "O número informado faz parte da sequência Fibonacci";
            }
        }
        let aux = lastNumber;
        lastNumber = lastNumber + nextTolastNumber;
        nextTolastNumber = aux;
    }while(lastNumber<=number)

    return "O número informado não faz parte da sequência Fibonacci";
}

console.log("3");
console.log(fibonacciCheck(3));
console.log("4");
console.log(fibonacciCheck(4));
console.log("5");
console.log(fibonacciCheck(5));
console.log("67");
console.log(fibonacciCheck(67));
console.log("1597");
console.log(fibonacciCheck(1597));

function reverseString(string){
    let newString = string.split("");
    let index1 = 0;
    let index2 = string.length-1;
    while(index1<index2){
        let aux = newString[index1];
        newString[index1] = newString[index2];
        newString[index2] = aux;
        index1++;
        index2--;
    }
    return newString.toString().replaceAll(",","");
}
console.log("cinco");
console.log(reverseString("cinco"));
console.log("sete");
console.log(reverseString("sete"));
console.log("arara");
console.log(reverseString("arara"));
console.log("beto");
console.log(reverseString("beto"));
console.log("maçã");
console.log(reverseString("maçã"));


/*
4) Vou me referir aos 3 interruptores com A,B e C. E as salas com 1, 2 e 3. Primeiro, eu deixaria os interruptores A e B ativos (luz acesa) e o C inativo (luz apagada). 

Eu iria na sala 1:
- se a sala 1 estivesse apagada, o interruptor C é da lampada da sala 3. Só restaria saber os interruptores das outras salas. Aí eu apagaria a luz do interruptor B e iria até a sala 2, se sua luz estivesse apagada o interruptor B seria da sala 2, se estiver acesa, o interruptor B é da sala 3. Em ambos os casos, daria pra concluir também de qual lâmpada é o interruptor C, e já se saberia qual interruptor controla cada lâmpada.
- se a sala 1 estivesse acesa, sua lâmpada poderia ser tanto do interruptor A como do B. Antes de ir em outra sala, eu apagaria a lâmpada do interruptor A e acenderia a do interruptor C. E iria até a sala 2:
- - se a lâmpada da a sala 2 estivesse apagada concluiria que ela é do interruptor A, pois é o único cuja lâmpada estaria apagada naquele momento, e logo concluiria que a lâmpada da sala 1 (que até então poderia ser tanto do interruptor A quanto do B) é de fato do interruptor B, e por eliminação já concluiria que a lâmpada da sala 3 é do interruptor C.
- - se a lâmpada da a sala 2 estivesse acesa, e considerando que só estão acesas lâmpadas concluiria que ela é do interruptor C, pois é o único cuja lâmpada estaria apagada naquele momento, e logo concluiria que a lâmpada da sala 1 (que até então poderia ser tanto do interruptor A quanto do B) é de fato do interruptor B, e por eliminação já concluiria que a lâmpada da sala 3 é do interruptor C.

*/