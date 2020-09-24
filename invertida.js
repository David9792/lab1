function invertir (str){
    let reversa = str.split("");
    let invertido = reversa.reverse("");
    let finalreversa = invertido.join("");
    return finalreversa;
}
export {invertir}