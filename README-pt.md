# Cooperative Bank

## Idiomas do README

- [Inglês](README.md)
- [Português-BR](README-pt.md)

## Descrição

Este é um projeto web de Aplicação de Página Única (SPA) que simula um banco cooperativo entre pessoas. O projeto é dividido em duas partes: `client`, para os arquivos front-end, e `server`, para os arquivos back-end.

## Tecnologias

### Client

- **`Core`**: Construído com a biblioteca `React.js`.

- **`Roteamento`**: A biblioteca utilizada para roteamento, organização e hierarquia de páginas é `React Router DOM`.

- **`Formulários`**: O projeto utiliza as bibliotecas `React Hook Form` e `Yup` para validação e gerenciamento de formulários.

- **`Estilização e Animações`**: O projeto utiliza `Styled Components` para componentes customizados com estilos. Para animações complexas, que dependem da montagem e desmontagem de componentes, é utilizado o `Framer Motion`.

- **`Tradução`**: O projeto atualmente suporta dois idiomas — inglês e português-BR — por meio da biblioteca `React i18next`.

- **`Inicialização e Boilerplate`**: Para boilerplate, servidor local de desenvolvimento e compilação, é utilizado o `Vite`.

### Server

- **`Core`**: Construído com a biblioteca `Express.js`.

- **`Banco de Dados`**: O SGBD utilizado é o `MySQL`. Também é usada a biblioteca ORM `Sequelize`.

- **`Autenticação`**: Para autenticação via cookies enviados do servidor para o client, é utilizado o `JSON Web Token`.

- **`Validação Estática`**: A pré-validação — como formatos, tipos de dados etc. —, ou seja, todo tipo de validação que não necessita de consulta ao banco de dados ou regras de negócio, é feita com middlewares usando `Express Validator`.

- **`Arquitetura`**:
  - `Model`: Modelo de dados do Sequelize.
  - `Repository`: Abstração de queries utilizando o model.
  - `Service`: Regras de negócio e validações com acesso ao banco de dados, consumindo os repositories.
  - `Controller`: Comunicação direta via HTTP com o client.

O projeto segue a arquitetura limpa, organizando funções e classes de forma modular para aderir aos princípios da POO, com ênfase em práticas de código limpo.

## Inicialização

### Instalar Dependências

- Execute o comando em **`/client`** e **`/server`**:
  ```bash
  npm install
  ```

### Configuração do Projeto

- Crie um arquivo `.env` em **`server/.env`**.

  - **`server/.env`**: Configure as variáveis de ambiente do servidor e do banco de dados MySQL:

    ```env
    NODE_ENV
    COOKIE_SECRET
    SERVER_HOST
    SERVER_PORT
    MYSQL_HOST
    MYSQL_PORT
    MYSQL_USER
    MYSQL_PASSWORD
    ```

### Modos (Desenvolvimento / Produção)

- Em **`/client`**:

  ```bash
  npm run dev
  npm run build
  ```

  Vizualização do projeto em `http://localhost:5173/app` após executar o comando `npm run dev`.

- Em **`/server`**:

  ```bash
  npm run dev
  npm start
  ```

- **Simular Atraso**: Onde há requisições para `/api`, o client exibe skeletons ou loaders. Quando o servidor estiver rodando localmente, é necessário adicionar um atraso nas respostas para que esses elementos sejam visíveis.

  - Defina o tempo em milissegundos no arquivo **`server/src/constants/serverConstants.js`**:

    ```js
    const SIMULATE_RES_DELAY = 3000;
    ```

  - No ambiente de produção, basta remover o middleware:

    Arquivo: **`server/src/server.js`**

    ```js
    app.use('/api', simulateDelayMiddleware);
    ```

## Futuras Implementações

- **`/client`**:

  - Busca de dados no servidor através de `Axios` e gerenciamento com `React Query`.
  - Proteção de rotas com base na autenticação.
  - Testes com `Jest` e `React Testing Library`.

- **`/server`**:

  - Comunicação em tempo real com o client para envio de notificações e autenticação com `WebSockets`.
  - Armazenamento de configurações da conta do usuário e notificações usando `MongoDB`.
  - Armazenamento em cache de usuários autenticados com `Redis`, permitindo controle total do servidor sobre autenticação e desautenticação.
  - O `Redis` também permitirá aumentar a velocidade das queries SQL, armazenando o ID real e o Opaque ID de usuários autenticados e online. Para o client, será exposto apenas o Opaque ID.
  - Testes com `Jest`.
