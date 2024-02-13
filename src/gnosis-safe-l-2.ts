// Importing contract and schema-generated entities
import {
  GnosisSafeL2, // This should be the name of the generated contract API from your ABI
} from '../generated/GnosisSafeL2/GnosisSafeL2'
import {
  SafeMultiSigTransaction,
  Signature,
  Signer,
  UserActivity,
} from '../generated/schema'

// Assuming `SafeMultiSigTransaction` and `SignMsg` event handlers need corrections

export function handleSafeMultiSigTransaction(
  event: GnosisSafeL2.SafeMultiSigTransaction,
): void {
  let id = event.transaction.hash.toHex()
  let transaction = SafeMultiSigTransaction.load(id)
  if (transaction == null) {
    transaction = new SafeMultiSigTransaction(id)
    transaction.to = event.params.to
    transaction.value = event.params.value
    transaction.data = event.params.data
    transaction.operation = event.params.operation.toI32()
    transaction.safeTxGas = event.params.safeTxGas
    transaction.baseGas = event.params.baseGas
    transaction.gasPrice = event.params.gasPrice
    transaction.gasToken = event.params.gasToken
    transaction.refundReceiver = event.params.refundReceiver
    transaction.signatures = [] // Assuming this will be populated later or adjusted based on your logic
    transaction.blockNumber = event.block.number
    transaction.blockTimestamp = event.block.timestamp
    transaction.transactionHash = event.transaction.hash
    transaction.save()
  }

  // Signature and Signer logic needs to be implemented here
  // This pseudocode assumes you will extract and process signatures to update related entities
}

export function handleSignMsg(event: GnosisSafeL2.SignMsg): void {
  let msg = new SignMsg(event.transaction.hash.toHex())
  msg.msgHash = event.params.msgHash
  msg.signer = event.params.signer
  msg.blockNumber = event.block.number
  msg.blockTimestamp = event.block.timestamp
  msg.transactionHash = event.transaction.hash
  msg.save()

  // Update or create UserActivity for the signer
  updateUserActivity(event.params.signer.toHex(), event.block.timestamp)
}

function updateUserActivity(signerAddress: string, timestamp: BigInt): void {
  // This function should create or update a UserActivity entity for a signer
  // Extract month and year from timestamp to use as part of the UserActivity ID
  // Increment signaturesCount or executionsCount as appropriate
}
