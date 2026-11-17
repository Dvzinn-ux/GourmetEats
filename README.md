# GourmetEats
O "GourmetEats" é um site de receitas desenvolvido em HTML, CSS e JavaScript, com o objetivo de facilitar a busca e a organização de receitas culinárias. Conta com categorias, páginas detalhadas de receitas e sugestões para ocasiões especiais, como aniversários, Natal e confraternizações. O projeto possui layout responsivo e navegação simples e intuitiva.

Site de receitas desenvolvido com **HTML, CSS e JavaScript**, criado para facilitar a busca e a organização de receitas culinárias.

## Funcionalidades
- Categorias de receitas: doces e sobremesas, salgados, receitas rápidas, vegetarianas e acompanhamentos.
- Páginas com ingredientes e modo de preparo.
- Informações sobre tempo, rendimento e dificuldade.
- Receitas para ocasiões especiais, como aniversários e Natal.
- Layout responsivo para computadores e celulares.
- Mais de 20 receitas, todas listadas na página "Todas as receitas".
- Busca de receitas: filtra os cards enquanto você digita, pelo nome ou pela categoria, ignorando acentos e letras maiúsculas.
- Ingredientes salvos: os ingredientes marcados em cada receita ficam guardados no navegador, mesmo depois de recarregar a página, com botão para limpar as marcações.
- Menu lateral de navegação, que também funciona no celular.
- Página "Sobre o GourmetEats".
- Estilo de impressão: o menu e o rodapé são ocultados ao imprimir uma receita.

## Visual
- Tema inspirado na Itália, com as cores verde, branco e vermelho da bandeira.
- Fundo em degradê, faixa tricolor abaixo do menu de categorias e bandeira ao lado do logo.
- Títulos com fonte serifada, para dar um ar de cardápio de cantina.

## Tecnologias utilizadas
- HTML5
- CSS3
- JavaScript (sem bibliotecas ou frameworks)

## Estrutura do projeto

GourmetEats/
├── README.md
└── gourmeteats/
├── index.html # redireciona para a página inicial
├── css/
│ └── style.css # estilos de todo o site
├── js/
│ ├── busca.js # busca de receitas
│ └── ingredientes-salvos.js # salva os ingredientes marcados
├── img/ # imagens das receitas
└── html/
├── index.html # página inicial
├── receitas.html # todas as receitas (com busca)
├── eventos.html # receitas por ocasião
├── sobre.html
├── categorias/ # uma página por categoria
└── receitas/ # uma página por receita


## Como executar
1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Execute o arquivo `index.html` (dentro da pasta `gourmeteats`) no navegador.

Também funciona com um servidor local, como a extensão Live Server do VS Code.

## Observações
- Algumas imagens são carregadas da internet (Unsplash), então é preciso estar conectado para vê-las.
- Os ingredientes marcados são salvos no próprio navegador (`localStorage`), por isso não aparecem em outro computador ou navegador.

---

Desenvolvido como projeto de estudo por Felipe Frazão de Oliveira Mendes e Davi Gabriel Adriano Maciel.
