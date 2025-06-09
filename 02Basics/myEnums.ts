 
enum SeatChoice {
    AISLE = 10 ,    //bydefault value is 0 but when i define AISLE = 10 
    MIDDLE,    // first it was MIDDLE = 1 bydefault but now it is 11
    WINDOW,    // and this one is 12.
    FOURTH = 22,
    FIVTH   // this will be now 23.
}

const enum PaymentMethod {
    UPI = "upi",
    CASH = "cash",
    CARD = "card",
    NETBANKING = "netbanking",
    PAYPAL = "paypal",
    Discount49 = 49, // 49% off
    Discount50,  // 50% off
}

const vikasSeat = SeatChoice.WINDOW;


const vikasPayment = PaymentMethod.CASH;