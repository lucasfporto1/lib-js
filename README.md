# MyLib — Biblioteca de Utilitários JS

Biblioteca de funções JavaScript reutilizáveis, desenvolvida durante período de estudo do estágio, focada em otimizar o desenvolvimento de interfaces web com funcionalidades robustas.

## 📦 Instalação via NPM

```bash
npm install git+https://github.com/lucasfporto1/lib-js.git
```
## 🚀 Como usar

### 1. Inclua os scripts no seu projeto
Como a biblioteca utiliza o padrão de Namespace Global, basta incluir os arquivos no seu HTML. O arquivo myLibrary.js deve ser carregado por último, pois ele consolida as funcionalidades.
```html
<script src="node_modules/js-lib/validation.js"></script>
<script src="node_modules/js-lib/formatters.js"></script>
<script src="node_modules/js-lib/formUtil.js"></script>

<script src="node_modules/js-lib/myLibrary.js"></script>
```

### 2. Utilize as funções via MyLib
Uma vez carregada, todos os utilitários estarão disponíveis globalmente.
```JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Inicializar o gerenciador de temas
    MyLib.initTheme();

    // Validar um CPF ou CNPJ
    const cpfValido = MyLib.isValidCPF('123.456.789-00');

    // Inicializar máscaras com preservação de cursor 
    const telInput = document.getElementById("telefone");
    if (telInput) {
        telInput.addEventListener("input", (e) => MyLib.applyInputMask(e, MyLib.maskPhone));
    }

    // Inicializar toggle de senha 
    MyLib.initPasswordToggle({ wrapperSelector: ".password-wrapper" });
});
```

### 🧩 Funcionalidades Principais

## ✅ Validação

  - isValidCPF(cpf): Validação matemática de CPF.

  - isValidCNPJ(cnpj): Validação oficial de CNPJ.

  - isStrongPassword(senha): Verificação de critérios de força de senha.

## 🎭 Máscaras e Ofuscação

  - Tratamento de dados sensíveis e formatação de inputs em tempo real.

  - maskPhone(valor): Máscara dinâmica para telefones (Brasil).

  - maskSensitiveData(texto, inicio, fim): Oculta partes de um dado para privacidade (LGPD).

  - applyInputMask(event, formatter): Aplica máscaras mantendo a posição do cursor.

## 🖱️ UI & Interatividade
  - Melhorias de experiência do usuário e comportamentos do DOM.

  - initAutoResize(textarea): Expansão automática de campos de texto.

  - sortTable(tabela, coluna, ascendente): Ordenação de tabelas via cabeçalho.

  - filterList(lista, termo, seletor): Filtro de busca instantâneo para listas.
  
##  🌓 Gerenciamento de Tema
  - Sistema de Dark Mode com persistência automática.

  - toggleTheme(): Alterna entre os temas Claro e Escuro.

  - initTheme(): Carrega a preferência do usuário salva no localStorage.

## 🛠️ Diferenciais Técnicos
  - Vanilla JS Puro: Zero dependências, garantindo que o projeto seja extremamente leve.

  - Namespace Seguro: Todas as funções residem em window.MyLib, evitando conflitos com outros scripts.

  - Código Agnóstico: Não depende de IDs ou classes fixas; você define os seletores via parâmetros.

  - Tree Shaking Ready: Arquivos estruturados com export const para compatibilidade com bundlers modernos.  

### 📁 Estrutura do Projeto  

```
lib-js/
├── src/
│   ├── eventUtils.js
│   ├── formatters.js
│   ├── formUtil.js
│   ├── strings.js
│   ├── themeUtils.js
│   ├── uiUtils.js
│   ├── validation.js
├── .npmignore
├── demo.html
├── myLibrary.js
├── package.json
└── README.md
```

### 👤 Autor
  Feito por Lucas durante período de estudo para preparação de estágio.
