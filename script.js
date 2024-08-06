const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "1-Você jogaria pelo Brasil no Mundial?",
        alternativas: [
            {
                texto: "sim, gostaria de jogar pelo Brasil, porquê os jogadores me motivam a continuar lutando pelo meu sonho.Tenho disposição e treino de 3 á 4 vezes por semana",
                afirmacao: "Você irá jogar pelo Brasil no próximo mundial. "
            },
            {
                texto: "Acho legal ter a opção de jogar pelo Brasil, mas pratico o esporte por diversão.Não me interesso pelos treinos que são mais pesados",
                afirmacao: "você optou por não jogar pelo Brasil."
            }
        ]
    },
    {
        enunciado: "Você prefere assistir ou praticar vôlei?",
        alternativas: [
            {
                texto: "não gosto de praticar esportes, pois acabo ficando de lado por não saber jogar.Logo, prefiro assistir os treinos e partidas de vôlei",
                afirmacao: "você preferiu assistir "
            },
            {
                texto:"praticar, pois vôlei é a minha modalidade esportiva favorita"
                afirmacao: "Você preferiu jogar"
            }
        ]
    },
    {
        enunciado: " Prefetre jogar como Central ou Levantdor ?",
        alternativas: [
            {
                texto: "como Central, pois brilho mais que os outros jogadores e consigo pular mais alto e dar meu melhor.",
                afirmacao: "Você será o central do time."
            },
            {
                texto: "como levantador porque, consigo distribuir mais as jogadas para meu time e faze-lo ficar 100% conectados um com o outro .",
                afirmacao: "Você será o levanatdor do time."
            }
        ]
    },
      
];
let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();