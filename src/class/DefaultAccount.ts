//! Regras padrões para criação de uma conta no banco.
//! Criação de conta.
export abstract class DefaultAccount{
    private readonly name: string
    private readonly accountNumber: number
    private balance: number =  0;
    private status: boolean = false;

    constructor(name: string, accountNumber: number){
        //!referenciando o name com o do metodo construtor, e o mesmo para "accountNumber"
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    getAccountNumber = (): number  => {
        return this.accountNumber;
    }

    getBalance = (): number => {
        return this.balance;
    }

    isActive = (): boolean =>{
        return this.status;
    }

    active = (): void => {
        this.status = true;
    }

    deactive = (): void => {
        this.status = false;
    }

    //Métodos de operação.
    deposit = (amount: number): void =>{
        this.ensureActive();
        this.balance += amount;
        console.log(`Deposito de R$${amount} realizado.`);
    }

    withdraw = (amount: number): void =>{
        this.ensureActive();
        if(this.balance < amount) {
            console.log("💸 Saldo insuficiente");
        }
        this.balance -= amount;
        console.log(`Saque de R$${amount} realizado.`);
    }

    protected ensureActive = (): void =>{
        if(!this.status) console.log("❌ Conta inativa.");
    }

    protected increaseBalance = (amount: number): void => {
        this.balance += amount;
    }

    // deposit = (): void => {
        
    //     if(this.validateStatus()){
    //         console.log('Você depositou');
    //     }
    // }

    // withdraw = (): void =>{
    //     console.log('Você sacou');
    // }

    // private validateStatus = (): boolean =>{
        
    //     if(this.status) {
    //         return this.status
    //     }

    //     throw new Error();
    // }
}