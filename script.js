document.addEventListener("DOMContentLoaded", () => {
 /* ==========================================================================
    1. BANCO DE DADOS DE CONTEÚDO (Miopia, Daltonismo e Astigmatismo)
    ========================================================================== */
 const dadosDoencas = {
   miopia: {
     titulo: "Miopia",
     oqueE: "A miopia é um distúrbio visual muito comum que dificulta a visão de objetos distantes. Quem tem miopia consegue enxergar com total clareza tudo o que está próximo, como as páginas de um livro ou a tela do celular, mas percebe o que está longe — como placas de trânsito, a TV ou a lousa da sala — de forma embaçada e sem foco.",
     causas: "A causa dessa condição está ligada à anatomia do próprio olho. Na miopia, o globo ocular é ligeiramente mais longo do que o normal ou a córnea possui uma curvatura muito acentuada. Por conta desse formato, a luz que entra no olho foca antes de chegar à retina (a camada no fundo do olho que envia as imagens ao cérebro), em vez de se focar exatamente sobre ela. A genética tem um papel fundamental nisso, sendo bastante comum que a miopia seja herdada de pais para filhos.",
     sintomas: [
       "Visão embaçada ao olhar para objetos distantes",
       "Necessidade de apertar os olhos para enxergar claramente",
       "Dores de cabeça causadas pelo esforço visual",
       "Dificuldade para enxergar ao dirigir, especialmente à noite"
     ],
     tratamento: "O tratamento envolve o uso de óculos com lentes divergentes (negativas), lentes de contato ou cirurgia refrativa a laser (como LASIK ou PRK) para redefinir a curvatura da córnea."
   },
   daltonismo: {
     titulo: "Daltonismo (Discromatopsia)",
     oqueE: "O daltonismo, também conhecido como discromatopsia, é uma condição visual caracterizada pela dificuldade ou incapacidade de distinguir e identificar certas cores. Esse fenômeno ocorre devido a uma alteração ou deficiência nos cones, que são as células fotorreceptoras localizadas na retina responsáveis por captar as frequências de luz e traduzi-las nas cores que o cérebro interpreta. A limitação mais comum e conhecida entre os daltônicos é a dificuldade em diferenciar tons de vermelho e verde.",
     causas: "Quanto às suas causas, a forma mais frequente é a genética e hereditária. Como o gene associado à condição está localizado no cromossomo X, ela afeta proporcionalmente muito mais os homens do que as mulheres. No entanto, o daltonismo também pode ser adquirido ao longo da vida devido ao envelhecimento natural das estruturas oculares, ao desenvolvimento de doenças visuais ou neurológicas (como catarata, glaucoma e degeneração macular) ou pelo uso prolongado de determinados medicamentos.",
     sintomas: "Os sintomas variam de acordo com o nível da alteração, manifestando-se principalmente na confusão ao distinguir cores como vermelho, verde, azul e amarelo, ou na percepção de tons mais opacos e desbotados. Isso costuma refletir em tarefas do cotidiano, como interpretar gráficos, combinar roupas ou identificar a maturidade de frutas. Em casos extremamente raros, conhecidos como acromatopsia, a pessoa apresenta daltonismo total, enxergando o mundo apenas em variações de preto, branco e cinza.",
     tratamento: "Em relação à correção, o daltonismo de origem genética não possui cura, mas trata-se de uma alteração benigna que não prejudica a nitidez da visão nem se agrava com o passar dos anos. Já nos casos adquiridos, tratar a doença de base — como fazer a cirurgia de catarata — pode restaurar a percepção normal das cores. Além disso, hoje existem diversos recursos tecnológicos de apoio, como óculos com filtros ópticos especiais que aumentam o contraste e modos de acessibilidade integrados em smartphones, computadores e jogos."
   },
   astigmatismo: {
     titulo: "Astigmatismo",
     oqueE: "O astigmatismo é uma alteração ocular muito frequente, classificada como um erro de refração. Ele acontece quando a superfície transparente do olho (a córnea) ou a lente interna (o cristalino) apresenta uma curvatura irregular. Em um olho de anatomia ideal, a córnea é perfeitamente arredondada como uma bola de basquete, permitindo que os raios de luz convirjam para um único ponto de foco na retina. No olho com astigmatismo, o formato lembra mais uma bola de futebol americano, fazendo com que a luz se espalhe e crie múltiplos pontos de foco, resultando em uma imagem desfocada.",
     causas: "Na grande maioria dos casos, o astigmatismo é uma condição de origem genética e hereditária, o que significa que a pessoa já nasce com essa característica ou a desenvolve naturalmente ao longo da infância e adolescência. Ele também pode surgir ou se modificar em decorrência de traumas e lesões oculares, cicatrizes provocadas por infecções na córnea ou após cirurgias nos olhos. É importante destacar que hábitos cotidianos — como ler com pouca luz ou usar bastante o celular — não causam astigmatismo. Outra causa menos comum, porém relevante, é o ceratocone, uma condição que afina e deforma progressivamente a córnea.",
     sintomas: [
       "Visão borrada ou distorcida em qualquer distância",
       "Luzes noturnas parecendo esticadas, borradas ou com 'raios'",
       "Cansaço visual e desconforto nos olhos",
       "Dores de cabeça constantes após focar a visão"
     ],
     tratamento: "Pode ser corrigido com óculos usando lentes cilíndricas, lentes de contato rígidas ou tóricas, e cirurgias refrativas."
   }
 };


 /* ==========================================================================
    2. PERGUNTAS DO MINI-TESTE
    ========================================================================== */
 const perguntasQuiz = [
   { texto: "1. Você costuma ter dificuldade para ler placas de trânsito ou letreiros distantes?", categoria: "miopia" },
   { texto: "2. Quando você olha para luzes à noite (ex: faróis de carros), elas parecem distorcidas ou com raios espalhados?", categoria: "astigmatismo" },
   { texto: "3. Você já teve dúvidas se uma peça de roupa era verde ou marrom, vermelha ou marrom?", categoria: "daltonismo" },
   { texto: "4. Para enxergar algo distante com clareza, você precisa 'apertar' os olhos?", categoria: "miopia" },
   { texto: "5. Você sente cansaço visual ou dores de cabeça após ler por muito tempo ou usar o computador?", categoria: "astigmatismo" },
   { texto: "6. Alguém já lhe disse que uma cor que você escolheu não combinava ou que você errou o nome de uma cor?", categoria: "daltonismo" },
   { texto: "7. Objetos distantes parecem embaçados, mas quando você os aproxima consegue ver perfeitamente?", categoria: "miopia" },
   { texto: "8. A sua visão parece levemente duplicada ou borrada tanto de perto quanto de longe?", categoria: "astigmatismo" },
   { texto: "9. Você tem dificuldade em interpretar gráficos com legenda colorida?", categoria: "daltonismo" },
   { texto: "10. Você prefere sentar nas primeiras fileiras do cinema/sala de aula porque de trás fica difícil ver?", categoria: "miopia" }
 ];


 /* ==========================================================================
    3. REFERÊNCIAS ELEMENTOS DOM
    ========================================================================== */
 const telaInicial = document.getElementById("tela-inicial");
 const telaTeste = document.getElementById("tela-teste");
 const conteudoPrincipal = document.getElementById("conteudo-principal");
 const body = document.body;


 /* ==========================================================================
    4. NAVEGAÇÃO E TROCA DE CONDIÇÕES
    ========================================================================== */
 document.querySelectorAll(".btn-opcao").forEach(btn => {
   btn.addEventListener("click", () => {
     const condicao = btn.getAttribute("data-condicao");


     if (condicao === "nenhuma") {
       exibirTela(telaTeste);
       carregarQuiz();
     } else {
       carregarConteudoDoenca(condicao);
       exibirTela(conteudoPrincipal);
     }
   });
 });


 document.getElementById("btn-voltar-inicio").addEventListener("click", () => {
   exibirTela(telaInicial);
   limparEstilosDeFonte();
 });


 document.getElementById("btn-voltar-principal").addEventListener("click", () => {
   exibirTela(telaInicial);
   limparEstilosDeFonte();
 });


 function exibirTela(telaAtiva) {
   telaInicial.classList.add("escondido");
   telaTeste.classList.add("escondido");
   conteudoPrincipal.classList.add("escondido");


   telaAtiva.classList.remove("escondido");
   window.scrollTo(0, 0);
 }


 function carregarConteudoDoenca(condicao) {
   const dados = dadosDoencas[condicao];
   limparEstilosDeFonte();


   // Aplica a classe de fonte específica no body
   body.classList.add(`fonte-${condicao}`);


   // Preenche os dados
   document.getElementById("titulo-condicao").innerText = dados.titulo;
   document.getElementById("texto-oque-e").innerText = dados.oqueE;
   document.getElementById("texto-causas").innerText = dados.causas;
   document.getElementById("texto-tratamento").innerText = dados.tratamento;


   const listaSintomas = document.getElementById("lista-sintomas");
   listaSintomas.innerHTML = "";
   dados.sintomas.forEach(sintoma => {
     const li = document.createElement("li");
     li.innerText = sintoma;
     listaSintomas.appendChild(li);
   });
 }


 function limparEstilosDeFonte() {
   body.classList.remove("fonte-miopia", "fonte-daltonismo", "fonte-astigmatismo");
 }


 /* ==========================================================================
    5. LÓGICA DO MINI-TESTE / QUIZ
    ========================================================================== */
 function carregarQuiz() {
   const container = document.getElementById("perguntas-container");
   container.innerHTML = "";
   document.getElementById("resultado-quiz").classList.add("escondido");


   perguntasQuiz.forEach((q, index) => {
     const div = document.createElement("div");
     div.className = "item-pergunta";
     div.innerHTML = `
       <p>${q.texto}</p>
       <div class="opcoes-resposta">
         <label><input type="radio" name="p${index}" value="sim" data-cat="${q.categoria}"> Sim</label>
         <label><input type="radio" name="p${index}" value="nao" checked> Não</label>
       </div>
     `;
     container.appendChild(div);
   });
 }


 document.getElementById("btn-resultado-quiz").addEventListener("click", () => {
   const contagem = { miopia: 0, daltonismo: 0, astigmatismo: 0 };
  
   perguntasQuiz.forEach((_, index) => {
     const selecionado = document.querySelector(`input[name="p${index}"]:checked`);
     if (selecionado && selecionado.value === "sim") {
       const cat = selecionado.getAttribute("data-cat");
       contagem[cat]++;
     }
   });


   let recomendacao = "";
   let maxVotos = Math.max(contagem.miopia, contagem.daltonismo, contagem.astigmatismo);


   if (maxVotos === 0) {
     recomendacao = "Você respondeu 'Não' para a maioria das questões. Parece que sua visão vai bem! No entanto, exames de rotina são sempre recomendados.";
   } else {
     let sugestoes = [];
     if (contagem.miopia === maxVotos) sugestoes.push("Miopia (dificuldade de longe)");
     if (contagem.astigmatismo === maxVotos) sugestoes.push("Astigmatismo (visão borrada/luzes distorcidas)");
     if (contagem.daltonismo === maxVotos) sugestoes.push("Daltonismo (distinção de cores)");


     recomendacao = `Com base nas suas respostas, é aconselhável dar uma pesquisada e consultar um profissional em relação a: **${sugestoes.join(" e ")}**.`;
   }


   document.getElementById("texto-feedback").innerText = recomendacao;
   document.getElementById("resultado-quiz").classList.remove("escondido");
 });


 document.getElementById("btn-refazer-quiz").addEventListener("click", carregarQuiz);


 /* ==========================================================================
    6. RECURSOS DE ACESSIBILIDADE (ZOOM & MODO ESCURO)
    ========================================================================== */
 let tamanhoFonteAtual = 100;


 document.getElementById("btn-zoom-in").addEventListener("click", () => {
   if (tamanhoFonteAtual < 150) {
     tamanhoFonteAtual += 10;
     document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
   }
 });


 document.getElementById("btn-zoom-out").addEventListener("click", () => {
   if (tamanhoFonteAtual > 80) {
     tamanhoFonteAtual -= 10;
     document.documentElement.style.fontSize = `${tamanhoFonteAtual}%`;
   }
 });


 // Alternar Modo Escuro
 document.getElementById("btn-modo-escuro").addEventListener("click", () => {
   body.classList.toggle("modo-escuro");
   const btn = document.getElementById("btn-modo-escuro");
   if (body.classList.contains("modo-escuro")) {
     btn.innerText = "☀️ Modo Claro";
   } else {
     btn.innerText = "🌙 Modo Escuro";
   }
 });


 /* ==========================================================================
    7. SIMULADOR VISUAL INTEGRADO
    ========================================================================== */
 const btnMiopia = document.getElementById("sim-miopia");
const btnDaltonismo = document.getElementById("sim-daltonismo");
const btnAstigmatismo = document.getElementById("sim-astigmatismo");
const btnReset = document.getElementById("sim-reset");


btnMiopia.addEventListener("click", () => {


   body.classList.remove(
       "simulando-daltonismo",
       "simulando-astigmatismo"
   );


   body.classList.add("simulando-miopia");


});


 btnDaltonismo.addEventListener("click", () => {


   body.classList.remove(
       "simulando-miopia",
       "simulando-astigmatismo"
   );


   body.classList.add("simulando-daltonismo");


});


 btnAstigmatismo.addEventListener("click", () => {


   body.classList.remove(
       "simulando-miopia",
       "simulando-daltonismo"
   );


   body.classList.add("simulando-astigmatismo");


});


 btnReset.addEventListener("click", () => {

   body.classList.remove(
       "simulando-miopia",
       "simulando-daltonismo",
       "simulando-astigmatismo"
   );
 });

});