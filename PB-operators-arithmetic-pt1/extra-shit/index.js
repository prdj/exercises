'use strict';

const obj1 = {
    Firstname: 'pedro',
    lastname: 'rodrigues',
    bankAccount: 20,
    currency: 0.89,
    localcurrency: '',
    country: 'greece',
    method: function () {
        this.localcurrency = (this.bankAccount * this.currency).toFixed(2);

    }

};

const obj2 = {
    Firstname: 'joao',
    lastname: 'deodato',
    bankAccount: 15,
    currency: 0.89,
    localcurrency: '',
    country: 'switzerland',
    method: function () {
        this.localcurrency = (this.bankAccount * this.currency).toFixed(2);

    }

};

const obj3 = {
    Firstname: 'maria',
    lastname: 'da penha',
    bankAccount: 80,
    currency: 1.44,
    localcurrency: '',
    country: 'australia',
    method: function () {
        this.localcurrency = (this.bankAccount * this.currency).toFixed(2);

    }


};

obj3.method();
console.log(obj3);
obj2.method();
console.log(obj2);
obj1.method();
console.log(obj1);