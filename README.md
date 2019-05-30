#Projeto exemplo utilizando NodeJS com MongoDB

### Requerimentos/Conhecimentos e Tecnologias utilizadas

* NodeJS   
    (Fonte: https://nodejs.org)
* MongoDB   
    (Fonte: https://www.mongodb.com/)
* Express   
    (Fonte: https://expressjs.com/)
* 

### Instalação das dependencias:
#
```bashh
$ npm install express
$ npm install -D nodemon
$ npm install mongoose
$ npm install require-dir
$ npm install require-dir
$ npm install mongoose-paginate
$ npm install cors
 ```
### Instalação no mongodb no docker:
#
```bashh
$ docker pull mongo
 ```

### Executar o mongodb:
#
```bashh
$ docker run -p 27017:27017 mongo
 ```

### Executar o projeto: 
#
```bashh
$ npm run dev
 ```
### Serviços do projeto
* Os serviços podem ser acessados através do endereço http://localhost:3001/api/produtos
