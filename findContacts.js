const somaInfo = () => 4

const buscarNome = nome =>{
    return nome ? 'Nome não encontrado' : 'Nome está vazio'
}

module.exports = {
    somaInfo,
    buscarNome
}