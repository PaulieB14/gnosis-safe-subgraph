
import { ExecutionSuccess } from '../generated/GnosisSafeL2/GnosisSafeL2'
import { User, Transaction } from '../generated/schema'
import { ApproveHash } from '../generated/GnosisSafeL2/GnosisSafeL2'

export function handleApproveHash(event: ApproveHash): void {
  // The event provides the hash approved and the owner who approved it.
  let userId = event.params.owner.toHex()
  let approvedHash = event.params.approvedHash.toHex()

  // Load or initialize the User entity from the subgraph store.
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.signaturesCount = 1 // Initialize if this is the first approval.
    user.executionsCount = 0 // Initialize assuming no executions yet.
  } else {
    user.signaturesCount = user.signaturesCount + 1 // Increment the count of approvals.
  }

  user.save()
}

// Adjusted to match the YAML configuration
export function handleExecTransaction(event: ExecutionSuccess): void {
  let transactionId = event.params.txHash.toHex()
  let transaction = Transaction.load(transactionId)
=======
import { SafeMultiSigTransaction as SafeMultiSigTransactionContract } from '../generated/GnosisSafeL2/GnosisSafeL2'
import {
  SafeMultiSigTransaction,
  SignMsg,
  UserActivity,
} from '../generated/schema'


export function handleSafeMultiSigTransaction(
  event: SafeMultiSigTransactionContract,
): void {
  let id = event.transaction.hash.toHex()
  let transaction = SafeMultiSigTransaction.load(id)
>>>>>>> 7b6672f8c0140d354178b877dc1966f182b4a29e
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

<<<<<<< HEAD
function updateUserActivity(userId: string, executed: boolean): void {
  let user = User.load(userId)
  if (user == null) {
    user = new User(userId)
    user.signaturesCount = 0
    user.executionsCount = 0
=======

export function handleSignMsg(event: SignMsgEvent): void {
  let id = event.params.msgHash.toHex() + '-' + event.transaction.from.toHex()
  let signMsg = new SignMsg(id)
  signMsg.msgHash = event.params.msgHash
  signMsg.signer = event.transaction.from.toHexString() // Correctly converting address to string
  signMsg.save()
}


function updateUserActivity(userId: string, isSignature: boolean): void {
  let userActivity = UserActivity.load(userId)
  if (userActivity == null) {
    userActivity = new UserActivity(userId)
    userActivity.signaturesCount = 0
    userActivity.executionsCount = 0
    // Initialize other fields as needed
>>>>>>> 7b6672f8c0140d354178b877dc1966f182b4a29e
  }
  if (executed) {
    user.executionsCount += 1
  }
  user.save()
}
