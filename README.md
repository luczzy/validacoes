# **Projeto validações**
O projeto consiste em validar email e cpf, utilizando ferramentas de Javascript.

## Funcionalidades

- **Validação de CPF:** Verifica se o CPF fornecido está no formato correto e é válido de acordo com as regras estabelecidas.

- **Validação de Email:** Verifica se o email fornecido está no formato correto e é válido de acordo com as normas gerais de email.

## Preview

![Preview](/cpf/img/cpfvideo.gif)

## ``Validação de cpf``

- **Função:** A primeira parte do código adiciona um escutador de eventos ao formulário. Quando o formulário é submetido, a função é chamada para prevenir o comportamento padrão e validar o CPF.

- **Regras de validação de cpf:** O cpf deve conter 11 dígitos, sem caracteres especiais. Ele deve obedecer às regras de cálculos dos dígitos verificadores.

- **Cálculo do primeiro dígito verificador:**

    Considere os primeiros 9 dígitos do CPF;
    Multiplique cada um dos 9 dígitos pela sequência decrescente de 10 a 2 e some os resultados; Calcule o resto da divisão da soma por 11;
    Se o resto for menor que 2, o primeiro dígito verificador é 0. Caso contrário subtraia o resto de 11 para obter o primeiro dígito verificador.
 
- **Cálculo do segundo dígito verificador:**
 
  Considere os primeiros 9 dígitos mais o primeiro dígito verificador;
  Multiplique cada um dos 10 dígitos pela sequência decrescente de 11 a 2 e some os resultados;
  Calcule o resto da divisão da soma por 11;
  Se o resto for menor que 2, o segundo dígito verificador é 0. Caso contrário, subtraia o resto de 11 para obter o segundo dígito verificador;
  Comparação dos dígitos verificadores: Verifique se os dígitos verificadores calculados correspondem aos dois últimos dígitos do CPF fornecido. Se 
corresponderem, o CPF é válido; caso contrário, é inválido.
    
## Exemplos em código: 

```javascript
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let cpf = document.querySelector('#cpf').value;
    if (validarCPF(cpf)) {
        console.log('CPF válido');
    } else {
        console.log('CPF inválido');
    }
});

function validarCPF(cpf) {
    // Código para validar o CPF
}
```

## ``Validação de email``

- **Função:** A função de validação de email verifica se o email está no formato correto.

- **Regras de validação de email:** O email deve seguir o formato padrão (exemplo@dominio.com).

## Exemplos em códigos:

```javascript

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    if (validarEmail(email)) {
        console.log('Email válido');
    } else {
        console.log('Email inválido');
    }
});

function validarEmail(email) {
    // Código para validar o email
}
```
[bka](img/emailvideo.gif)

## Conclusão:

    Este projeto de validação de CPF e email é uma ferramenta simples, mas poderosa, que pode ser facilmente integrada a qualquer aplicação web. A validação de dados é uma parte essencial do desenvolvimento web, garantindo que os dados fornecidos pelos usuários sejam corretos e utilizáveis.

## Tecnologias utilizadas:

HTML5<br>
CSS <br>
JS

### Autores:

_Deivid Marques._