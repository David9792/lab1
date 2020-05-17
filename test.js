import {cadenalarga} from "./cadena.js";
console.log(cadenalarga("aba , aa , ad , vcd , aba"))
console.log(cadenalarga("enyky , benyky , yely , varennyky "))


import {invertir} from "./invertida.js";
console.log(invertir("(bar)"))
console.log(invertir("foo(bar)baz"))
console.log(invertir("foo(bar)baz(blim)"))
console.log(invertir("foo(bar(baz))blim"))

import {palindromo} from "./palindromo.js";

console.log(palindromo("anitalavalatina"))// es palindromo
console.log(palindromo("hola mundo"))// no es palindromo