// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class DeleteTrip extends ethereum.Event {
  get params(): DeleteTrip__Params {
    return new DeleteTrip__Params(this);
  }
}

export class DeleteTrip__Params {
  _event: DeleteTrip;

  constructor(event: DeleteTrip) {
    this._event = event;
  }

  get tripId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class GiveBackTripMoney extends ethereum.Event {
  get params(): GiveBackTripMoney__Params {
    return new GiveBackTripMoney__Params(this);
  }
}

export class GiveBackTripMoney__Params {
  _event: GiveBackTripMoney;

  constructor(event: GiveBackTripMoney) {
    this._event = event;
  }

  get tripId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class NewAddTripMembers extends ethereum.Event {
  get params(): NewAddTripMembers__Params {
    return new NewAddTripMembers__Params(this);
  }
}

export class NewAddTripMembers__Params {
  _event: NewAddTripMembers;

  constructor(event: NewAddTripMembers) {
    this._event = event;
  }

  get trip(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class NewFundTrip extends ethereum.Event {
  get params(): NewFundTrip__Params {
    return new NewFundTrip__Params(this);
  }
}

export class NewFundTrip__Params {
  _event: NewFundTrip;

  constructor(event: NewFundTrip) {
    this._event = event;
  }

  get trip(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewTrip extends ethereum.Event {
  get params(): NewTrip__Params {
    return new NewTrip__Params(this);
  }
}

export class NewTrip__Params {
  _event: NewTrip;

  constructor(event: NewTrip) {
    this._event = event;
  }

  get tripId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tripName(): string {
    return this._event.parameters[2].value.toString();
  }

  get totalNeeded(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NewWithdralRequest extends ethereum.Event {
  get params(): NewWithdralRequest__Params {
    return new NewWithdralRequest__Params(this);
  }
}

export class NewWithdralRequest__Params {
  _event: NewWithdralRequest;

  constructor(event: NewWithdralRequest) {
    this._event = event;
  }

  get withdrawId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get trip(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get receipt(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class NewWithdrawDone extends ethereum.Event {
  get params(): NewWithdrawDone__Params {
    return new NewWithdrawDone__Params(this);
  }
}

export class NewWithdrawDone__Params {
  _event: NewWithdrawDone;

  constructor(event: NewWithdrawDone) {
    this._event = event;
  }

  get withdrawId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class UserApprovedWithdraw extends ethereum.Event {
  get params(): UserApprovedWithdraw__Params {
    return new UserApprovedWithdraw__Params(this);
  }
}

export class UserApprovedWithdraw__Params {
  _event: UserApprovedWithdraw;

  constructor(event: UserApprovedWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get withdrawId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Nomard extends ethereum.SmartContract {
  static bind(address: Address): Nomard {
    return new Nomard("Nomard", address);
  }

  addTripMembers(tripId: BigInt, user: Address): BigInt {
    let result = super.call(
      "addTripMembers",
      "addTripMembers(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tripId),
        ethereum.Value.fromAddress(user)
      ]
    );

    return result[0].toBigInt();
  }

  try_addTripMembers(
    tripId: BigInt,
    user: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "addTripMembers",
      "addTripMembers(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(tripId),
        ethereum.Value.fromAddress(user)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  deleteTrip(id: BigInt): boolean {
    let result = super.call("deleteTrip", "deleteTrip(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBoolean();
  }

  try_deleteTrip(id: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("deleteTrip", "deleteTrip(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  withdrawRequest(
    amount: BigInt,
    tripId: BigInt,
    user: Address,
    receipt: string
  ): BigInt {
    let result = super.call(
      "withdrawRequest",
      "withdrawRequest(uint256,uint256,address,string):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(tripId),
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromString(receipt)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdrawRequest(
    amount: BigInt,
    tripId: BigInt,
    user: Address,
    receipt: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawRequest",
      "withdrawRequest(uint256,uint256,address,string):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(amount),
        ethereum.Value.fromUnsignedBigInt(tripId),
        ethereum.Value.fromAddress(user),
        ethereum.Value.fromString(receipt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  addressAlreadyApproved(theAddress: Address, tripId: BigInt): boolean {
    let result = super.call(
      "addressAlreadyApproved",
      "addressAlreadyApproved(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(theAddress),
        ethereum.Value.fromUnsignedBigInt(tripId)
      ]
    );

    return result[0].toBoolean();
  }

  try_addressAlreadyApproved(
    theAddress: Address,
    tripId: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "addressAlreadyApproved",
      "addressAlreadyApproved(address,uint256):(bool)",
      [
        ethereum.Value.fromAddress(theAddress),
        ethereum.Value.fromUnsignedBigInt(tripId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getAvailableMoneyInTrip(tripId: BigInt): BigInt {
    let result = super.call(
      "getAvailableMoneyInTrip",
      "getAvailableMoneyInTrip(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tripId)]
    );

    return result[0].toBigInt();
  }

  try_getAvailableMoneyInTrip(tripId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAvailableMoneyInTrip",
      "getAvailableMoneyInTrip(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(tripId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddTripMembersCall extends ethereum.Call {
  get inputs(): AddTripMembersCall__Inputs {
    return new AddTripMembersCall__Inputs(this);
  }

  get outputs(): AddTripMembersCall__Outputs {
    return new AddTripMembersCall__Outputs(this);
  }
}

export class AddTripMembersCall__Inputs {
  _call: AddTripMembersCall;

  constructor(call: AddTripMembersCall) {
    this._call = call;
  }

  get tripId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get user(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class AddTripMembersCall__Outputs {
  _call: AddTripMembersCall;

  constructor(call: AddTripMembersCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ApproveWithdrawCall extends ethereum.Call {
  get inputs(): ApproveWithdrawCall__Inputs {
    return new ApproveWithdrawCall__Inputs(this);
  }

  get outputs(): ApproveWithdrawCall__Outputs {
    return new ApproveWithdrawCall__Outputs(this);
  }
}

export class ApproveWithdrawCall__Inputs {
  _call: ApproveWithdrawCall;

  constructor(call: ApproveWithdrawCall) {
    this._call = call;
  }

  get withdrawId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ApproveWithdrawCall__Outputs {
  _call: ApproveWithdrawCall;

  constructor(call: ApproveWithdrawCall) {
    this._call = call;
  }
}

export class CreateTripCall extends ethereum.Call {
  get inputs(): CreateTripCall__Inputs {
    return new CreateTripCall__Inputs(this);
  }

  get outputs(): CreateTripCall__Outputs {
    return new CreateTripCall__Outputs(this);
  }
}

export class CreateTripCall__Inputs {
  _call: CreateTripCall;

  constructor(call: CreateTripCall) {
    this._call = call;
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tripName(): string {
    return this._call.inputValues[1].value.toString();
  }

  get totalNeeded(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateTripCall__Outputs {
  _call: CreateTripCall;

  constructor(call: CreateTripCall) {
    this._call = call;
  }
}

export class DeleteTripCall extends ethereum.Call {
  get inputs(): DeleteTripCall__Inputs {
    return new DeleteTripCall__Inputs(this);
  }

  get outputs(): DeleteTripCall__Outputs {
    return new DeleteTripCall__Outputs(this);
  }
}

export class DeleteTripCall__Inputs {
  _call: DeleteTripCall;

  constructor(call: DeleteTripCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeleteTripCall__Outputs {
  _call: DeleteTripCall;

  constructor(call: DeleteTripCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class FundTripCall extends ethereum.Call {
  get inputs(): FundTripCall__Inputs {
    return new FundTripCall__Inputs(this);
  }

  get outputs(): FundTripCall__Outputs {
    return new FundTripCall__Outputs(this);
  }
}

export class FundTripCall__Inputs {
  _call: FundTripCall;

  constructor(call: FundTripCall) {
    this._call = call;
  }

  get trip(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class FundTripCall__Outputs {
  _call: FundTripCall;

  constructor(call: FundTripCall) {
    this._call = call;
  }
}

export class GiveBackTripMoneyCall extends ethereum.Call {
  get inputs(): GiveBackTripMoneyCall__Inputs {
    return new GiveBackTripMoneyCall__Inputs(this);
  }

  get outputs(): GiveBackTripMoneyCall__Outputs {
    return new GiveBackTripMoneyCall__Outputs(this);
  }
}

export class GiveBackTripMoneyCall__Inputs {
  _call: GiveBackTripMoneyCall;

  constructor(call: GiveBackTripMoneyCall) {
    this._call = call;
  }

  get trip(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GiveBackTripMoneyCall__Outputs {
  _call: GiveBackTripMoneyCall;

  constructor(call: GiveBackTripMoneyCall) {
    this._call = call;
  }
}

export class SetStableCoinContractCall extends ethereum.Call {
  get inputs(): SetStableCoinContractCall__Inputs {
    return new SetStableCoinContractCall__Inputs(this);
  }

  get outputs(): SetStableCoinContractCall__Outputs {
    return new SetStableCoinContractCall__Outputs(this);
  }
}

export class SetStableCoinContractCall__Inputs {
  _call: SetStableCoinContractCall;

  constructor(call: SetStableCoinContractCall) {
    this._call = call;
  }

  get contractAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetStableCoinContractCall__Outputs {
  _call: SetStableCoinContractCall;

  constructor(call: SetStableCoinContractCall) {
    this._call = call;
  }
}

export class WithdrawMoneyCall extends ethereum.Call {
  get inputs(): WithdrawMoneyCall__Inputs {
    return new WithdrawMoneyCall__Inputs(this);
  }

  get outputs(): WithdrawMoneyCall__Outputs {
    return new WithdrawMoneyCall__Outputs(this);
  }
}

export class WithdrawMoneyCall__Inputs {
  _call: WithdrawMoneyCall;

  constructor(call: WithdrawMoneyCall) {
    this._call = call;
  }

  get withdrawRequestId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawMoneyCall__Outputs {
  _call: WithdrawMoneyCall;

  constructor(call: WithdrawMoneyCall) {
    this._call = call;
  }
}

export class WithdrawRequestCall extends ethereum.Call {
  get inputs(): WithdrawRequestCall__Inputs {
    return new WithdrawRequestCall__Inputs(this);
  }

  get outputs(): WithdrawRequestCall__Outputs {
    return new WithdrawRequestCall__Outputs(this);
  }
}

export class WithdrawRequestCall__Inputs {
  _call: WithdrawRequestCall;

  constructor(call: WithdrawRequestCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get tripId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get receipt(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class WithdrawRequestCall__Outputs {
  _call: WithdrawRequestCall;

  constructor(call: WithdrawRequestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
