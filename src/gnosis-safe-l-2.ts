import {
  SafeMultiSigTransaction as SafeMultiSigTransactionEvent,
  SignMsg as SignMsgEvent,
} from '../generated/GnosisSafeL2/GnosisSafeL2'

export function handleSafeMultiSigTransaction(
  event: SafeMultiSigTransactionEvent,
): void {
  let transaction = new SafeMultiSigTransaction(event.transaction.hash.toHex())
  transaction.to = event.params.to.toHexString()
  transaction.value = event.params.value
  transaction.data = event.params.data
  // Assign other properties similarly
  transaction.save()
}

export function handleSignMsg(event: SignMsgEvent): void {
  let id = event.params.msgHash.toHex() + '-' + event.transaction.from.toHex()
  let signMsg = new SignMsg(id)
  signMsg.msgHash = event.params.msgHash
  signMsg.signer = event.transaction.from
  signMsg.save()
}

// Example function to update or create UserActivity
function updateUserActivity(userId: string, isSignature: boolean): void {
  let userActivity = UserActivity.load(userId)
  if (!userActivity) {
    userActivity = new UserActivity(userId)
    userActivity.signaturesCount = 0
    userActivity.executionsCount = 0
    // Initialize other fields...
  }

  if (isSignature) {
    userActivity.signaturesCount += 1
  } else {
    userActivity.executionsCount += 1
  }

  userActivity.save()
}
