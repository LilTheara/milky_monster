let go = 0
/**
 * Mâchoire
 */
input.onSound(DetectedSound.Loud, function () {
    go = 1
})
input.onSound(DetectedSound.Quiet, function () {
    go = 0
})
basic.forever(function () {
    if (go == 1) {
        servos.P0.setAngle(0)
        basic.pause(800)
        servos.P0.setAngle(100)
        basic.pause(800)
    }
})
