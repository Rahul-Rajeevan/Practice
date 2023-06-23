// Private property (_) , getter and setter


class BankAccount {
  constructor(accountNumber) {
    this._accountNumber = accountNumber;
// The underscore prefix (_accountNumber) is a convention to indicate that the property is intended to be private or internal.

  }
  get accountNumber() {
    return this._accountNumber;
  }
  set accountNumber(value) {
    if (typeof value === 'string') {
      this._accountNumber = value;
    } else {
      console.log('Invalid account number.');
    }
  }
}

const account = new BankAccount('123456');
console.log(account.accountNumber); // Output: 123456
account.accountNumber = '654321';
console.log(account.accountNumber); // Output: 654321
