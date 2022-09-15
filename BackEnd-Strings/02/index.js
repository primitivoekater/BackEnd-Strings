const cpf = "12345678900";
const cnpj = "12345678900";
let arrayCPF=cpf.split("")
let arraycnpj=cnpj.split("")
arrayCPF.splice(3,0,".")&&arrayCPF.splice(7,0,".")&&arrayCPF.splice(11,0,"-")
arraycnpj.splice(2,0,".")&&arraycnpj.splice(6,0,".")&&arraycnpj.splice(10,0,"-")&&arraycnpj.splice(15,0,"-")
cpf.length<11||cpf.length>11?console.log("cpf com tamanho invalido"):console.log("cpf com tamanho valido");
cnpj.length<17||cnpj.length>17?console.log("cnpj com tamanho invalido"):console.log("cnpj com tamanho valido");
cpfeditado=arrayCPF.toString()
cpffinal=cpfeditado.replace(/,/g, '')
cnpjeditado=arraycnpj.toString()
cnpjfinal=cnpjeditado.replace(/,/g, '')
console.log(cnpjfinal)
console.log(cpffinal)
