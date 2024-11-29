const cartoes = [
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é uma função da linguagem?',
        'Função da linguagem refere-se ao objetivo ou à intenção da comunicação, como informar, emocionar ou convencer. Ex.: Função referencial, emotiva, conativa, metalinguística, fática e poética.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'Qual a diferença entre denotação e conotação?',
        'Denotação é o sentido literal de uma palavra. Conotação é o sentido figurado ou simbólico.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é um gênero textual?',
        'Gênero textual é uma categoria de texto que possui características próprias, como finalidade, estrutura e linguagem. Ex.: carta, artigo, receita, etc.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'Quais são as características da linguagem formal?',
        'Uso de normas gramaticais rigorosas, vocabulário preciso, ausência de gírias e contrações, geralmente empregada em contextos acadêmicos e profissionais.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é intertextualidade?',
        'É a relação entre dois ou mais textos, em que um faz referência ou dialoga com o outro. Pode ser explícita (citação) ou implícita (paródia, alusão).'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que caracteriza a função poética da linguagem?',
        'Enfatiza a estética da mensagem, explorando recursos como ritmo, metáforas e figuras de linguagem. É comum em poemas.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é uma variação linguística?',
        'Mudanças na forma de falar de uma língua, influenciadas por fatores geográficos, sociais, culturais ou históricos. Ex.: sotaques, gírias regionais.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é uma figura de linguagem?',
        'Recurso estilístico que busca dar ênfase, expressividade ou beleza à linguagem. Ex.: metáfora, metonímia, hipérbole, antítese, ironia.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é uma metáfora?',
        'Figura de linguagem que estabelece uma comparação implícita entre dois elementos com características semelhantes. Ex.: "Ela é uma flor."'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é coesão textual?',
        'É a conexão lógica entre as partes de um texto, garantida pelo uso de elementos como conjunções, pronomes e advérbios.'
    ),
    criaCartao(
        'Linguagens, Códigos e suas Tecnologias',
        'O que é um verbo transitivo?',
        'É um verbo que exige complemento para ter sentido completo. Ex.: "Ele comprou um livro."'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Qual a fórmula da equação de segundo grau?',
        'ax^2 + bx + c = 0. As raízes podem ser encontradas por x = (-b ± √(b^2 - 4ac)) / 2a.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'O que é uma função exponencial?',
        'É uma função na forma f(x) = a * b^x, onde a ≠ 0, b > 0 e b ≠ 1.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Como calcular a média aritmética?',
        'Soma de todos os valores dividida pelo número de valores: Média = (Σx) / n.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'O que é uma progressão aritmética (PA)?',
        'É uma sequência numérica em que a diferença entre termos consecutivos é constante. Fórmula do termo geral: a_n = a_1 + (n - 1) * r.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Qual a fórmula da área do círculo?',
        'A = π * r^2, onde r é o raio do círculo.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Como calcular o volume de um cilindro?',
        'V = π * r^2 * h, onde r é o raio da base e h é a altura.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'O que é uma matriz?',
        'É uma tabela retangular de números organizada em linhas e colunas. Pode ser usada para resolver sistemas lineares e outras operações.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Qual é a definição de derivada em cálculo?',
        'A derivada de uma função representa a taxa de variação instantânea dessa função em relação a uma variável. Notação: f\'(x) ou dy/dx.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'O que é uma progressão geométrica (PG)?',
        'Sequência numérica em que cada termo é obtido multiplicando o termo anterior por uma constante chamada razão. Fórmula do termo geral: a_n = a_1 * q^(n-1).'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Qual a fórmula do teorema de Pitágoras?',
        'a^2 + b^2 = c^2, onde a e b são os catetos e c é a hipotenusa de um triângulo retângulo.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Como calcular o perímetro de um triângulo?',
        'Soma dos comprimentos de todos os lados do triângulo: P = a + b + c.'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'Qual é a fórmula da probabilidade?',
        'P(A) = (número de casos favoráveis) / (número de casos possíveis).'
    ),
    criaCartao(
        'Matemática e suas Tecnologias',
        'O que é uma função linear?',
        'Função da forma f(x) = ax + b, onde a e b são constantes. Representa uma reta no plano cartesiano.'
    ),
    criaCartao(
        'Ciências da Natureza e suas Tecnologias',
        'O que é pressão?',
        'É a força exercida sobre uma área. Fórmula: P = F / A, onde P é a pressão, F é a força e A é a área.'
    ),
    criaCartao(
        'Ciências da Natureza e suas Tecnologias',
        'O que é um ácido segundo Arrhenius?',
        'Substância que, em solução aquosa, libera íons H+ (hidrogênio).'
    ),
    criaCartao(
        'Ciências da Natureza e suas Tecnologias',
        'Qual a função do sistema respiratório?',
        'Realizar as trocas gasosas entre o organismo e o ambiente, absorvendo oxigênio e eliminando dióxido de carbono.'
    ),
    criaCartao(
        'Ciências Humanas e suas Tecnologias',
        'O que foi o Renascimento?',
        'Movimento cultural e artístico dos séculos XV e XVI que resgatou os valores da Antiguidade Clássica e colocou o ser humano no centro das atenções (humanismo).'
    ),
    criaCartao(
        'Ciências Humanas e suas Tecnologias',
        'Qual foi a principal causa da Primeira Guerra Mundial?',
        'O assassinato do arquiduque Francisco Ferdinando, herdeiro do Império Austro-Húngaro, em 1914, desencadeou o conflito. Mas também havia tensões nacionalistas, imperialistas e militaristas.'
    )
  
];
