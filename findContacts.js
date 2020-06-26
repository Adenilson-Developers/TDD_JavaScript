const somaInfo = () => 4

const buscarNome = nome =>{
    try{
        validaTipo(nome)
        return 'Nome não encontrado'
        
    }catch(erro){
        return erro
    }
}

const validaTipo = nome =>{
    if(!nome) throw 'Nome está vazio'
    if(typeof nome !== 'string') throw 'tipo inválido'
    
}

const buscarEmail = email =>{
    return email ? 'Email não encontrado' : 'Email está vazio'
}

module.exports = {
    somaInfo,
    buscarNome,
    buscarEmail

}