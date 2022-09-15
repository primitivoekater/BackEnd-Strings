const email = "aluno@cubos.academy";
email.includes("@")&&
email.includes(".")&&
email.includes(".")&&
email.indexOf(".")!==0&&
email.indexOf(".")!==email.length-1?
console.log("email valido"):
console.log("email invalido")