Simulador de Rovers em Marte
# Este projeto é um simulador interativo que permite aos usuários controlar rovers em Marte, explorando um platô definido pelo usuário e emitindo comandos para girar e mover os rovers.

## Índice
- Visão Geral
- Estrutura do Projeto
- Tecnologias Utilizadas
- Configuração do Ambiente de Desenvolvimento
- Execução do Projeto
- Estrutura do Frontend
- Estrutura do Backend
- Testes
- Contribuição
- Licença

## Visão Geral
O Simulador de Rovers em Marte é uma aplicação web que permite aos usuários:
- Definir o tamanho de um platô em Marte.
- Adicionar rovers no platô com uma posição inicial e direção.
- Emitir comandos para os rovers (virar à esquerda, virar à direita, mover para frente).
- Visualizar o status e a posição final dos rovers após a execução dos comandos.

## Estrutura do Projeto
O projeto está dividido em duas partes principais:

### Frontend
Construído com React.js, responsável pela interface do usuário e interação.

Diretórios Principais:
- /frontend
    - /src
        - /assets
        - /components
        - /context
        - /pages
        - /styles
        - App.js
        - index.js
    - package.json
    - README.md

### Backend
Desenvolvido em Node.js/Express.js, gerencia a lógica do simulador e a manipulação de dados.

Diretórios Principais:
- /backend
    - /src
        - /controllers
        - /models
        - /routes
        - /services
        - app.js
    - package.json
    - README.md

## Tecnologias Utilizadas
### Frontend
- React.js: Biblioteca principal para construção da interface.
- CSS3: Estilização dos componentes.
- React Context API: Gerenciamento de estado global.

### Backend
- Node.js: Ambiente de execução do servidor.
- Express.js: Framework para construção do servidor e APIs.
- MongoDB: Banco de dados NoSQL para armazenamento de informações dos rovers (se necessário).
- Mongoose: ODM para MongoDB.

## Configuração do Ambiente de Desenvolvimento
### Requisitos
- Node.js: Versão 14.x ou superior
- npm: Versão 6.x ou superior
- MongoDB: Para armazenamento (opcional)

### Clonando o Repositório
```bash
git clone https://github.com/seu-usuario/simulador-rovers-marte.git
cd simulador-rovers-marte
```

### Configuração do Frontend
```bash
cd frontend
npm install
```

### Configuração do Backend
```bash
cd backend
npm install
```

## Execução do Projeto
### Executando o Frontend
```bash
cd frontend
npm start
```
O frontend estará disponível em http://localhost:3000.

### Executando o Backend
```bash
cd backend
npm start
```
O backend estará disponível em http://localhost:5000.

### Configuração do Banco de Dados
Se o projeto utilizar MongoDB, certifique-se de que o MongoDB esteja em execução.
Configure a URI do MongoDB no arquivo .env no diretório /backend.

## Estrutura do Frontend
O frontend é organizado da seguinte maneira:

- /assets: Contém imagens e outros recursos estáticos.
- /components: Componentes React reutilizáveis, como botões, formulários, etc.
- /context: Gerenciamento de estado global com React Context API.
- /pages: Páginas principais da aplicação, como Home, Dashboard, etc.
- /styles: Arquivos CSS globais e específicos para componentes.

Principais Componentes:
- Header: Exibe o título da aplicação e uma breve descrição.
- PlateauConfig: Formulário para definir o tamanho do platô.
- RoverInput: Formulário para adicionar rovers e comandos.
- Instructions: Instruções para navegação no platô.
- RoverStatus: Exibe o status e posição final dos rovers.

## Estrutura do Backend
O backend é estruturado da seguinte forma:

- /controllers: Contém a lógica de controle de cada rota.
- /models: Modelos Mongoose para manipulação de dados no MongoDB.
- /routes: Define as rotas da API e associa cada uma a um controlador.
- /services: Lógica de negócio e funções reutilizáveis.

Principais Rotas:
- /api/rovers: Gerencia as operações de adição e manipulação de rovers.
- /api/plateau: Gerencia as operações relacionadas ao platô.

## Testes
Para executar testes:

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
npm test
```
Utilize Jest e Supertest para testar as rotas e funcionalidades do backend.

## Contribuição
Contribuições são bem-vindas! Por favor, siga as etapas abaixo para contribuir:

1. Fork o repositório.
2. Crie uma branch para sua feature (git checkout -b feature/nova-feature).
3. Commit suas mudanças (git commit -m 'Adiciona nova feature').
4. Push para a branch (git push origin feature/nova-feature).
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.

Este README.md serve como uma documentação abrangente para que desenvolvedores possam entender, configurar e contribuir com o projeto. Sinta-se à vontade para adaptá-lo conforme necessário para seu projeto específico.