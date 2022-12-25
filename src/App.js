import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom/client';

export default function App() {
  return (
    <div className="App" align="center" >
      <html>
        <head>
          <title>Tela</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        <body>
          <div class="container"> <h1>Formulário</h1>
            <label>Email </label> <br />
            <input type="text" name="email" /><br /> <label>Senha </label><br />
            <input type="text" name="senha" /><br />
            <input type="submit" name="submit" value="Acessar"></input>
          </div>
        </body>
      </html>
    </div>
  )
}