
export const encryptPolybius = (text) => {
  text = text.replace(/\s/g, '');
  let cifrado = "";
  for(let i = 0 ; i < text.length; i++){
    cifrado += apuntaLetra(text[i]);
  }
  return cifrado;
}

function apuntaLetra (letra){
  const polybiusSquare = [
    ['','A','B','C','D','E'],
    ['A','A','B','C','D','E'],
    ['B','F','G','H','I','K'],
    ['C','L','M','N','O','P'],
    ['D','Q','R','S','T','U'],
    ['E','V','W','X','Y','Z']
  ];
  let fila, columna;
  for (let i = 1; i < polybiusSquare.length; i++) {
    for (let j = 1; j < polybiusSquare[i].length; j++) {
      if (polybiusSquare[i][j] === letra.toUpperCase()) {
        fila = polybiusSquare[i][0];
        columna = polybiusSquare[0][j];
      }
    }
  }
  return fila + "" + columna; 
}
  
export const decryptPolybius = (cipherText) => {
    
  
}