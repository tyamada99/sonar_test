let kyori = 0
led.enable(false)
serial.redirectToUSB()
basic.forever(function () {
    kyori = 0
    while (kyori == 0) {
        kyori = sonar.ping(
        DigitalPin.P4,
        DigitalPin.P5,
        PingUnit.Centimeters
        )
    }
    serial.writeValue("kyori", kyori)
    basic.pause(200)
})
