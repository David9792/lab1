function palindromo(cadena)
{
    t = cadena.length;
    cadena=cadena.replace(/ /g, "");
    if(t == 0){
        return "no es palindromo";
    }
    for(i=0;i<t/2;i++){
        if(cadena[i] != cadena[t-1-i]){
            return "no es palindromo";
        }
    }
    return "es palindromo";
 
	
		
}

console.log(palindromo("anitalavalatina"))
console.log(palindromo("hola mundo"))