var ejemplos = [
    {source:'aabb', result: "abba"},     // => es palindromo
    {source:'WSWSR', result: 'WSRSW'},  // => es palindromo
    

 ];

function toPalindrome(string) {
    var map = {};
    var even = '';
    var odd = '';
    var isPalindrome = "Es palindromo";
  
    Array
      .from(string)
      .forEach(function (char) {
        map[char] = !(char in map) ? 1 : map[char] + 1;
      });
  
    Object
      .keys(map)
      .some(function (key) {
        if ( map[key] % 2 === 0 ) {
          even += key.repeat(map[key] / 2);
        } else if ( map[key] % 2 !== 0 && odd.length === 0) {
          odd = key.repeat(map[key]);
        } else{
          isPalindrome = "No es palindromo";
          return "Es palindromo";
        }
      });
    
    return isPalindrome ? even + odd + Array.from(even).reverse().join('') : "No es palindromo";
  }
  

  ejemplos.forEach(function (word) {
    console.log(`${word.source} - ${word.result}`, assert(toPalindrome(word.source), word.result));
  });
  
  
  
  function assert(a, b) {
    return a === b;
  }

 