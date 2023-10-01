import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Users = new Mongo.Collection('users');

const UsersSchema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    unique: true,
  },
  roles: {
    type: Array,
  },
  'roles.$': {
    type: String,
    allowedValues: ['admin', 'borrower', 'lender'],
  },
});

Users.attachSchema(UsersSchema);

export const Loans = new Mongo.Collection('loans');

const LoansSchema = new SimpleSchema({
  borrowerId: {
    type: String,
  },
  lenderId: {
    type: String,
  },
  amount: {
    type: Number,
  },
  status: {
    type: String,
    allowedValues: ['requested', 'approved', 'repaid'],
  },
});

Loans.attachSchema(LoansSchema);

export const Payments = new Mongo.Collection('payments');

const PaymentsSchema = new SimpleSchema({
  loanId: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: Date,
  },
});

Payments.attachSchema(PaymentsSchema);
