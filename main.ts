basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
let lluminositat = 39
led.setBrightness(lluminositat)
serial.writeLine("749494")
basic.forever(function () {
    if (true) {
        lluminositat += -1
        led.setBrightness(lluminositat)
        basic.pause(100)
        serial.writeLine("" + (lluminositat))
    }
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        lluminositat += 1
        led.setBrightness(lluminositat)
        basic.pause(100)
        serial.writeLine("")
    }
})
