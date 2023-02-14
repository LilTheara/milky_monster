input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showNumber(180)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showNumber(0)
})
basic.showString("calibrate")
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P0, input.lightLevel())
    led.plotBarGraph(
    input.lightLevel(),
    0
    )
})
