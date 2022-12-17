# Instalación y configuracion de Jest + React Testing Library En proyectos de React + Vite

# Instalaciones:
npm add --dev jest babel-jest @babel/preset-env @babel/preset-react 
npm add --dev @testing-library/react @types/jest jest-environment-jsdom

# Actualizar los scripts del package.json
"scripts: {
  ...
  "test": "jest --watchAll"

# Crear la configuración de babel en el fichero babel.config.cjs 
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};

# Opcional, pero eventualmente necesario, crear jest.config.cjs y jest.setup.cjs

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}

# Instalar @testing-library/react
npm i -D @testing-library/react

# En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- npm add whatwg-fetch