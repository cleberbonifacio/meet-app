# Meetapp

<h3 align="center">
  APP agregador de eventos um acrônimo à Meetup + App. <br/>
  Na versão Web(ReactJS) o usuário cadastra os eventos e na versão Mobile(React Native) ele se inscreve nos eventos que não é organizador.<br/><br/>
  Projeto apresentado como desafio final do Bootcamp da Rocketseat (https://rocketseat.com.br/)
</h3>

<img src="https://github.com/cleberbonifacio/meet-app/blob/master/assets/app01.jpeg" width="287"><img src="https://github.com/cleberbonifacio/meet-app/blob/master/assets/app02.jpeg" width="287"><img src="https://github.com/cleberbonifacio/meet-app/blob/master/assets/app03.jpeg" width="287">

<img src="https://github.com/cleberbonifacio/meet-app/blob/master/assets/login.PNG">
<img src="https://github.com/cleberbonifacio/meet-app/blob/master/assets/addevento.PNG">
<img src="https://github.com/cleberbonifacio/meet-app/blob/master/assets/meetups.PNG">

## Tecnologias

Para o desenvolvimento da aplicação foi utilizada a stack: Node.JS, ReactJS e React Native para o backend, front-end e mobile(android) respectivamente.

### BACK-END
-   [Node.js][nodejs]
-   [Express](https://expressjs.com/)
-   [nodemon](https://nodemon.io/)
-   [Sucrase](https://github.com/alangpierce/sucrase)
-   [Docker](https://www.docker.com/docker-community)
-   [Sequelize](http://docs.sequelizejs.com/)
-   [PostgreSQL](https://www.postgresql.org/)
-   [node-postgres](https://www.npmjs.com/package/pg)
-   [Redis](https://redis.io/)
-   [MongoDB](https://www.mongodb.com/)
-   [Mongoose](https://mongoosejs.com/)
-   [JWT](https://jwt.io/)
-   [Multer](https://github.com/expressjs/multer)
-   [Bcrypt](https://www.npmjs.com/package/bcrypt)
-   [Youch](https://www.npmjs.com/package/youch)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Bee Queue](https://www.npmjs.com/package/bcrypt)
-   [Nodemailer](https://nodemailer.com/about/)
-   [date-fns](https://date-fns.org/)
-   [Sentry](https://sentry.io/)
-   [DotEnv](https://www.npmjs.com/package/dotenv)
-   [VS Code][vc] with [ESLint][vceslint]

### FRONT-END
-   [ReactJS](https://reactjs.org/)
-   [Redux](https://redux.js.org/)
-   [Redux-Saga](https://redux-saga.js.org/)
-   [React Router v4](https://github.com/ReactTraining/react-router)
-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [History](https://www.npmjs.com/package/history)
-   [Immer](https://github.com/immerjs/immer)
-   [Polished](https://polished.js.org/)
-   [React-Toastify](https://fkhadra.github.io/react-toastify/)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [react-perfect-scrollbar](https://github.com/OpusCapita/react-perfect-scrollbar)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)
-   [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

### MOBILE
-   [ReactJS](https://reactjs.org/)
-   [React Native](https://facebook.github.io/react-native/)
-   [styled-components](https://www.styled-components.com/)
-   [Axios](https://github.com/axios/axios)
-   [Polished](https://polished.js.org/)
-   [React-Icons](http://react-icons.github.io/react-icons/)
-   [react-perfect-scrollbar](https://github.com/OpusCapita/react-perfect-scrollbar)
-   [Unform](https://github.com/Rocketseat/unform)
-   [Yup](https://www.npmjs.com/package/yup)
-   [date-fns](https://date-fns.org/)
-   [Reactotron](https://infinite.red/reactotron)
-   [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## Instalação

Postgres - Banco de dados principal  
`docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`

Redis - Banco de dados para filas  
`docker run --name redismeetapp -p 6379:6379 -d -t redis:alpine`

Sequelize  
`yarn sequelize db:migrate`  

## **Backend**
`yarn`

`yarn dev`

`yarn queue`

## **Frontend**
`yarn`

`yarn start`

## **Mobile(android)**
`yarn`

`react-native run-android`
