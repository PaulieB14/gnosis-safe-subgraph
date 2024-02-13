import { Bytes } from '@graphprotocol/graph-ts'
// Importing only the necessary event types
import {
  SafeMultiSigTransaction as SafeMultiSigTransactionEvent,
  SignMsg as SignMsgEvent,
} from '../generated/GnosisSafeL2/GnosisSafeL2'

// Importing schema types for the entities being used
import {
  SafeMultiSigTransaction,
  SignMsg,
  Signature, // Assuming you have logic to handle this
  Signer, // Assuming you have logic to handle this
  UserActivity,
} from '../generated/schema'

export function handleSafeMultiSigTransaction(
  event: SafeMultiSigTransactionEvent,
): void {
  let entity = new SafeMultiSigTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data
  entity.operation = event.params.operation
  entity.safeTxGas = event.params.safeTxGas
  entity.baseGas = event.params.baseGas
  entity.gasPrice = event.params.gasPrice
  entity.gasToken = event.params.gasToken
  entity.refundReceiver = event.params.refundReceiver
  entity.signatures = event.params.signatures
  entity.additionalInfo = event.params.additionalInfo

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignMsg(event: SignMsgEvent): void {
  // Directly use the transaction hash (Bytes) as the entity ID
  let entity = new SignMsg(event.transaction.hash)

  entity.msgHash = event.params.msgHash
  entity.signer = event.transaction.from // Assuming this is directly assignable as Bytes
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
