
# Banco Simples em TypeScript 🏦

Projeto de simulação bancária utilizando orientação a objetos com TypeScript.

## 📁 Estrutura

- `DefaultAccount.ts`: Classe base com regras de depósito, saque e validações.
- `CompanyAccount.ts`: Herda de `DefaultAccount` e adiciona funcionalidade de empréstimo.
- `PeopleAccount.ts`: Herda de `DefaultAccount` e adiciona bônus de R$10 em depósitos.
- `app.ts`: Arquivo principal para testar as funcionalidades.

## ✅ Funcionalidades

- Criar contas com nome e número de conta (imutáveis).
- Ativar/desativar contas.
- Realizar depósitos e saques (apenas com conta ativa).
- Impedir saques se o saldo for insuficiente.
- Permitir empréstimos apenas para contas corporativas ativas.
- Aplicar bônus de R$10 em depósitos para contas pessoais.

## ▶️ Executar

1. Instale as dependências:
```bash
npm install typescript --save-dev
````

2. Compile o projeto:

```bash
npx tsc
```

3. Execute:

```bash
node dist/app.js
```

## 📦 Requisitos

* Node.js
* TypeScript (`npx tsc --init` para criar o tsconfig)

## 🧪 Exemplo de saída

```
Depósito de R$500.00 realizado.
Empréstimo de R$1000.00 concedido.
Saque de R$200.00 realizado.
Saldo Empresa: R$1300
Depósito com bônus: R$110.00 realizado.
Saque de R$50.00 realizado.
Saldo Pessoa: R$60
```

---

Feito com foco em práticas de orientação a objetos e encapsulamento em TypeScript.
