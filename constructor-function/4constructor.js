// Create a constructor function for a 'BankAccount' object that has a property for 'balance'
// and methods for 'deposit' and 'withdraw' that use the 'this' keyword to update the account
// balance. The 'withdraw' method should also validate that the requested amount is not 
// greater than the account balance and throw an error if it is. Additionally, add a 
// static method called 'getTotalBalance' that uses the 'this' keyword to return the 
// total balance of all BankAccount objects created

function BankAccount() {
    this.balance = 0;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient balance");
    }
    this.balance -= amount;
  };
  
  BankAccount.getTotalBalance = function(accounts) {
    let totalBalance = 0;
    accounts.forEach(function(account) {
      totalBalance += account.balance;
    });
    return totalBalance;
  };

const account1 = new BankAccount();
const account2 = new BankAccount();

account1.deposit(1000);
account1.withdraw(500);

account2.deposit(2000);
account2.withdraw(1500);

console.log(account1.balance); // Output: 500
console.log(account2.balance); // Output: 500

const allAccounts = [account1, account2];
const totalBalance = BankAccount.getTotalBalance(allAccounts);
console.log(totalBalance); // Output: 1000

  