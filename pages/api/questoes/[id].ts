import questoes from "../bancoDeQuestoes"
export default function questoesPorId(req, res) {
    const idSelecionado = +req.query.id
    
    const unicaQuestaoOuNada = questoes.filter(questao => questao.id === idSelecionado)

    if(unicaQuestaoOuNada.length === 1) {
        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRepostas()
        res.status(200).json(questaoSelecionada.paraObjeto())
    } else {
        res.status(204).send()
    }
}