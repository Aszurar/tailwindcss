# #3 - React: **<https://tailwindcss-app.vercel.app/>**

<div align="center">
    <img src="https://i.imgur.com/cfqWPQ9.png" width="1000">
</div>

## Masterizando TailwindCSS: Tailwind-app

- O projeto **tailwind-app** é um projeto focado na aprendizagem e prática do uso do **[Tailwind CSS](https://tailwindcss.com/)**. Para isso, criamos um aplicação clone das telas de configuração do **[Notion](https://www.notion.so/)**.
- A acessibilidade também foi levada em consideração, com o uso da lib **[axe-core](https://www.npmjs.com/package/@axe-core/react)** para testes e correções de acessibilidade assim como leitor de tela ChromeVox e o uso do **[Radix UI](https://www.radix-ui.com/)** para componentes acessíveis.
- O site foi publicado com CI/CD por meio da plataforma **[Vercel](https://www.vercel.com/)**.
- Acesse em: **<https://tailwindcss-app.vercel.app>**

  <div align="center">
    <h3><a href="https://tailwindcss-app.vercel.app">tailwind-app</a></h3>
  </div>

<div align="center">

[![GitHub deployments](https://img.shields.io/github/deployments/Aszurar/tailwindcss/production?logo=vercel&logoColor=white&label=Vercel&labelColor=black)](https://vercel.com/aszurar/tailwindcss-app) [![React](https://img.shields.io/badge/-React-%2320232a.svg?style=flat&logo=react&link=https://react.dev)](https://react.dev/) [![Next](https://img.shields.io/badge/-Next-black.svg?style=flat&logo=next.js&logoColor=white&link=https://nextjs.org/)](https://nextjs.org/) [![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white&link=https://tailwindcss.com/)](https://tailwindcss.com/) [![TypeScript](https://img.shields.io/badge/-TypeScript-%23007ACC?style=?style=flat-square&logo=typescript&logoColor=white&link=https://www.typescriptlang.org/)](https://www.typescriptlang.org/) [![JavaScript](https://img.shields.io/badge/-JavaScript-%23323330.svg?style=flat&logo=javascript&link=https://www.javascript.com/)](https://www.javascript.com/) [![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat&logo=html5&logoColor=white&link=https://developer.mozilla.org/pt-BR/docs/Web/HTML)](https://developer.mozilla.org/pt-BR/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat&logo=css3&link=https://www.w3schools.com/css/)](https://www.w3schools.com/css/) [![Yarn](https://img.shields.io/badge/-yarn-%232C8EBB?style=flat&logo=yarn&logoColor=white&link=https://yarnpkg.com/)](https://yarnpkg.com/)

</div>

<div align="center">
        <h2>
          <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
          <a href="#interrobang-motivo">Motivo</a>&nbsp;|&nbsp;
          <a href="#art-design">Design</a>&nbsp;|&nbsp;
          <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
          <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
          <a
          href="#truck-entrega-e-distribuição-continua">CI/CD</a>&nbsp;|&nbsp;
          <a href="#package-como-baixar-e-executar-o-projeto">Baixar e Executar</a>&nbsp;
        </h2>
</div>

---

<div align="center">
    <img src="https://i.imgur.com/9eV9o8d.gif" width="800">
</div>

<div align="center" >

**[Link do vídeo completo sobre o projeto](https://www.youtube.com/watch?v=jxYjbeNftTM)**

</div>

---

## :information_source: Sobre

- O projeto **tailwind-app** é um clone das tela de configuração do **Notion**.
- A ideia é replicarmos uma interface semelhante aplicando o **[tailwindcss](https://tailwindcss.com/)** e suas funcionalidades, desde o básico ao avançado.
- Além disso usamos bibliotecas que auxiliam na estilização com tailwindcss como tailwind-variants para criarmos variações dos componentes.
- É o projeto do mini-curso **Masterizando TailwindCSS** da **[Rocketseat](https://www.rocketseat.com.br/)**
- Além do tailwind construímos a interface desse projeto foi usado **[React](https://react.dev)** com **[TypeScript](https://www.typescriptlang.org/)**.
- A animação da listagem do Input de arquivos é feita com a lib **[AutoAnimate](https://auto-animate.formkit.com/)**.
  
  **Campos vazios**

<div align="center" >
      <img src="https://i.imgur.com/tJtriBr.png" width="700">
      <img src="https://i.imgur.com/IkIdHqU.png" width="700">
</div>

---

## :interrobang: Motivo

- Esse projeto tem o objetivo ensinar e praticar o uso do **tailwindcss** assim como outras ferramentas que podem auxiliar no desenvolvimento com essa tecnologia.
  - Entender e praticar construção de interfaces com **tailwindcss**;
  - Responsividade, breakpoints e variações de componentes com **tailwindcss-variants** e **tailwindcss**;
  - Componentes, componentização e suas propriedades em conjunto com **tailwindcss-variants**
  - Animações com **AutoAnimate**;
  - Componentes acessíveis com **Radix UI**;
  - Mostrar a simples integração do **Radix UI** com **tailwindcss**;
  - Dark mode de forma simples com **tailwindcss**;
  - Customização do tema global do **tailwindcss** construindo novos valores para propriedades, cores e novas classes.
  - Boas práticas de acessibilidade com **axe-core**;

- É um projeto simples, mas que aborda conceitos importantes para o desenvolvimento de interfaces com **tailwindcss**.
- Construímos:
  1. Componentes com padrão de Composição com **tailwindcss**;
  2. Inputs, Selects, Textarea, com o mesmo padrão de estilo;
  3. Botões com variants para todas necessidades;
  4. Input de arquivos e imagem totalmente personalizados com preview das imagens e listagem animada com os Cards dos arquivos selecionados
  5. Barra lateral e superior de navegação

- **Campos preenchidos**

  <div align="center" >
      <img src="https://i.imgur.com/HruxUNV.png" width="700">
      <img src="https://i.imgur.com/b6jFwrz.png" width="700">
  </div>

---

## :art: Design

- O Design do projeto foi fornecido pela **[Rocketseat](https://www.rocketseat.com.br/)** no primeiro módulo do Ignite - React por meio do Figma.

<div align="center">
  <h3><a href="https://www.figma.com/file/wyhJEw4TTgVae0NblX9Abl/Ignite-Tailwind-%E2%9C%85?type=design&mode=design&t=vjw5ISwfxYoe6X8q-0">tailwindcss-app</a></h3>

  [![Design](https://i.imgur.com/27ZuoQn.png)](https://www.figma.com/file/wyhJEw4TTgVae0NblX9Abl/Ignite-Tailwind-%E2%9C%85?type=design&mode=design&t=vjw5ISwfxYoe6X8q-0)
</div>

**Responsividade**

<div align="center" >
      <img src="https://i.imgur.com/Id4w6in.png" height="425">_<img src="https://i.imgur.com/7bwpEB5.png" height="425">_<img src="https://i.imgur.com/W2vkjUj.png" height="425">
      <img src="https://i.imgur.com/Id4w6in.png" height="425">_<img src="https://i.imgur.com/OjAUkAy.png" height="425">
</div>

---

## :seedling: Requisitos Mínimos

  1. NodeJS
  2. React
  3. Next
  4. Yarn(ou NPM)
  
- **Light Mode**

  <div align="center" >
      <img src="https://i.imgur.com/IbHRQwd.png" width="700">
      <img src="https://i.imgur.com/1PcsdOQ.png" width="700">
      <img src="https://i.imgur.com/lINPjo9.png" height="425">_<img src="https://i.imgur.com/CP21LjY.png" height="425">_<img src="https://i.imgur.com/xaKbvRQ.png" height="425">
  </div>

---

## :rocket: Tecnologias Utilizadas

- O projeto foi desenvolvido utilizando as seguintes tecnologias:

  1. **[axe-core/react](https://www.npmjs.com/package/@axe-core/react)**
  2. **[AutoAnimate](https://auto-animate.formkit.com/)**
  3. **[autoprefixer](https://www.npmjs.com/package/autoprefixer)**
  4. **[Date FNS](https://date-fns.org/)**
  5. **[JavaScript](https://developer.mozilla.org/pt1.BR/docs/Web/JavaScript)**
  6. **[Lucide React](https://lucide.dev/guide/packages/lucide-react)**
  7. **[Next](https://nextjs.org/)**
  8. **[NodeJS](https://nodejs.org/en/)**
  9. **[Radix UI](https://www.radix-ui.com/)**
  10. **[React](https://pt1.br.react.dev/)**
  11. **[Sentry](https://sentry.io/welcome/)**
  12. **[TailwindCSS](https://tailwindcss.com/)**
  13. **[TailwindCSS Variants](https://www.tailwind-variants.org/)**
  14. **[TypeScript](https://www.typescriptlang.org/)**
  15. **[Vercel](https://www.vercel.com/)**
  16. **[Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)**

---

## :truck: Entrega e distribuição continua

**<https://tailwindcss-app.vercel.app/>**

- Para a publicação da aplicação foi utilizado a plataforma **[Vercel](https://www.vercel.com/)** onde é possível publicar de forma rápida, fácil e simples projetos React que estão hospedados no GitHub, GitLab, dentre outras plataformas de repositório remoto de graça.
- Com isso, o CI/CD já é aplicado automaticamente por meio dessa plataforma definindo a branch de produção, sempre que houver uma atualização nela, será gerado uma nova versão do projeto e já publicado.
- Além disso, podemos customizar o próprio endereço do site, adicionar ferramentas dentre outras funcionalidades facilmente.

<div align="center">
<img src="https://i.imgur.com/8KofEH3.png" width="1000">
</div>

---

## :package: Como baixar e executar o projeto

### Baixar

- Clonar o projeto:

  ```bash
   git clone https://github.com/Aszurar/tailwindcss
  ```

- É necessário ter o Node.js e um gerenciador de pacotes, como o Yarn, instalados em seu sistema. Se você ainda não os tem, siga estas instruções:
  - [Instalação do NodeJS](https://nodejs.org/en/)
  - [Instalação do Yarn](https://classic.yarnpkg.com/blog/2017/05/12/introducing-yarn/)

- Instalação das dependências:
  - Execute o comando abaixo dentro da pasta do projeto

    ```bash
      yarn
    ```

### Execução

- Caso tudo tenha sido instalado com sucesso, basta executar na raiz do projeto:

  ```bash
    yarn dev
  ```

---

<div align="center">

Desenvolvido por :star2: Lucas de Lima Martins de Souza.

</div>
