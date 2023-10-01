import React from 'react';

function LenderDashboard() {
  const loanOffers = [
    { _id: '1', amount: 5000, interestRate: 5.5, status: 'open' },
    { _id: '2', amount: 3000, interestRate: 6.0, status: 'open' },
    { _id: '3', amount: 7000, interestRate: 5.0, status: 'closed' },
  ];

  return (
    <div>
      <h2>Lender Dashboard</h2>
      <h3>Loan Offers</h3>
      <ul>
        {loanOffers.map((offer) => (
          <li key={offer._id}>
            Amount: ${offer.amount} | Interest Rate: {offer.interestRate}% | Status: {offer.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LenderDashboard;
