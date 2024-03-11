export default function InteraAteIndiceeQuardaSoma(INDICE=13,SOMA = 0, K = 0){
    while(K < INDICE){
        K++;
        console.log(K)
        SOMA += K;
    } 
    return (SOMA) /* valor esperado 91 */    
}

console.log(InteraAteIndiceeQuardaSoma)