let ARTAN_DEĞİŞKEN = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    ARTAN_DEĞİŞKEN += 1
    radio.sendString("" + (ARTAN_DEĞİŞKEN))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    ARTAN_DEĞİŞKEN = ARTAN_DEĞİŞKEN - 1
    radio.sendString("" + (ARTAN_DEĞİŞKEN))
})
