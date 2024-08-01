# Gerenciador Financeiro

## Idiomas do arquivo README

- [Inglês](README.md)
- [Português-BR](README-pt.md)

## Descrição

Este é um projeto de desenvolvimento web que simula um banco cooperativo entre pessoas, construído com `HTML`, `CSS` e `JavaScript`. Utiliza o `webpack` para compilar e otimizar arquivos do projeto.

## Tecnologias Utilizadas

- **`HTML`**: Estruturação das páginas.
- **`CSS`**: Estilização das páginas.
- **`JavaScript`**: Funcionalidade e interatividade.
- **`Webpack`**: Bundler para empacotar e otimizar arquivos.

## Estrutura do Projeto

- **`src/`**: Contém todos os arquivos fonte.

  - **`pages/`**: Arquivos HTML das páginas.
  - **`css/`**: Arquivos CSS.
  - **`js/`**: Arquivos JavaScript.
  - **`assets/icons/`**: Ícones SVG.

- **`dist/`**: Pasta gerada após a execução do build com `npm run build`, contendo os arquivos otimizados e prontos para produção.

## Inicialização

### Instalação das Dependências

Para instalar as dependências do projeto, execute:

```bash
npm install
```

### Build do Projeto

Para gerar os arquivos otimizados e prontos para distribuição, execute:

```bash
npm run build
```

## Configuração do Webpack

### Arquivo: webpack.config.js

O arquivo `webpack.config.js` é configurado para:

- **Entry**: Define os pontos de entrada para os arquivos JavaScript.
- **Output**: Configura onde os arquivos compilados serão salvos e com quais nomes.
- **Loaders**: Configura loaders para processar arquivos CSS, JS e SVG.
  - `css-loader` para arquivos CSS.
  - `babel-loader` para arquivos JavaScript.
  - `html-loader` para processar imagens e outros recursos dentro dos arquivos HTML.
  - `asset/resource` para gerar os assets em **`dist/`**
- **Plugins**: Utiliza plugins para otimização e gerenciamento de HTML.
  - `HtmlWebpackPlugin` para gerar arquivos HTML com links atualizados para CSS e JS.
  - `MiniCssExtractPlugin` para extrair CSS em arquivos separado do JavaScript.
  - `CssMinimizerPlugin` para minimizar arquivos CSS.

### Configuração dos arquivos: HTML e JS

No HTML é inserido imports de JS e CSS utilizados no processo de desenvolvimento.

Exemplo:

```html
<link rel="stylesheet" href="../css/home.css" />
<script type="module" src="../js/home.js"></script>
```

- Esses imports devem ser removidos antes da build do projeto, caso não sejam removidos, eles continuarão no `.html` final.

## Configurações para desenvolvimento

### Arquivos JS

- Remover os imports `.css` dos arquivos `Javascript`, para ser possível executar o projeto em desenvolvimento.

- Remover o import do ícone em [visibilitySwitch.js](src/js/modules/home/visibilitySwitch.js)

```Javascript
import "../../../assets/icons/icon-visibility-on.svg";
```

Todos os assets, são adicionados em [dist/assets/icons](dist/assets/icons/) através do `asset/resource`. Esse import é necessário pois o `html-loader` remove assets não utilizados diretamente no HTML. O ícone [icon-visibility-on.svg](src/assets/icons/icon-visibility-on.svg) é adicionado por `Javascript` em [visibilitySwitch.js](src/js/modules/home/visibilitySwitch.js) e não adicionado diretamente no HTML .
