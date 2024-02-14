import {
  SafeMultiSigTransaction as SafeMultiSigTransactionContract,
  ExecTransaction,
  SafeReceived,
} from '../generated/GnosisSafeL2/GnosisSafeL2'
import { User, Transaction, SafeReceivedEvent } from '../generated/schema'

// Example handling an execution transaction
export function handleExecTransaction(event: ExecTransaction): void {
  let transactionId = event.params.txHash.toHex()
  let transaction = Transaction.load(transactionId)
  if (transaction == null) {
    transaction = new Transaction(transactionId)
    // Initialize transaction fields from event parameters
    transaction.executed = true // Assuming this event marks the transaction as executed
    transaction.save()
  }

  updateUserActivity(event.transaction.from.toHex(), true)
}

export function handleSafeReceived(event: SafeReceived): void {
  let eventId = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let safeReceivedEvent = new SafeReceivedEvent(eventId)
  safeReceivedEvent.sender = event.params.sender
  safeReceivedEvent.value = event.params.value
  safeReceivedEvent.save()
}

function updateUserActivity(userId: string, executed: boolean): void {
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.signaturesCount = 0 // Initialize if tracking signatures
    user.executionsCount = 0
  }
  if (executed) {
    user.executionsCount += 1
  }
  user.save()
}
