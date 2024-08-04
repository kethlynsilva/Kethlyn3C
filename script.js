const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como os vendavais estão relacionados às mudanças climáticas?",
        alternativas: [
            {
                texto:"As mudanças climáticas estão aumentando a intensidade e a frequência dos vendavais,pois o aumento das temperaturas oceânicas contribui para a formação de sistemas meteorológicos mais fortes e extremos.",
                 afirmacao: "O aquecimento global e as mudanças climáticas podem intensificar a frequência e a força dos vendavais, já que temperaturas mais altas nos oceanos fornecem mais energia para sistemas meteorológicos extremos.",
            },
            {
                texto: "Os vendavais são eventos naturais que não são influenciados pelas mudanças climáticas e permanecem constantes ao longo do tempo.",
                 afirmacao:"Embora vendavais sejam fenômenos naturais, a evidência sugere que as mudanças climáticas podem aumentar sua frequência e intensidade, ao invés de mantê-los constantes.",   
            }
             
           ]
    },
    {
        enunciado: "Qual é a relação entre o aumento da temperatura global e a frequência dos vendavais?",
        alternativas: [
            {
                texto: "O aumento da temperatura global contribui para um maior aquecimento dos oceanos, o que intensifica a formação e a frequência de vendavais e tempestades tropicais.", 
                afirmacao:"O aquecimento global eleva as temperaturas dos oceanos, proporcionando mais energia para a formação de vendavais e tempestades tropicais, resultando em um aumento na frequência e intensidade desses eventos.", 
            },
            { 
                texto: "O aumento da temperatura global reduz a frequência dos vendavais, já que o calor excessivo impede a formação de sistemas meteorológicos extremos.", 
                afirmacao:"Na verdade, o aumento da temperatura global tende a aumentar a frequência a intensidade dos vendavais e tempestades, ao invés de reduzir, devido ao maior fornecimento de energia atmosférica.", 
            }
            
            ]
    },
    {
        enunciado: "Como as mudanças climáticas afetam a previsão e o monitoramento de vendavais?",
        alternativas: [
            {
                texto:"As mudanças climáticas tornam a previsão e o monitoramento de vendavais mais desafiadores, pois as condições atmosféricas estão mudando e tornando os padrões climáticos menos previsíveis.",
                afirmacao: "As mudanças climáticas podem alterar os padrões atmosféricos e climáticos, o que torna mais difícil prever e monitorar vendavais com precisão, devido às mudanças nas condições meteorológicas.",  
            },
            { 
                texto:"As mudanças climáticas simplificam a previsão e o monitoramento de vendavais, pois as condições climáticas se tornam mais estáveis e previsíveis.",
                afirmacao:"As mudanças climáticas geralmente tornam as condições atmosféricas menos estáveis e mais complexas, dificultando a previsão e o monitoramento de vendavais.",  
            }
            
            ]
    },
    {
        enunciado: "Qual foi um dos principais efeitos sociais da Primeira Guerra Mundial nas sociedades europeias?",
        alternativas: [
            {
                texto:"A Primeira Guerra Mundial causou uma grande mobilização de mulheres para o mercado de trabalho, já que muitos homens estavam na frente de batalha, o que resultou em mudanças significativas nas normas de gênero e no papel das mulheres na sociedade",
                afirmacao:"Durante a Primeira Guerra Mundial, as mulheres desempenharam um papel crucial em fábricas e outros setores, o que contribuiu para mudanças duradouras nas expectativas e nas oportunidades de trabalho para as mulheres.", 
            },
            {
                texto:"A guerra levou à estabilização das normas sociais e ao fortalecimento das instituições tradicionais, sem grandes mudanças nas estruturas de gênero ou na mobilidade social.",
                afirmacao:"A Primeira Guerra Mundial, na verdade, provocou mudanças significativas nas normas sociais e nas estruturas de gênero, ao contrário da estabilização, pois muitos aspectos da sociedade foram transformados.",  
            }
            
            
        ]
    },
    {
    enunciado: "Qual foi uma das principais consequências sociais da criação da Organização das Nações Unidas (ONU) após a Segunda Guerra Mundial?",
    alternativas: [
        { 
            texto: "A criação da ONU levou a uma maior cooperação internacional e à implementação de medidas para promover os direitos humanos, prevenir futuros conflitos e melhorar as condições de vida globalmente.",
            afirmacao:"A ONU foi criada para promover a paz e a cooperação internacional, estabelecer direitos humanos e desenvolver estratégias para prevenir futuros conflitos e melhorar as condições de vida.",  
        },
        { 
            texto:"A ONU teve um impacto limitado na cooperação internacional e na promoção dos direitos humanos, com pouca influência nas questões de conflitos e desenvolvimento global.",
            afirmacao:"Na verdade, a ONU desempenha um papel crucial na promoção da cooperação internacional e dos direitos humanos, com uma influência significativa em questões de conflitos e desenvolvimento global.", 
        }
        ]
    }, 
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";  

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostrarResultado();
        return; 
    }
   perguntaAtual = perguntas[atual]; 
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = ""; 
   mostraAlternativas(); 
} 

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button"); 
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas); 
    }
}

function respostaSelecionada(opcaoSelecionada){
     const afirmacoes = opcaoSelecionada.afirmacoes; 
     historiaFinal += afirmacoes + " "; 
     atual++;
     mostraPergunta(); 
}

function mostrarResultado(){
    caixaPerguntas.textContent = "Em 2049..."; 
    textoResultado.textContent= historiaFinal; 
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();  

