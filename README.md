# Sitema de Pizzaria - NextJs
<img src="./public/loginwebpizzaria.gif" alt="Home Screen">

<img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
<img src="https://img.shields.io/static/v1?label=next.js&message=Framework&color=black&style=for-the-badge&logo=next.js"/>
<img src="https://img.shields.io/static/v1?label=scss&message=CSS&color=cc6699&style=for-the-badge&logo=sass"/>

### Tópicos 

* [Sobre](#Sobre)

* [Funcionalidades](#funcionalidades)

* [Funcionalidades futuras](#funcionalidades-futuras)

* [Desenvolvido por:](#desenvolvido-por)

## Sobre:
Bem vindo ao front-end da nossa aplicação, esse projeto trata-se de um sistema de atendimento para estabelecimentos de atendimento ao público como lanchonetes, restaurantes e  afins, nesse projeto utilizei uma pizzaria.

O porjeto está divido em outros 2 repositórios:
</br>
[Back-end](https://github.com/bruno-lima1504/nodejs-prisma-postgresql-pizzaria)
</br>
[Mobile](https://github.com/bruno-lima1504/reactnative-ts-mobile-pizzaria)

O back-end foi executado com NodeJS e PostgreSQL, e o mobile executado em React-Native,  para mais detalhes acesse os repósitórios.

Essa etapa do projeto visa receber os pedidos realizados pelo aplicativo no salão de atendimento  diretamenta na cozinha, facilitando a rotina dos atendentes já que não terão necessidade ir até o local para entregar o pedido. Também facilita a organização de ordem de pedidos em vista via em papel feita manualmente na maioria dos estabelecimentos.

## Funcionalidades:
O projeto conta coma as bibliotecas:

    - axios
    - jwt-decote
    - react-modal
    - react-toastify
    - sass    

Criação de usuários, login, criação e edição de novas categorias de produtos, criação e edição de produtos, listagem dos produtos abertos no aplicativo para serem executados na cozinha e finalização do pedido.

As descrições mais detalhadas de cada componente do sistema esta a seguir.

### Cadastro

<img src="./public/signupweb_screen.png" alt="signup screen">
<br />
A tela de cadastro de usuário conta com os campos de nome, e-mail e senha, verificação de preenchimento e de informações dos campos, também conta alertas personalizados para sucesso ou erro no cadastro.

<br />
<br />

### Acesso

<img src="./public/signinweb_screen.png" alt="sigin Screen">
<br />
A tela de login de usuário conta com os campos de e-mail e senha, verificação de preenchimento e de informações dos campos, também conta alertas personalizados para sucesso ou erro no cadastro, apenas usuários cadastrados conseguem acessar a home do sistema.


####  Logando
<img src="./public/loginwebpizzaria.gif" alt="Dashboard Screen">
<br />
<br />

### Dashboard

Aqui fica nossa home, exibindo os pedidos que foram realizados e ainda não foram preparados pela cozinha, tambémnos permite acesso a outras funcionalidades do sistema.

<br />
<img src="./public/dasboard_screen.png" alt="categoria Screen" >
<br />
<br />

### Categoria
<img src="./public/categorys_screen.png" alt="Categoria Screen" >
<br />
Essa página é o local onde podemos adicionarum nova categoria de produto, a categoria serve como um primeiro filtro para escolhermos os produtos que serão adicionados ao pedido.
<br />

#### Adicionando categoria
<img src="./public/newcategory.gif" alt="Categoria Screen">
<br />
<br />

### Produtos

<img src="./public/registerproduct_screen.png" alt="edit Screen" >
<img src="./public/registerproduct1_screen.png" alt="edit Screen" >

<br />
Aqui podemos criar novos produtos que serão adicionados ao cardápio da pizzaria, também é nessa página que é definida a categoria ao qual o produto pertence.

#### Adicionando produto
<img src="./public/newproduct.gif" alt="Categoria Screen">
<br />
<br />


### Finalizando Pedido

<img src="./public/finishorder.gif" alt="edit Screen" >

<br />
Após o preparo do pedido é aqui onde a cozinha pode finalizar o pedido.

<br />
<br />

## Funcionalidades Futuras:

O projeto foi estruturado para que seja totalmente expansível e escalável, as próximas atuializações pretendo adicionar:
- Envio de notificação para o garçom.
- Caixa de atendimento


## Desenvolvido por:

[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bruno-lima-9ba21b242/)

| [<img src="https://avatars.githubusercontent.com/u/102754701?s=96&v=4" width=115><br><sub>Bruno Lima</sub>](https://github.com/bruno-lima1504) 
| :---: |






