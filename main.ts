input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
    basic.showNumber(180)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("D D F - D D F - ", 130)
    music.playMelody("D D F - D D F - ", 200)
    music.playMelody("D D F - D D F - ", 250)
    music.playMelody("D D F - D D F - ", 315)
    for (let index = 0; index < 3; index++) {
        music.playMelody("D D F - D D F - ", 400)
    }
    music.playMelody("F E G G G - - - ", 400)
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
