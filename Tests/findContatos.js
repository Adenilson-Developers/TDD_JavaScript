const should = require('should')
const findInfo = require('../findContacts')
describe('find info', ()=>{
    it('soma info', ()=>{
        findInfo.somaInfo(2,2).should.be.equal(4)
    })

    it('Informar um nome de contato e retornar contato não encontrado',()=>{
        findInfo.buscarNome('Adenilson').should.be.equal('Nome não encontrado')
    })

    it('Atenção o nome é obrigatório',()=>{
        findInfo.buscarNome().should.be.equal('Nome está vazio')
    })
})