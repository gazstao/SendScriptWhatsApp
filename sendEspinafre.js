async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
**Resumo detalhado de “Meu Malvado Favorito” (2010):**
A animação **"Meu Malvado Favorito"** (Despicable Me), dirigida por Pierre Coffin e Chris Renaud, apresenta a história de um supervilão chamado **Gru** que,
 ao longo do filme, passa por uma transformação emocional ao lidar com três órfãs e questionar seus valores.
---
### **Introdução: Gru, o supervilão**
O filme começa introduzindo **Gru**, um homem excêntrico e egoísta que vive em um subúrbio americano em uma casa sombria. Ele se orgulha de ser um dos maiores vilões do mundo
 e adora causar o caos. Para isso, ele conta com a ajuda de um exército de pequenos seres amarelos chamados **Minions**, que são leais, engraçados e dispostos a qualquer tarefa. 
 Gru é motivado pela busca de reconhecimento e quer superar um jovem vilão rival chamado **Vector**, que recentemente roubou a pirâmide de Gizé.
Gru, determinado a superar esse feito, planeja seu maior golpe: **roubar a Lua**. Para realizar essa façanha, ele precisa de um dispositivo encolhedor que está sob a posse de Vector. 
No entanto, seus recursos financeiros estão baixos, e ele depende de um empréstimo do **Banco do Mal**, cujo diretor, o Sr. Perkins, não está convencido de que Gru conseguirá executar o plano.
---
### **O encontro com as órfãs**
Enquanto tenta recuperar o dispositivo encolhedor, Gru percebe que Vector tem uma fortaleza impenetrável. Ele nota, porém, que três pequenas órfãs – **Margo**, **Edith** e **Agnes** 
– conseguem entrar na casa de Vector facilmente vendendo biscoitos. Gru decide adotar as meninas temporariamente para usá-las como parte de seu plano.
No início, Gru trata as meninas como uma inconveniência. Ele é distante, rude e alheio às suas necessidades emocionais. 
No entanto, as garotas rapidamente trazem caos e diversão à sua vida estruturada e sombria. 
Agnes, a mais nova, é uma criança adorável e obcecada por unicórnios; Edith é travessa e rebelde; e Margo é a mais madura e protetora das três.
---
### **Mudança emocional de Gru**
Enquanto tenta equilibrar suas atividades vilanescas com os desafios de ser um "pai", Gru começa a se aproximar das meninas. 
Ele descobre momentos de alegria e felicidade genuína, como levá-las a um parque de diversões ou ler histórias para elas antes de dormir. 
Essa convivência desperta em Gru sentimentos que ele nunca experimentou, como carinho e responsabilidade.
No entanto, conforme Gru se afeiçoa às meninas, seu foco no plano de roubar a Lua começa a diminuir. 
Isso preocupa o Dr. Nefário, seu cientista assistente, que acha que Gru está se distraindo de seus objetivos vilanescos. 
Dr. Nefário intervém e, sem o consentimento de Gru, devolve as meninas ao orfanato para que ele possa concluir seu plano.
---
### **A execução do plano e o clímax**
Gru, devastado pela ausência das garotas, prossegue com o roubo da Lua. 
Ele usa o dispositivo encolhedor e consegue reduzi-la ao tamanho de uma bola de futebol. 
Enquanto isso, Vector captura as meninas como parte de um plano para forçar Gru a entregar a Lua.
Gru, finalmente reconhecendo que as meninas são mais importantes para ele do que qualquer conquista vilanesca, embarca em uma missão de resgate. 
Com a ajuda de seus Minions, ele enfrenta Vector em uma batalha emocionante. 
No clímax, Gru consegue salvar as meninas e deixa a Lua escapar para sua órbita normal, pois o efeito do dispositivo encolhedor começa a reverter.
---
### **Conclusão: Gru, o pai amoroso**
No final, Gru abandona completamente sua vida de vilão para se dedicar a ser um bom pai para Margo, Edith e Agnes. 
Em uma cena tocante, ele as surpreende participando de uma apresentação de balé que elas estavam ensaiando. 
Gru finalmente encontra a felicidade em sua nova vida, deixando de lado sua obsessão por ser o maior vilão do mundo.
Os Minions, agora parte da grande família de Gru, celebram essa nova fase com alegria, reforçando o tom de amor e redenção que permeia o final do filme.
---
### **Temas principais**
1. **Transformação pessoal:** Gru passa de um vilão egoísta para um pai dedicado e amoroso, mostrando como as conexões humanas podem mudar uma pessoa.
2. **Família e aceitação:** O filme destaca que a família pode ser formada de maneiras inesperadas e que o amor verdadeiro transcende laços biológicos.
3. **Humor e aventura:** Com personagens carismáticos, como os Minions e as três órfãs, o filme combina humor, ação e momentos emocionantes de maneira equilibrada.
---
**"Meu Malvado Favorito"** é uma narrativa cativante que mistura humor e emoção, com uma mensagem sobre a importância do amor e das relações humanas. 
A animação se tornou um marco no cinema familiar e deu origem a uma franquia de sucesso.
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
