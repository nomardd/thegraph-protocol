import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DeleteTrip,
  GiveBackTripMoney,
  NewAddTripMembers,
  NewFundTrip,
  NewTrip,
  NewWithdralRequest,
  NewWithdrawDone,
  UserApprovedWithdraw
} from "../generated/Nomard/Nomard"

export function createDeleteTripEvent(tripId: BigInt): DeleteTrip {
  let deleteTripEvent = changetype<DeleteTrip>(newMockEvent())

  deleteTripEvent.parameters = new Array()

  deleteTripEvent.parameters.push(
    new ethereum.EventParam("tripId", ethereum.Value.fromUnsignedBigInt(tripId))
  )

  return deleteTripEvent
}

export function createGiveBackTripMoneyEvent(
  tripId: BigInt
): GiveBackTripMoney {
  let giveBackTripMoneyEvent = changetype<GiveBackTripMoney>(newMockEvent())

  giveBackTripMoneyEvent.parameters = new Array()

  giveBackTripMoneyEvent.parameters.push(
    new ethereum.EventParam("tripId", ethereum.Value.fromUnsignedBigInt(tripId))
  )

  return giveBackTripMoneyEvent
}

export function createNewAddTripMembersEvent(
  trip: BigInt,
  user: Address
): NewAddTripMembers {
  let newAddTripMembersEvent = changetype<NewAddTripMembers>(newMockEvent())

  newAddTripMembersEvent.parameters = new Array()

  newAddTripMembersEvent.parameters.push(
    new ethereum.EventParam("trip", ethereum.Value.fromUnsignedBigInt(trip))
  )
  newAddTripMembersEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return newAddTripMembersEvent
}

export function createNewFundTripEvent(
  trip: BigInt,
  amount: BigInt,
  user: Address
): NewFundTrip {
  let newFundTripEvent = changetype<NewFundTrip>(newMockEvent())

  newFundTripEvent.parameters = new Array()

  newFundTripEvent.parameters.push(
    new ethereum.EventParam("trip", ethereum.Value.fromUnsignedBigInt(trip))
  )
  newFundTripEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  newFundTripEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return newFundTripEvent
}

export function createNewTripEvent(
  tripId: BigInt,
  user: Address,
  tripName: string,
  totalNeeded: BigInt
): NewTrip {
  let newTripEvent = changetype<NewTrip>(newMockEvent())

  newTripEvent.parameters = new Array()

  newTripEvent.parameters.push(
    new ethereum.EventParam("tripId", ethereum.Value.fromUnsignedBigInt(tripId))
  )
  newTripEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  newTripEvent.parameters.push(
    new ethereum.EventParam("tripName", ethereum.Value.fromString(tripName))
  )
  newTripEvent.parameters.push(
    new ethereum.EventParam(
      "totalNeeded",
      ethereum.Value.fromUnsignedBigInt(totalNeeded)
    )
  )

  return newTripEvent
}

export function createNewWithdralRequestEvent(
  withdrawId: BigInt,
  trip: BigInt,
  amount: BigInt,
  user: Address,
  receipt: string
): NewWithdralRequest {
  let newWithdralRequestEvent = changetype<NewWithdralRequest>(newMockEvent())

  newWithdralRequestEvent.parameters = new Array()

  newWithdralRequestEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawId",
      ethereum.Value.fromUnsignedBigInt(withdrawId)
    )
  )
  newWithdralRequestEvent.parameters.push(
    new ethereum.EventParam("trip", ethereum.Value.fromUnsignedBigInt(trip))
  )
  newWithdralRequestEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  newWithdralRequestEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  newWithdralRequestEvent.parameters.push(
    new ethereum.EventParam("receipt", ethereum.Value.fromString(receipt))
  )

  return newWithdralRequestEvent
}

export function createNewWithdrawDoneEvent(
  withdrawId: BigInt,
  amount: BigInt,
  user: Address
): NewWithdrawDone {
  let newWithdrawDoneEvent = changetype<NewWithdrawDone>(newMockEvent())

  newWithdrawDoneEvent.parameters = new Array()

  newWithdrawDoneEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawId",
      ethereum.Value.fromUnsignedBigInt(withdrawId)
    )
  )
  newWithdrawDoneEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  newWithdrawDoneEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return newWithdrawDoneEvent
}

export function createUserApprovedWithdrawEvent(
  user: Address,
  withdrawId: BigInt
): UserApprovedWithdraw {
  let userApprovedWithdrawEvent = changetype<UserApprovedWithdraw>(
    newMockEvent()
  )

  userApprovedWithdrawEvent.parameters = new Array()

  userApprovedWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  userApprovedWithdrawEvent.parameters.push(
    new ethereum.EventParam(
      "withdrawId",
      ethereum.Value.fromUnsignedBigInt(withdrawId)
    )
  )

  return userApprovedWithdrawEvent
}
