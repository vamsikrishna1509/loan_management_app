import { Meteor } from 'meteor/meteor';
import { Loans } from '../imports/api/loans'; 
Meteor.startup(() => {
  // Define server-side publications
  Meteor.publish('loans', function () {
    if (this.userId) {
      return Loans.find({ userId: this.userId });
    } else {
      this.ready();
    }
  });

  Meteor.methods({
    'loans.requestLoan'(borrowerId, amount) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized', 'You must be logged in to request a loan.');
      }

      const loanId = Loans.insert({
        userId: this.userId,
        borrowerId,
        amount,
        status: 'requested',
        
      });

      return loanId;
    },
  });

});
