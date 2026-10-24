# Teste Front-End — Econverse

Aplicação de uma vitrine de produtos desenvolvida como parte do desafio técnico para a vaga de Desenvolvedor Front-End da Econverse.

O projeto apresenta uma interface de e-commerce construída com React e TypeScript, com listagem de produtos, estilos utilizando Sass e exibição de detalhes dos produtos em um modal.

## Recado aos avaliadores
Apenas algumas sessões do Carrossel e este README foram desenvolvidos com o auxilio de inteligencia artificial, tentei mostrar à vocês todo o conhecimento em Front-End que eu tenho sem precisar usar a I.A

## Tecnologias utilizadas

- **React 19** — construção da interface.
- **TypeScript** — tipagem estática e maior segurança no desenvolvimento.
- **Vite** — servidor de desenvolvimento e ferramenta de build.
- **Sass (SCSS)** — organização e estilização dos componentes.
- **ESLint** — análise estática do código.
- **API de produtos da Econverse** — obtenção dos dados da vitrine.

## Pré-requisitos

Antes de instalar o projeto, certifique-se de que você possui as seguintes ferramentas:

- [Node.js](https://nodejs.org/) — utilize uma versão compatível com o Vite 8, preferencialmente a versão LTS atual.
- npm — gerenciador de pacotes instalado junto com o Node.js.
- [Git](https://git-scm.com/downloads) — para clonar o repositório.
- Um navegador moderno, como Google Chrome, Firefox ou Microsoft Edge.

Para verificar se o Node.js e o npm estão instalados, execute os comandos abaixo no terminal:

```bash
node -v
npm -v
```

Se ambos retornarem números de versão, você poderá prosseguir com a instalação.

## Instalação

### 1. Clone o repositório

Abra um terminal e execute:

```bash
git clone https://github.com/JoaoVictor2201/teste-front-end.git
```

### 2. Acesse a pasta do projeto

```bash
cd teste-front-end
```

### 3. Instale as dependências

Execute:

```bash
npm ci
```

Esse comando instala as dependências definidas no `package-lock.json`, mantendo as versões registradas no projeto.

> Caso o comando `npm ci` não funcione porque o arquivo `package-lock.json` está ausente ou desatualizado em relação ao `package.json`, utilize `npm install`.

## Como executar o projeto

Após instalar as dependências, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local da aplicação. Normalmente, ele será:

```text
http://localhost:5173
```

Abra o endereço informado no terminal em seu navegador.

O servidor de desenvolvimento atualiza a aplicação automaticamente quando você salva alterações nos arquivos do projeto.

Para encerrar a execução, pressione `Ctrl + C` no terminal.

## Integração com a API de produtos

A aplicação utiliza os dados de produtos disponibilizados pela Econverse.

Para facilitar a comunicação com a API durante o desenvolvimento, o projeto possui um proxy configurado no arquivo `vite.config.ts`:

- **Caminho utilizado pela aplicação:** `/teste-front-end`
- **Servidor de destino:** `https://app.econverse.com.br`

Essa configuração permite que as requisições realizadas pelo front-end sejam encaminhadas pelo servidor de desenvolvimento do Vite, evitando problemas de CORS que podem ocorrer quando o navegador acessa diretamente um servidor de outra origem.

**Importante:** execute a aplicação com `npm run dev` para utilizar o proxy de desenvolvimento configurado. A disponibilidade dos produtos depende do acesso à internet e do funcionamento do serviço externo.

## Scripts disponíveis

Os comandos abaixo estão definidos no `package.json` do projeto.

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. |
| `npm run build` | Verifica os tipos do TypeScript e gera a versão de produção. |
| `npm run lint` | Executa o ESLint para identificar possíveis problemas no código. |
| `npm run preview` | Disponibiliza localmente a versão de produção já compilada. |

### Gerar a versão de produção

Para verificar se o projeto pode ser compilado corretamente, execute:

```bash
npm run build
```

Os arquivos gerados ficarão no diretório `dist/`.

### Visualizar a versão compilada

Após executar o comando de build com sucesso, rode:

```bash
npm run preview
```

O Vite informará no terminal o endereço local para visualizar a versão compilada.

> O comando `npm run preview` serve para testar localmente o resultado do build. Ele não substitui a configuração de hospedagem de produção.

## Estrutura do projeto

A estrutura principal do repositório é organizada da seguinte maneira:

```text
teste-front-end/
├── public/                 # Arquivos públicos e recursos estáticos
├── src/                    # Código-fonte da aplicação
├── index.html              # Documento HTML principal
├── package.json            # Dependências e scripts
├── package-lock.json       # Registro das versões das dependências
├── tsconfig.json           # Configuração do TypeScript
├── tsconfig.app.json       # Configuração do TypeScript da aplicação
├── tsconfig.node.json      # Configuração do TypeScript para ferramentas Node
├── vite.config.ts          # Configuração do Vite e do proxy da API
├── eslint.config.js        # Configuração do ESLint
└── README.md               # Documentação do projeto
```

Os componentes, serviços, estilos e demais arquivos da aplicação ficam organizados dentro de `src/`.

## Solução de problemas

### Erro: `npm` não é reconhecido

Verifique se o Node.js foi instalado corretamente. Feche e abra novamente o terminal e execute:

```bash
node -v
npm -v
```

Se os comandos continuarem indisponíveis, confira a instalação do Node.js e a configuração da variável de ambiente `PATH`.

### Erro ao instalar as dependências

Na pasta raiz do projeto, tente:

```bash
npm ci
```

Se o erro persistir, verifique a versão do Node.js, a conexão com a internet e as mensagens apresentadas pelo npm.

### A aplicação não abre no navegador

Confirme se o comando `npm run dev` continua em execução e acesse o endereço exibido no terminal. Se a porta padrão estiver ocupada, o Vite poderá indicar outra porta.

### Os produtos não aparecem na vitrine

1. Verifique se a conexão com a internet está funcionando.
2. Confirme se o serviço externo de produtos está disponível.
3. Abra as ferramentas de desenvolvedor do navegador (`F12`) e verifique as abas **Console** e **Network**.
4. Confira se as requisições estão utilizando o caminho `/teste-front-end` e se o proxy está configurado corretamente no `vite.config.ts`.
5. Se alterar a configuração do Vite, reinicie o servidor com `Ctrl + C` e execute novamente `npm run dev`.

## Desenvolvimento

Para contribuir com o projeto ou realizar alterações:

1. Clone o repositório.
2. Instale as dependências com `npm ci`.
3. Inicie o servidor com `npm run dev`.
4. Faça as alterações necessárias.
5. Execute `npm run lint` para verificar possíveis problemas.
6. Execute `npm run build` para validar a compilação antes de compartilhar as mudanças.

## Repositório

[JoaoVictor2201/teste-front-end — GitHub](https://github.com/JoaoVictor2201/teste-front-end)
