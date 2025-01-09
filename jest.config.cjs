module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Usar babel-jest para transformar archivos .jsx o .js
  },
  testEnvironment: 'jest-environment-jsdom', // Asegúrate de que esté configurado como 'jest-environment-jsdom'
};
