import {
  AddedOwner as AddedOwnerEvent,
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
  SignMsg as SignMsgEvent
} from "../generated/GnosisSafeL2/GnosisSafeL2"
import {
  AddedOwner,
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
  SignMsg
} from "../generated/schema"

export function handleAddedOwner(event: AddedOwnerEvent): void {
  let entity = new AddedOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproveHash(event: ApproveHashEvent): void {
  let entity = new ApproveHash(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.approvedHash = event.params.approvedHash
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedFallbackHandler(
  event: ChangedFallbackHandlerEvent
): void {
  let entity = new ChangedFallbackHandler(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.handler = event.params.handler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedGuard(event: ChangedGuardEvent): void {
  let entity = new ChangedGuard(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.guard = event.params.guard

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleChangedThreshold(event: ChangedThresholdEvent): void {
  let entity = new ChangedThreshold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.threshold = event.params.threshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisabledModule(event: DisabledModuleEvent): void {
  let entity = new DisabledModule(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnabledModule(event: EnabledModuleEvent): void {
  let entity = new EnabledModule(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFailure(event: ExecutionFailureEvent): void {
  let entity = new ExecutionFailure(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txHash = event.params.txHash
  entity.payment = event.params.payment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFromModuleFailure(
  event: ExecutionFromModuleFailureEvent
): void {
  let entity = new ExecutionFromModuleFailure(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionFromModuleSuccess(
  event: ExecutionFromModuleSuccessEvent
): void {
  let entity = new ExecutionFromModuleSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.module = event.params.module

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExecutionSuccess(event: ExecutionSuccessEvent): void {
  let entity = new ExecutionSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.txHash = event.params.txHash
  entity.payment = event.params.payment

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemovedOwner(event: RemovedOwnerEvent): void {
  let entity = new RemovedOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeModuleTransaction(
  event: SafeModuleTransactionEvent
): void {
  let entity = new SafeModuleTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
  event: SafeMultiSigTransactionEvent
): void {
  let entity = new SafeMultiSigTransaction(
    event.transaction.hash.concatI32(event.logIndex.toI32())
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
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeSetup(event: SafeSetupEvent): void {
  let entity = new SafeSetup(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.initiator = event.params.initiator
  entity.owners = event.params.owners
  entity.threshold = event.params.threshold
  entity.initializer = event.params.initializer
  entity.fallbackHandler = event.params.fallbackHandler

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignMsg(event: SignMsgEvent): void {
  let entity = new SignMsg(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.msgHash = event.params.msgHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
