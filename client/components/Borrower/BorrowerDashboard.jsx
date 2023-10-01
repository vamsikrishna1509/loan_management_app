import React from 'react';

function BorrowerDashboard() {
  const loanRequests = [
    { _id: '1', amount: 1000, status: 'requested' },
    { _id: '2', amount: 2000, status: 'approved' },
    { _id: '3', amount: 1500, status: 'approved' },
  ];

  return (
    <div>
      <h2>Borrower Dashboard</h2>
      <h3>Loan Requests</h3>
      <ul>
        {loanRequests.map((request) => (
          <li key={request._id}>
            Amount: ${request.amount} ({request.status})
          </li>
        ))}
      </ul>
      
    </div>
  );
}

export default BorrowerDashboard;
