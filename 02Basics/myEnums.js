var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 10] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 11] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 12] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 22] = "FOURTH";
    SeatChoice[SeatChoice["FIVTH"] = 23] = "FIVTH"; // this will be now 23.
})(SeatChoice || (SeatChoice = {}));
var vikasSeat = SeatChoice.WINDOW;
var vikasPayment = "cash" /* PaymentMethod.CASH */;
