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
  if (transaction == null) {
    transaction = new SafeMultiSigTransaction(id)
    transaction.to = event.params.to.toHexString() // Correctly converting address to string
    transaction.value = event.params.value
    transaction.data = event.params.data
    // Assign other properties as needed
    transaction.save()
  }
}


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
  }

  if (isSignature) {
    userActivity.signaturesCount += 1
  } else {
    userActivity.executionsCount += 1
  }

  userActivity.save()
}
