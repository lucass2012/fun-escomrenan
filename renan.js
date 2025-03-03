const inventario = {
    madeira: 96,
    ferro: 36,
    couro: 11,
    tecido: 3
}

const arcoLongo = {
    nome: "Arco Longo",
    material: "madeira",
    quantidade: 32
}

const machado = {
    nome: "Machadão",
    material: "ferro",
    quantidade: 100
}



function quantosItemsPossoFabricar(inventario, item) {
    const material = item["material"]; // madeira
    const quantiaPossuida = inventario[material];
    const quantiaQuePossoFazer = quantiaPossuida / item["quantidade"];
    
    console.log(`Pode fabricar ${quantiaQuePossoFazer} do item ${item["nome"]}`);
}

quantosItemsPossoFabricar(inventario, arcoLongo);
quantosItemsPossoFabricar(inventario, machado);