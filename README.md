# Advocates DAO Gnosis Safe Activity Subgraph

This Subgraph is designed to index and monitor activities related to Gnosis Multi-sig safes, specifically focusing on signatures and executions for users within the Advocates DAO. It facilitates enhanced oversight and analysis of user interactions with the DAO's Gnosis Safes, promoting transparency and security in governance operations.

## Features

- **Signature Tracking**: Capture and index every signature made by the users on transactions, providing insights into who approved what, and when.
- **Execution Tracking**: Monitor the execution of transactions, detailing which user executed the transaction and the outcome, offering a transparent view of actions taken within each Gnosis Safe.
- **Multi-sig Interaction Analysis**: Analyze the patterns of signatures and executions to ensure compliance with the DAO's governance policies and identify any anomalies or inefficiencies.



### Example Query

Here's a simple query to get you started, which fetches signatures for a specific transaction:

```graphql
{
  signatures(where: {transactionId: "YOUR_TRANSACTION_ID"}) {
    id
    signer {
      id
      address
    }
    transaction {
      id
      executed
    }
  }
}
