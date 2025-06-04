import { DefaultAccount } from "./DefaultAccount";

export class CompanyAccount extends DefaultAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (amount: number): void => {
        this.ensureActive();
        this.increaseBalance(amount);
        console.log(`Empréstimo de R$${amount} concedido`);
    }

    deposit = (amount: number): void => {
        this.ensureActive();
        const bonusAmount = amount + 10;
        console.log(`Depósito com bônus: R$${bonusAmount} realizado.`);
    }
}