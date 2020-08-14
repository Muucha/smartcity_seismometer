input.onGesture(Gesture.Shake, function () {
    count += 1
    radio.sendValue("shake", count)
    music.playTone(523, music.beat(BeatFraction.Eighth))
})
let count = 0
radio.setGroup(1)
count = 0
radio.sendValue("shake", count)
basic.forever(function () {
    led.plotBarGraph(
    count,
    25
    )
    if (count == 25) {
        for (let index = 0; index < 4; index++) {
            music.playMelody("F G A - G A B C5 ", 520)
        }
    }
})
