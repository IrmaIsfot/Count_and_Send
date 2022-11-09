radio.onReceivedNumber(function (receivedNumber) {
    siffra = receivedNumber
    basic.showNumber(siffra)
})
input.onButtonPressed(Button.A, function () {
    if (siffra < 4) {
        siffra = siffra + 1
    } else {
        siffra = 1
    }
    basic.showNumber(siffra)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(siffra)
})
let siffra = 0
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
siffra = 0
basic.forever(function () {
	
})
