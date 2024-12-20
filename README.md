# Organo - Projeto Desenvolvido no Curso "React: Desenvolvendo com JavaScript" da Alura

O **Organo** é uma aplicação web desenvolvida durante o curso "[React: Desenvolvendo com JavaScript](https://www.alura.com.br/curso-online-react-desenvolvendo-javascript)" oferecido pela Alura. Este projeto tem como objetivo principal consolidar os conhecimentos adquiridos sobre React, permitindo a criação de uma interface interativa para o cadastro e visualização de colaboradores organizados por times.

## Descrição do Projeto

O Organo permite que os usuários cadastrem colaboradores, especificando nome, cargo, imagem e o time ao qual pertencem. Os colaboradores são exibidos em cartões organizados por times, com cores e destaques personalizados para cada um.

## Funcionalidades

- **Cadastro de Colaboradores**: Formulário para inserir nome, cargo, URL da imagem e seleção do time.
- **Exibição de Colaboradores**: Listagem dos colaboradores cadastrados, organizados por times.
- **Design Responsivo**: Interface adaptável a diferentes tamanhos de tela.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface.
- **CSS**: Estilização da aplicação.

## Estrutura do Projeto

- **`Header`**: Componente responsável pela exibição do banner superior.
- **`Form`**: Componente que contém o formulário para cadastro de colaboradores.
- **`Teams`**: Componente que organiza e exibe os colaboradores por time.
- **`Footer`**: Componente que exibe o rodapé com ícones de redes sociais e informações adicionais.

## Como Executar o Projeto

1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/devnerii/organo
   ```
2. **Instalar as Dependências**:
   ```bash
   cd organo
   npm install
   ```
3. **Executar a Aplicação**:
   ```bash
   npm start
   ```
   A aplicação estará disponível em `http://localhost:3000`.

## Estrutura de Pastas

- **`/src`**: Contém os arquivos fonte do projeto.
  - **`/components`**: Componentes reutilizáveis da aplicação.
  - **`/images`**: Imagens utilizadas na aplicação.
  - **`index.js`**: Arquivo principal que renderiza a aplicação.
  - **`index.css`**: Estilos globais da aplicação.

## Personalizações

Os usuários são incentivados a personalizar o projeto, alterando o design, adicionando novas funcionalidades ou integrando com APIs externas para persistência de dados.

## Sobre o Curso

O curso "[React: Desenvolvendo com JavaScript](https://www.alura.com.br/curso-online-react-desenvolvendo-javascript)" da Alura é voltado para desenvolvedores que já possuem conhecimentos básicos de HTML, CSS e manipulação do DOM com JavaScript, e desejam aprender a utilizar o React para construir interfaces de usuário de forma eficiente e modular.

## Considerações Finais

Este projeto serve como base para o desenvolvimento de aplicações mais complexas em React, proporcionando uma compreensão sólida dos conceitos fundamentais e das melhores práticas na construção de interfaces reativas.