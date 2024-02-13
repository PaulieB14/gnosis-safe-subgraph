import {
  SafeMultiSigTransaction,
  SignMsg,
} from '../generated/GnosisSafeL2/GnosisSafeL2'
import { Signature, Signer, UserActivity } from '../generated/schema'

export function handleSafeMultiSigTransaction(
  event: SafeMultiSigTransaction,
): void {
  let transaction = new SafeMultiSigTransaction(event.transaction.hash.toHex())

  // Set transaction fields...
  transaction.save()

  // Example for handling signerId extraction and user activity update
  // This is pseudocode; actual implementation will vary
  let signerIds: string[] = extractSignerIds(event) // Implement this based on your data structure
  signerIds.forEach((signerId) => {
    let signer = Signer.load(signerId) || new Signer(signerId)
    signer.save()

    let signature = new Signature(
      `${event.transaction.hash.toHex()}-${signerId}`,
    )
    // Set signature fields...
    signature.save()

    updateUserActivity(signerId, event.block.timestamp)
  })
}

export function handleSignMsg(event: SignMsgEvent): void {
  let entity = new SignMsg(event.transaction.hash.toHex())
  // Set SignMsg fields...
  entity.save()

  updateUserActivity(event.transaction.from.toHex(), event.block.timestamp)
}

function updateUserActivity(signerId: string, timestamp: BigInt): void {
  // Implement logic to update or create UserActivity
  // This includes extracting month and year from timestamp and adjusting counts
}
