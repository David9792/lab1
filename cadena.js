function cadenalarga(str){
    let words = str.split("");
    let maxSize = Max.max(...words.map(word =>word.length))
    return words.filter(word => word.length === maxSize );
    return maxSize;
}