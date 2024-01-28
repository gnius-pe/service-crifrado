export const escitalaCrifrar = (menssaje, diametro, longitud) =>{
  console.log(menssaje)
  let matriz = [];
  let indexMessage = 0;
  menssaje = menssaje.replace(/\s/g, '');
  console.log(menssaje)
  for( let i = 0 ; i < diametro ; i ++){
    matriz[i] = []
    for(let j = 0 ; j < longitud ; j++){
      matriz[i][j] = menssaje[indexMessage++];
    } 
  }
  
  let messageCifrado ="";
  indexMessage = 0
  let numColumnas = matriz[0].length;

  for (let j = 0; j < numColumnas; j++) {
    for (let i = 0; i < matriz.length; i++) {
      if (matriz[i][j] !== undefined) {
        messageCifrado += matriz[i][j];
      }
    }
  }
  return messageCifrado;
}

export const escitalaDecifrado = () => {
  // escribelo :u



  
  return "escitla decifrado"
}