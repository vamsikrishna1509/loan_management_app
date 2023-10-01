import { Meteor } from 'meteor/meteor';
import { Loans } from '../imports/api/loans'; 
Meteor.publish('loans', function () {
  if (this.userId) {
    return Loans.find({ userId: this.userId });
  } else {
    
    return [];
  }
});
