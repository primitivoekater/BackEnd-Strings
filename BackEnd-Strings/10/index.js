const nomeArquivo = 'Foto da Familia.png';
const  tipoArquivo= nomeArquivo.slice(-4)
tipoArquivo!=="jpg"||tipoArquivo!=="jpeg"||tipoArquivo!=="gif"||tipoArquivo!=="png"?console.log("Arquivo inválido"):console.log("arquivo ok")