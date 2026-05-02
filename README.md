# DEVSTART

```markdown
# 🖱️ Contador de Cliques em React

Este projeto é uma aplicação simples desenvolvida em **React** para praticar conceitos básicos de **componentes**, **estado (state)** e **eventos**.  
A cada clique em um botão, o contador exibido na tela é incrementado em 1.

---

## 🚀 Tecnologias utilizadas
- [React](https://reactjs.org/)
- [Create React App](https://create-react-app.dev/)

---

## 📂 Estrutura do Projeto
```
```
contador-cliques/
├── src/
│   ├── App.js
│   ├── Contador.js
│   └── index.js
├── package.json
└── README.md
```
```

---

## 📌 Funcionalidades
- Exibe um contador inicializado em **0**.
- Incrementa o contador a cada clique no botão.
- Utiliza o **hook useState** para gerenciar o estado.

---

## 🧩 Código do Componente `Contador.js`
```jsx
import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
};

export default Contador;
```

---

## ▶️ Como executar o projeto

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/contador-cliques.git
```

2. Acesse a pasta do projeto:
```bash
cd contador-cliques
```

3. Instale as dependências:
```bash
npm install
```

4. Execute a aplicação:
```bash
npm start
```

5. Abra no navegador:
```
http://localhost:3000
```

---

## 🎯 Objetivo
Este projeto foi criado como exercício prático para aprender:
- Uso do **useState** no React.
- Manipulação de eventos com `onClick`.
- Estruturação de componentes funcionais.

---

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar.
```

---

👉 Esse README já está pronto para ser usado no GitHub. Você só precisa substituir o link do repositório (`https://github.com/seu-usuario/contador-cliques.git`) pelo seu.  

Quer que eu adicione também uma seção de **melhorias futuras** (como botão de resetar ou decrementar) para deixar o README mais completo e atrativo?
