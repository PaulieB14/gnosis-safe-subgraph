import { Bytes, crypto } from '@graphprotocol/graph-ts'
import { AddedOwner as AddedOwnerEvent } from '../generated/GnosisSafeL2/GnosisSafeL2'
import { AddedOwner } from '../generated/schema'
// Importing event types from the generated GnosisSafeL2 contract
import {
  ApproveHash as ApproveHashEvent,
  ChangedFallbackHandler as ChangedFallbackHandlerEvent,
  ChangedGuard as ChangedGuardEvent,
  ChangedThreshold as ChangedThresholdEvent,
  DisabledModule as DisabledModuleEvent,
  EnabledModule as EnabledModuleEvent,
  ExecutionFailure as ExecutionFailureEvent,
  ExecutionFromModuleFailure as ExecutionFromModuleFailureEvent,
  ExecutionFromModuleSuccess as ExecutionFromModuleSuccessEvent,
  ExecutionSuccess as ExecutionSuccessEvent,
  RemovedOwner as RemovedOwnerEvent,
  SafeModuleTransaction as SafeModuleTransactionEvent,
  SafeMultiSigTransaction as SafeMultiSigTransactionEvent,
  SafeReceived as SafeReceivedEvent,
  SafeSetup as SafeSetupEvent,
  SignMsg as SignMsgEvent,
} from '../generated/GnosisSafeL2/GnosisSafeL2'

// Importing schema types from the generated schema
import {
  ApproveHash,
  ChangedFallbackHandler,
  ChangedGuard,
  ChangedThreshold,
  DisabledModule,
  EnabledModule,
  ExecutionFailure,
  ExecutionFromModuleFailure,
  ExecutionFromModuleSuccess,
  ExecutionSuccess,
  RemovedOwner,
  SafeModuleTransaction,
  SafeMultiSigTransaction,
  SafeReceived,
  SafeSetup,
  SignMsg,
  UserActivity,
} from '../generated/schema'

export function handleAddedOwner(event: AddedOwnerEvent): void {
  let baseId = event.transaction.hash
  // Directly use the transaction hash as the ID if it ensures uniqueness
  let uniqueId = baseId
  let entity = new AddedOwner(uniqueId) // Assuming uniqueId ensures entity uniqueness and is of type Bytes
  entity.owner = event.params.owner
  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash
  entity.save()
}

export function handleApproveHash(event: ApproveHashEvent): void {
  let entity = new ApproveHash(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.approvedHash = event.params.approvedHash
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedFallbackHandler(
  event: ChangedFallbackHandlerEvent,
): void {
  let entity = new ChangedFallbackHandler(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.handler = event.params.handler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedGuard(event: ChangedGuardEvent): void {
  let entity = new ChangedGuard(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.guard = event.params.guard

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedThreshold(event: ChangedThresholdEvent): void {
  let entity = new ChangedThreshold(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.threshold = event.params.threshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisabledModule(event: DisabledModuleEvent): void {
  let entity = new DisabledModule(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnabledModule(event: EnabledModuleEvent): void {
  let entity = new EnabledModule(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFailure(event: ExecutionFailureEvent): void {
  let entity = new ExecutionFailure(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.txHash = event.params.txHash
  entity.payment = event.params.payment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFromModuleFailure(
  event: ExecutionFromModuleFailureEvent,
): void {
  let entity = new ExecutionFromModuleFailure(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFromModuleSuccess(
  event: ExecutionFromModuleSuccessEvent,
): void {
  let entity = new ExecutionFromModuleSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionSuccess(event: ExecutionSuccessEvent): void {
  let timestamp = event.block.timestamp.toI32()
  let executor = event.transaction.from // The user performing the transaction.

  let date = new Date(timestamp * 1000) // Convert to milliseconds for accurate date manipulation.
  let year = date.getUTCFullYear()
  let month = date.getUTCMonth() + 1 // JavaScript months are 0-indexed.

  let id = executor.toHex() + '-' + year.toString() + '-' + month.toString()

  let activity = UserActivity.load(id)

  if (!activity) {
    activity = new UserActivity(id)
    activity.user = executor
    activity.year = year
    activity.month = month
    activity.signatures = 0 // Initialize if specifically tracking signatures.
    activity.executions = 0 // Initialize executions.
  }

  // Assume each executionSuccess event represents a signature or execution.
  activity.executions += 1
  // If you're also tracking signatures, adjust accordingly.
  // For instance, if one execution can have multiple signatures, you might need to parse and count signatures from the event.

  activity.save()
}

export function handleRemovedOwner(event: RemovedOwnerEvent): void {
  let entity = new RemovedOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeModuleTransaction(
  event: SafeModuleTransactionEvent,
): void {
  let entity = new SafeModuleTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.module = event.params.module
  entity.to = event.params.to
  entity.value = event.params.value
  entity.data = event.params.data
  entity.operation = event.params.operation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

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

export function handleSafeReceived(event: SafeReceivedEvent): void {
  let entity = new SafeReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeSetup(event: SafeSetupEvent): void {
  let id = event.transaction.hash.toHex() + '-' + event.logIndex.toString()
  let entity = new SafeSetup(Bytes.fromHexString('0x' + id) as Bytes)

  entity.initiator = Bytes.fromHexString(
    event.params.initiator.toHex(),
  ) as Bytes
  entity.owners = event.params.owners.map<Bytes>(
    (owner) => Bytes.fromHexString(owner.toHex()) as Bytes,
  )
  entity.threshold = event.params.threshold
  entity.initializer = Bytes.fromHexString(
    event.params.initializer.toHex(),
  ) as Bytes
  entity.fallbackHandler = Bytes.fromHexString(
    event.params.fallbackHandler.toHex(),
  ) as Bytes

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = Bytes.fromHexString(
    event.transaction.hash.toHex(),
  ) as Bytes

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
