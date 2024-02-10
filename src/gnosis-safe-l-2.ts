import { Bytes } from '@graphprotocol/graph-ts'
import { SignMsg as SignMsgEvent } from '../generated/GnosisSafeL2/GnosisSafeL2'
import { SignMsg } from '../generated/schema'

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
  SignMsg as SignMsgEvent,
} from '../generated/GnosisSafeL2/GnosisSafeL2'
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
  SignMsg,
} from '../generated/schema'

export function handleAddedOwner(event: AddedOwnerEvent): void {
  let entity = new AddedOwner(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
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
  let entity = new ExecutionSuccess(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
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
  // Create a new SignMsg entity with a string ID
  let entity = new SignMsg(event.transaction.hash.toHex())

  // Assuming msgHash is of type Bytes and event.params.msgHash is also Bytes
  entity.msgHash = event.params.msgHash

  // If the signer is expected to be a Bytes type and event.transaction.from is an Address
  // Convert Address to Bytes using toHex() for conversion, then to Bytes
  entity.signer = Bytes.fromHexString(event.transaction.from.toHex())

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  // Directly assign transactionHash if it's already Bytes; no need for conversion
  entity.transactionHash = event.transaction.hash

  entity.save()
}
