import { BigInt } from '@graphprotocol/graph-ts'
import {
  GnosisSafeL2,
  AddedOwner,
  ApproveHash,
  SafeMultiSigTransaction as SafeMultiSigTransactionEvent,
  SignMsg as SignMsgEvent,
} from '../generated/GnosisSafeL2/GnosisSafeL2'
import { Signature, Signer, UserActivity } from '../generated/schema'

// Handle SafeMultiSigTransaction events
export function handleSafeMultiSigTransaction(
  event: SafeMultiSigTransactionEvent,
): void {
  let id = event.transaction.hash.toHex()
  let transaction = new SafeMultiSigTransaction(id)
  transaction.to = event.params.to
  transaction.value = event.params.value
  transaction.data = event.params.data
  // Add other fields according to your schema definitions...
  transaction.save()

  // Logic to handle Signer and Signature entities creation/updation
  // Plus, update UserActivity based on this transaction
}

// Handle SignMsg events
export function handleSignMsg(event: SignMsgEvent): void {
  let id = event.params.msgHash.toHex() + '-' + event.params.owner.toHex()
  let signMsg = new SignMsg(id)
  signMsg.msgHash = event.params.msgHash
  signMsg.signer = event.params.owner
  // Add other fields according to your schema definitions...
  signMsg.save()

  // Logic to update UserActivity based on this signed message
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
