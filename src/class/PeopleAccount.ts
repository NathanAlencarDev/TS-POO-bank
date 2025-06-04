import { DefaultAccount } from "./DefaultAccount";

export class PeopleAccount extends DefaultAccount {
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber);
        this.doc_id = doc_id;
    }

    deposit = (amount: number): void => {
        this.ensureActive();
        const bonusAmount = amount + 10;
        console.log(`Depósito com bônus: R$${bonusAmount} realizado.`);
    }
}