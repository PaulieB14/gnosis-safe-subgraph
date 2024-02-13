// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class SafeMultiSigTransaction extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SafeMultiSigTransaction entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type SafeMultiSigTransaction must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SafeMultiSigTransaction", id.toBytes().toHexString(), this);
    }
  }

  static loadInBlock(id: Bytes): SafeMultiSigTransaction | null {
    return changetype<SafeMultiSigTransaction | null>(
      store.get_in_block("SafeMultiSigTransaction", id.toHexString())
    );
  }

  static load(id: Bytes): SafeMultiSigTransaction | null {
    return changetype<SafeMultiSigTransaction | null>(
      store.get("SafeMultiSigTransaction", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get data(): Bytes {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set data(value: Bytes) {
    this.set("data", Value.fromBytes(value));
  }

  get operation(): i32 {
    let value = this.get("operation");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set operation(value: i32) {
    this.set("operation", Value.fromI32(value));
  }

  get safeTxGas(): BigInt {
    let value = this.get("safeTxGas");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set safeTxGas(value: BigInt) {
    this.set("safeTxGas", Value.fromBigInt(value));
  }

  get baseGas(): BigInt {
    let value = this.get("baseGas");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set baseGas(value: BigInt) {
    this.set("baseGas", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }

  get gasToken(): Bytes {
    let value = this.get("gasToken");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set gasToken(value: Bytes) {
    this.set("gasToken", Value.fromBytes(value));
  }

  get refundReceiver(): Bytes {
    let value = this.get("refundReceiver");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set refundReceiver(value: Bytes) {
    this.set("refundReceiver", Value.fromBytes(value));
  }

  get signatures(): SignatureLoader {
    return new SignatureLoader(
      "SafeMultiSigTransaction",
      this.get("id")!.toString(),
      "signatures"
    );
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Signature extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Signature entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Signature must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Signature", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Signature | null {
    return changetype<Signature | null>(store.get_in_block("Signature", id));
  }

  static load(id: string): Signature | null {
    return changetype<Signature | null>(store.get("Signature", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): Bytes {
    let value = this.get("transaction");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set transaction(value: Bytes) {
    this.set("transaction", Value.fromBytes(value));
  }

  get signer(): string {
    let value = this.get("signer");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set signer(value: string) {
    this.set("signer", Value.fromString(value));
  }

  get signatureData(): Bytes {
    let value = this.get("signatureData");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBytes();
    }
  }

  set signatureData(value: Bytes) {
    this.set("signatureData", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toBigInt();
    }
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class Signer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Signer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Signer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Signer", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Signer | null {
    return changetype<Signer | null>(store.get_in_block("Signer", id));
  }

  static load(id: string): Signer | null {
    return changetype<Signer | null>(store.get("Signer", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get signedTransactions(): SignatureLoader {
    return new SignatureLoader(
      "Signer",
      this.get("id")!.toString(),
      "signedTransactions"
    );
  }

  get activities(): UserActivityLoader {
    return new UserActivityLoader(
      "Signer",
      this.get("id")!.toString(),
      "activities"
    );
  }
}

export class UserActivity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserActivity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserActivity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserActivity", id.toString(), this);
    }
  }

  static loadInBlock(id: string): UserActivity | null {
    return changetype<UserActivity | null>(
      store.get_in_block("UserActivity", id)
    );
  }

  static load(id: string): UserActivity | null {
    return changetype<UserActivity | null>(store.get("UserActivity", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get month(): i32 {
    let value = this.get("month");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set month(value: i32) {
    this.set("month", Value.fromI32(value));
  }

  get year(): i32 {
    let value = this.get("year");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set year(value: i32) {
    this.set("year", Value.fromI32(value));
  }

  get signaturesCount(): i32 {
    let value = this.get("signaturesCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set signaturesCount(value: i32) {
    this.set("signaturesCount", Value.fromI32(value));
  }

  get executionsCount(): i32 {
    let value = this.get("executionsCount");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set executionsCount(value: i32) {
    this.set("executionsCount", Value.fromI32(value));
  }
}

export class SignatureLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): Signature[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<Signature[]>(value);
  }
}

export class UserActivityLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): UserActivity[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<UserActivity[]>(value);
  }
}
