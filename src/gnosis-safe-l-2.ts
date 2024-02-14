import { ExecutionSuccess } from '../generated/GnosisSafeL2/GnosisSafeL2'
import { User, Transaction } from '../generated/schema'

// Adjusted to match the YAML configuration
export function handleExecTransaction(event: ExecutionSuccess): void {
  let transactionId = event.params.txHash.toHex()
  let transaction = Transaction.load(transactionId)
  if (transaction == null) {
    transaction = new Transaction(transactionId)
    transaction.executed = true // Mark the transaction as executed
    transaction.timestamp = event.block.timestamp
    transaction.signers = [] // Initialize signers array, adjust according to your logic
    transaction.save()
  }

  // Assuming event.params.sender exists and you want to track the executing user
  updateUserActivity(event.transaction.from.toHex(), true)
}

function updateUserActivity(userId: string, executed: boolean): void {
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.signaturesCount = 0
    user.executionsCount = 0
  }
  if (executed) {
    user.executionsCount += 1
  }
  user.save()
}
