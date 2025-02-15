# Cooperative Bank

## Idiomas do README

- [Inglês](README.md)
- [Português-BR](README-pt.md)

## Descrição

Este é um projeto web de Aplicação de Página Única (SPA) que simula um banco cooperativo entre pessoas, desenvolvido utilizando `HTML`, `CSS` e `JavaScript`. O projeto utiliza `webpack` para compilar e otimizar os arquivos. Ele é dividido em duas partes principais: `app` e `public`.

O servidor é implementado com `Express.js`, mas atualmente funciona como uma configuração básica para testes de funcionalidades do front-end.

O projeto segue a arquitetura MVC, organizando funções e classes de forma modular para aderir aos princípios da POO. Ele enfatiza práticas de código limpo, utilizando JSDoc para melhorar o entendimento e a manutenção do código.

## SPA: app e public

- **`app`**: A área logada da aplicação, que fornece funcionalidades relacionadas ao banco, como empréstimos, visão geral da conta, acompanhamento de saldo e outras funcionalidades.

- **`public`**: A área não logada, incluindo a página inicial, login e funcionalidades de registro.

## Estrutura do Projeto

- **`client/`**: Contém os arquivos do front-end.
- **`server/`**: Contém os arquivos do back-end.
- **`testing/`**: Um espaço dedicado para testar novas funcionalidades.

### Front-end

- **`global/`**: Classes, funções e estilizações CSS compartilhadas entre `App` e `Public`.
- **`app/` - `public/`**: Classes, componentes, implementações e estilização CSS específicas para cada um.

### Back-end

- **`db/`**: Arquivos de dados para as APIs de teste, do front-end.

## Inicialização

### Instalar Dependências

```bash
npm install
```

### Iniciar o Projeto

- `IP do Servidor`: Defina a localização do servidor.

  - Crie um arquivo `.env` na raiz do projeto com variável:

    ```
    SERVER_IP=localhost
    ```

  - Defina o endereço de IP na constante global **`client/src/global/js/constants.js`**:

    ```js
    const SERVER_IP = 'localhost';
    ```

  **Nota:** Para configurar o servidor na rede local, substitua `locahost` pelo endereço de ip local.

- `Front-end`: Construa o projeto utilizando `webpack`.

  ```bash
  npm run build
  ```

- `Back-end`: Inicie o servidor local com `Express.js`.

  - Nota: O servidor atualmente é uma implementação básica para testar as funcionalidades do front-end. Uma versão mais robusta está planejada para futuras atualizações.

  ```bash
  npm run server
  ```

- `Dev-test`: Onde há requisições ao servidor, há skelons ou loaders. Quando o servidor estiver rodando localmente, é necessário adicionar um atraso para que eles sejam visíveis.

  - Defina o tempo em segundos **`client/src/global/js/constants.js`**:

    ```js
    const SIMULATE_WAIT_SERVER = 3;
    ```

  - No ambiente de produção, se não quiser usar a função `simulateWait()`, basta usar ` Ctrl + Shift + F` no VS Code para localizar todas as chamadas da função e removê-las.