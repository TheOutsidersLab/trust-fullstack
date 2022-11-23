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

export class CancellationRequested extends ethereum.Event {
  get params(): CancellationRequested__Params {
    return new CancellationRequested__Params(this);
  }
}

export class CancellationRequested__Params {
  _event: CancellationRequested;

  constructor(event: CancellationRequested) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get cancelledByOwner(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }

  get cancelledByTenant(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class CryptoRentPaid extends ethereum.Event {
  get params(): CryptoRentPaid__Params {
    return new CryptoRentPaid__Params(this);
  }
}

export class CryptoRentPaid__Params {
  _event: CryptoRentPaid;

  constructor(event: CryptoRentPaid) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get withoutIssues(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FiatRentPaid extends ethereum.Event {
  get params(): FiatRentPaid__Params {
    return new FiatRentPaid__Params(this);
  }
}

export class FiatRentPaid__Params {
  _event: FiatRentPaid;

  constructor(event: FiatRentPaid) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get withoutIssues(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get exchangeRate(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get exchangeRateTimestamp(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class LeaseCreated extends ethereum.Event {
  get params(): LeaseCreated__Params {
    return new LeaseCreated__Params(this);
  }
}

export class LeaseCreated__Params {
  _event: LeaseCreated;

  constructor(event: LeaseCreated) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get tenantId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get ownerId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get rentAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get totalNumberOfRents(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get paymentToken(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get rentPaymentInterval(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get rentPaymentLimitTime(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get startDate(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get currencyPair(): string {
    return this._event.parameters[9].value.toString();
  }
}

export class LeaseMetaDataUpdated extends ethereum.Event {
  get params(): LeaseMetaDataUpdated__Params {
    return new LeaseMetaDataUpdated__Params(this);
  }
}

export class LeaseMetaDataUpdated__Params {
  _event: LeaseMetaDataUpdated;

  constructor(event: LeaseMetaDataUpdated) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get metaData(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class LeaseReviewedByOwner extends ethereum.Event {
  get params(): LeaseReviewedByOwner__Params {
    return new LeaseReviewedByOwner__Params(this);
  }
}

export class LeaseReviewedByOwner__Params {
  _event: LeaseReviewedByOwner;

  constructor(event: LeaseReviewedByOwner) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reviewUri(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class LeaseReviewedByTenant extends ethereum.Event {
  get params(): LeaseReviewedByTenant__Params {
    return new LeaseReviewedByTenant__Params(this);
  }
}

export class LeaseReviewedByTenant__Params {
  _event: LeaseReviewedByTenant;

  constructor(event: LeaseReviewedByTenant) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reviewUri(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class LeaseValidated extends ethereum.Event {
  get params(): LeaseValidated__Params {
    return new LeaseValidated__Params(this);
  }
}

export class LeaseValidated__Params {
  _event: LeaseValidated;

  constructor(event: LeaseValidated) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RentNotPaid extends ethereum.Event {
  get params(): RentNotPaid__Params {
    return new RentNotPaid__Params(this);
  }
}

export class RentNotPaid__Params {
  _event: RentNotPaid;

  constructor(event: RentNotPaid) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RentPaymentIssueStatusUpdated extends ethereum.Event {
  get params(): RentPaymentIssueStatusUpdated__Params {
    return new RentPaymentIssueStatusUpdated__Params(this);
  }
}

export class RentPaymentIssueStatusUpdated__Params {
  _event: RentPaymentIssueStatusUpdated;

  constructor(event: RentPaymentIssueStatusUpdated) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get withoutIssues(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class SetRentToPending extends ethereum.Event {
  get params(): SetRentToPending__Params {
    return new SetRentToPending__Params(this);
  }
}

export class SetRentToPending__Params {
  _event: SetRentToPending;

  constructor(event: SetRentToPending) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get rentId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdateLeaseStatus extends ethereum.Event {
  get params(): UpdateLeaseStatus__Params {
    return new UpdateLeaseStatus__Params(this);
  }
}

export class UpdateLeaseStatus__Params {
  _event: UpdateLeaseStatus;

  constructor(event: UpdateLeaseStatus) {
    this._event = event;
  }

  get leaseId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class Lease__getPaymentsResultRentPaymentsStruct extends ethereum.Tuple {
  get validationDate(): BigInt {
    return this[0].toBigInt();
  }

  get withoutIssues(): boolean {
    return this[1].toBoolean();
  }

  get exchangeRate(): BigInt {
    return this[2].toBigInt();
  }

  get exchangeRateTimestamp(): BigInt {
    return this[3].toBigInt();
  }

  get paymentStatus(): i32 {
    return this[4].toI32();
  }
}

export class Lease__leasesResultPaymentDataStruct extends ethereum.Tuple {
  get rentAmount(): BigInt {
    return this[0].toBigInt();
  }

  get paymentToken(): Address {
    return this[1].toAddress();
  }

  get currencyPair(): string {
    return this[2].toString();
  }
}

export class Lease__leasesResultReviewStatusStruct extends ethereum.Tuple {
  get ownerReviewed(): boolean {
    return this[0].toBoolean();
  }

  get tenantReviewed(): boolean {
    return this[1].toBoolean();
  }

  get ownerReviewUri(): string {
    return this[2].toString();
  }

  get tenantReviewUri(): string {
    return this[3].toString();
  }
}

export class Lease__leasesResultCancellationStruct extends ethereum.Tuple {
  get cancelledByOwner(): boolean {
    return this[0].toBoolean();
  }

  get cancelledByTenant(): boolean {
    return this[1].toBoolean();
  }
}

export class Lease__leasesResult {
  value0: BigInt;
  value1: BigInt;
  value2: Lease__leasesResultPaymentDataStruct;
  value3: i32;
  value4: Lease__leasesResultReviewStatusStruct;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: Lease__leasesResultCancellationStruct;
  value9: i32;
  value10: string;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: Lease__leasesResultPaymentDataStruct,
    value3: i32,
    value4: Lease__leasesResultReviewStatusStruct,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: Lease__leasesResultCancellationStruct,
    value9: i32,
    value10: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromTuple(this.value2));
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3))
    );
    map.set("value4", ethereum.Value.fromTuple(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromTuple(this.value8));
    map.set(
      "value9",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value9))
    );
    map.set("value10", ethereum.Value.fromString(this.value10));
    return map;
  }
}

export class Lease extends ethereum.SmartContract {
  static bind(address: Address): Lease {
    return new Lease("Lease", address);
  }

  DIVIDER(): BigInt {
    let result = super.call("DIVIDER", "DIVIDER():(uint64)", []);

    return result[0].toBigInt();
  }

  try_DIVIDER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DIVIDER", "DIVIDER():(uint64)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPayments(
    _leaseId: BigInt
  ): Array<Lease__getPaymentsResultRentPaymentsStruct> {
    let result = super.call(
      "getPayments",
      "getPayments(uint256):((uint256,bool,int256,uint256,uint8)[])",
      [ethereum.Value.fromUnsignedBigInt(_leaseId)]
    );

    return result[0].toTupleArray<Lease__getPaymentsResultRentPaymentsStruct>();
  }

  try_getPayments(
    _leaseId: BigInt
  ): ethereum.CallResult<Array<Lease__getPaymentsResultRentPaymentsStruct>> {
    let result = super.tryCall(
      "getPayments",
      "getPayments(uint256):((uint256,bool,int256,uint256,uint8)[])",
      [ethereum.Value.fromUnsignedBigInt(_leaseId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Lease__getPaymentsResultRentPaymentsStruct>()
    );
  }

  leases(param0: BigInt): Lease__leasesResult {
    let result = super.call(
      "leases",
      "leases(uint256):(uint256,uint256,(uint256,address,string),uint8,(bool,bool,string,string),uint256,uint256,uint256,(bool,bool),uint8,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Lease__leasesResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      changetype<Lease__leasesResultPaymentDataStruct>(result[2].toTuple()),
      result[3].toI32(),
      changetype<Lease__leasesResultReviewStatusStruct>(result[4].toTuple()),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      changetype<Lease__leasesResultCancellationStruct>(result[8].toTuple()),
      result[9].toI32(),
      result[10].toString()
    );
  }

  try_leases(param0: BigInt): ethereum.CallResult<Lease__leasesResult> {
    let result = super.tryCall(
      "leases",
      "leases(uint256):(uint256,uint256,(uint256,address,string),uint8,(bool,bool,string,string),uint256,uint256,uint256,(bool,bool),uint8,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Lease__leasesResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        changetype<Lease__leasesResultPaymentDataStruct>(value[2].toTuple()),
        value[3].toI32(),
        changetype<Lease__leasesResultReviewStatusStruct>(value[4].toTuple()),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        changetype<Lease__leasesResultCancellationStruct>(value[8].toTuple()),
        value[9].toI32(),
        value[10].toString()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _ownerContract(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tenantContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _rateOracle(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CancelLeaseCall extends ethereum.Call {
  get inputs(): CancelLeaseCall__Inputs {
    return new CancelLeaseCall__Inputs(this);
  }

  get outputs(): CancelLeaseCall__Outputs {
    return new CancelLeaseCall__Outputs(this);
  }
}

export class CancelLeaseCall__Inputs {
  _call: CancelLeaseCall;

  constructor(call: CancelLeaseCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelLeaseCall__Outputs {
  _call: CancelLeaseCall;

  constructor(call: CancelLeaseCall) {
    this._call = call;
  }
}

export class CreateLeaseCall extends ethereum.Call {
  get inputs(): CreateLeaseCall__Inputs {
    return new CreateLeaseCall__Inputs(this);
  }

  get outputs(): CreateLeaseCall__Outputs {
    return new CreateLeaseCall__Outputs(this);
  }
}

export class CreateLeaseCall__Inputs {
  _call: CreateLeaseCall;

  constructor(call: CreateLeaseCall) {
    this._call = call;
  }

  get _tenantId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _totalNumberOfRents(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get _paymentToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _rentPaymentInterval(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _rentPaymentLimitTime(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _currencyPair(): string {
    return this._call.inputValues[6].value.toString();
  }

  get _startDate(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class CreateLeaseCall__Outputs {
  _call: CreateLeaseCall;

  constructor(call: CreateLeaseCall) {
    this._call = call;
  }
}

export class DeclineLeaseCall extends ethereum.Call {
  get inputs(): DeclineLeaseCall__Inputs {
    return new DeclineLeaseCall__Inputs(this);
  }

  get outputs(): DeclineLeaseCall__Outputs {
    return new DeclineLeaseCall__Outputs(this);
  }
}

export class DeclineLeaseCall__Inputs {
  _call: DeclineLeaseCall;

  constructor(call: DeclineLeaseCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DeclineLeaseCall__Outputs {
  _call: DeclineLeaseCall;

  constructor(call: DeclineLeaseCall) {
    this._call = call;
  }
}

export class MarkRentAsNotPaidCall extends ethereum.Call {
  get inputs(): MarkRentAsNotPaidCall__Inputs {
    return new MarkRentAsNotPaidCall__Inputs(this);
  }

  get outputs(): MarkRentAsNotPaidCall__Outputs {
    return new MarkRentAsNotPaidCall__Outputs(this);
  }
}

export class MarkRentAsNotPaidCall__Inputs {
  _call: MarkRentAsNotPaidCall;

  constructor(call: MarkRentAsNotPaidCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MarkRentAsNotPaidCall__Outputs {
  _call: MarkRentAsNotPaidCall;

  constructor(call: MarkRentAsNotPaidCall) {
    this._call = call;
  }
}

export class MarkRentAsPendingCall extends ethereum.Call {
  get inputs(): MarkRentAsPendingCall__Inputs {
    return new MarkRentAsPendingCall__Inputs(this);
  }

  get outputs(): MarkRentAsPendingCall__Outputs {
    return new MarkRentAsPendingCall__Outputs(this);
  }
}

export class MarkRentAsPendingCall__Inputs {
  _call: MarkRentAsPendingCall;

  constructor(call: MarkRentAsPendingCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MarkRentAsPendingCall__Outputs {
  _call: MarkRentAsPendingCall;

  constructor(call: MarkRentAsPendingCall) {
    this._call = call;
  }
}

export class PayCryptoRentInETHCall extends ethereum.Call {
  get inputs(): PayCryptoRentInETHCall__Inputs {
    return new PayCryptoRentInETHCall__Inputs(this);
  }

  get outputs(): PayCryptoRentInETHCall__Outputs {
    return new PayCryptoRentInETHCall__Outputs(this);
  }
}

export class PayCryptoRentInETHCall__Inputs {
  _call: PayCryptoRentInETHCall;

  constructor(call: PayCryptoRentInETHCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _withoutIssues(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class PayCryptoRentInETHCall__Outputs {
  _call: PayCryptoRentInETHCall;

  constructor(call: PayCryptoRentInETHCall) {
    this._call = call;
  }
}

export class PayCryptoRentInTokenCall extends ethereum.Call {
  get inputs(): PayCryptoRentInTokenCall__Inputs {
    return new PayCryptoRentInTokenCall__Inputs(this);
  }

  get outputs(): PayCryptoRentInTokenCall__Outputs {
    return new PayCryptoRentInTokenCall__Outputs(this);
  }
}

export class PayCryptoRentInTokenCall__Inputs {
  _call: PayCryptoRentInTokenCall;

  constructor(call: PayCryptoRentInTokenCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _withoutIssues(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PayCryptoRentInTokenCall__Outputs {
  _call: PayCryptoRentInTokenCall;

  constructor(call: PayCryptoRentInTokenCall) {
    this._call = call;
  }
}

export class PayFiatRentInEthCall extends ethereum.Call {
  get inputs(): PayFiatRentInEthCall__Inputs {
    return new PayFiatRentInEthCall__Inputs(this);
  }

  get outputs(): PayFiatRentInEthCall__Outputs {
    return new PayFiatRentInEthCall__Outputs(this);
  }
}

export class PayFiatRentInEthCall__Inputs {
  _call: PayFiatRentInEthCall;

  constructor(call: PayFiatRentInEthCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _withoutIssues(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }
}

export class PayFiatRentInEthCall__Outputs {
  _call: PayFiatRentInEthCall;

  constructor(call: PayFiatRentInEthCall) {
    this._call = call;
  }
}

export class PayFiatRentInTokenCall extends ethereum.Call {
  get inputs(): PayFiatRentInTokenCall__Inputs {
    return new PayFiatRentInTokenCall__Inputs(this);
  }

  get outputs(): PayFiatRentInTokenCall__Outputs {
    return new PayFiatRentInTokenCall__Outputs(this);
  }
}

export class PayFiatRentInTokenCall__Inputs {
  _call: PayFiatRentInTokenCall;

  constructor(call: PayFiatRentInTokenCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _rentId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _withoutIssues(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _amountInSmallestDecimal(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class PayFiatRentInTokenCall__Outputs {
  _call: PayFiatRentInTokenCall;

  constructor(call: PayFiatRentInTokenCall) {
    this._call = call;
  }
}

export class ReviewLeaseCall extends ethereum.Call {
  get inputs(): ReviewLeaseCall__Inputs {
    return new ReviewLeaseCall__Inputs(this);
  }

  get outputs(): ReviewLeaseCall__Outputs {
    return new ReviewLeaseCall__Outputs(this);
  }
}

export class ReviewLeaseCall__Inputs {
  _call: ReviewLeaseCall;

  constructor(call: ReviewLeaseCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _reviewUri(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ReviewLeaseCall__Outputs {
  _call: ReviewLeaseCall;

  constructor(call: ReviewLeaseCall) {
    this._call = call;
  }
}

export class UpdateLeaseMetaDataCall extends ethereum.Call {
  get inputs(): UpdateLeaseMetaDataCall__Inputs {
    return new UpdateLeaseMetaDataCall__Inputs(this);
  }

  get outputs(): UpdateLeaseMetaDataCall__Outputs {
    return new UpdateLeaseMetaDataCall__Outputs(this);
  }
}

export class UpdateLeaseMetaDataCall__Inputs {
  _call: UpdateLeaseMetaDataCall;

  constructor(call: UpdateLeaseMetaDataCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _newCid(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class UpdateLeaseMetaDataCall__Outputs {
  _call: UpdateLeaseMetaDataCall;

  constructor(call: UpdateLeaseMetaDataCall) {
    this._call = call;
  }
}

export class ValidateLeaseCall extends ethereum.Call {
  get inputs(): ValidateLeaseCall__Inputs {
    return new ValidateLeaseCall__Inputs(this);
  }

  get outputs(): ValidateLeaseCall__Outputs {
    return new ValidateLeaseCall__Outputs(this);
  }
}

export class ValidateLeaseCall__Inputs {
  _call: ValidateLeaseCall;

  constructor(call: ValidateLeaseCall) {
    this._call = call;
  }

  get _leaseId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ValidateLeaseCall__Outputs {
  _call: ValidateLeaseCall;

  constructor(call: ValidateLeaseCall) {
    this._call = call;
  }
}
