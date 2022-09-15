const comentario = "Esse COVID é muito perigoso!";
const arrayDePalavras= comentario.split(" ")
const palavraProibida="COVID"
for(palavras of arrayDePalavras){
    if (palavras==palavraProibida){
        console.log(" Comentário bloqueado por conter palavras proibidas")  
    }
}