import { BigInt } from "@graphprotocol/graph-ts";
import {
  DeleteTrip,
  GiveBackTripMoney,
  NewAddTripMembers,
  NewFundTrip,
  NewTrip,
  NewWithdralRequest,
  NewWithdrawDone,
  UserApprovedWithdraw,
} from "../generated/Nomard/Nomard";
import { Trip, Withdraw } from "../generated/schema";

export function handleDeleteTrip(event: DeleteTrip): void {}

export function handleGiveBackTripMoney(event: GiveBackTripMoney): void {}

export function handleNewAddTripMembers(event: NewAddTripMembers): void {
  let trip = Trip.load(event.params.trip.toHex());
  if (!trip) {
    trip = new Trip(event.params.trip.toHex());
  }
  let members = trip.members;
  if (!members) {
    members = [event.params.user];
  } else {
    members.push(event.params.user);
  }
  trip.members = members;
  trip.save();
}

export function handleNewFundTrip(event: NewFundTrip): void {
  let trip = new Trip(event.params.trip.toHex());
  let totalObtained = trip.totalObtained;
  if (!totalObtained) {
    totalObtained = BigInt.zero();
  }
  trip.totalObtained = event.params.amount.plus(totalObtained);
  trip.save();
}

export function handleNewTrip(event: NewTrip): void {
  let trip = new Trip(event.params.tripId.toHex());
  trip.name = event.params.tripName;
  trip.owner = event.params.user;
  trip.totalAmount = event.params.totalNeeded;
  trip.save();
}

export function handleNewWithdralRequest(event: NewWithdralRequest): void {
  let withdraw = new Withdraw(event.params.withdrawId.toHex());
  withdraw.amount = event.params.amount;
  withdraw.done = false;
  withdraw.approvals = [];
  withdraw.receipt = event.params.receipt;
  withdraw.tripId = event.params.trip;
  withdraw.save();
}

export function handleNewWithdrawDone(event: NewWithdrawDone): void {
  let withdraw = Withdraw.load(event.params.withdrawId.toHex());
  if (!withdraw) {
    withdraw = new Withdraw(event.params.withdrawId.toHex());
  }
  withdraw.done = true;
  withdraw.save();
}

export function handleUserApprovedWithdraw(event: UserApprovedWithdraw): void {
  let withdraw = Withdraw.load(event.params.withdrawId.toHex());
  if (!withdraw) {
    withdraw = new Withdraw(event.params.withdrawId.toHex());
  }
  let withdrawApprovals = withdraw.approvals;
  if (!withdrawApprovals) {
    withdrawApprovals = [event.params.user];
  } else {
    withdrawApprovals.push(event.params.user);
  }
  withdraw.save();
}
