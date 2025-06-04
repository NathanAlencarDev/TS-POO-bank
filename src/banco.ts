//! Banco
import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

//!Empresa
const companyAccount = new CompanyAccount("Empresa XYZ", 100);
companyAccount.active();
companyAccount.deposit(500);
companyAccount.getLoan(1000);
companyAccount.withdraw(200);
console.log(`Saldo Empresa: R$${companyAccount.getBalance()}\n`);

//!Pessoal
const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nathan Alencar", 10);
peopleAccount.active();
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log(`Saldo da conta: R$${peopleAccount.getBalance()}`);





