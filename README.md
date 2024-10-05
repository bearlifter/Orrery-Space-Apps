# Orrery-Space-Apps
Repositorio para Hackaton NASA Space apps 

comandos que corri:

tailwind:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

three.js:

npm install three
npm install @react-three/fiber
npm install @react-three/drei

para el backend/server:
npm install express cors pg 
npm install --save-dev nodemon

se modifico el package.json del server:

"scripts": {
    "dev": "nodemon index.js",           // Script for running the development server
    "start": "node index.js",            // Script for running the server in production
    "test": "echo \"Error: no test specified\" && exit 1"  // Placeholder for tests
  },


  //////PARA PODER CORRER EL PROYECTO//////

  //cliente

  cd client

  npm install

  npm run dev

  //servidor

  cd server

  npm install

  npm run dev
