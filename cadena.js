function cadenalarga(str){
    let words = str.split(" ");
    let maxSize = Math.max(...words.map(word =>word.length))
    return words.filter(word => word.length === maxSize );
    return maxSize;
}
console.log(cadenalarga("aba , aa , ad , vcd , aba"))
console.log(cadenalarga("enyky , benyky , yely , varennyky "))
export {cadenalarga}