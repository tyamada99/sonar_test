input.onButtonPressed(Button.B, function () {
    ichi += 1
    if (ichi >= 3) {
        ichi = 0
    }
    serial.writeValue("ichi", ichi)
})
let kyori = 0
let ichi = 0
led.enable(false)
serial.redirectToUSB()
ichi = 0
basic.forever(function () {
    kyori = 0
    if (ichi == 0) {
        while (kyori == 0) {
            kyori = sonar.ping(
            DigitalPin.P0,
            DigitalPin.P1,
            PingUnit.Centimeters
            )
        }
        serial.writeValue("kyori center", kyori)
    } else if (ichi == 1) {
        while (kyori == 0) {
            kyori = sonar.ping(
            DigitalPin.P2,
            DigitalPin.P3,
            PingUnit.Centimeters
            )
        }
        serial.writeValue("kyori migi", kyori)
    } else {
        while (kyori == 0) {
            kyori = sonar.ping(
            DigitalPin.P4,
            DigitalPin.P5,
            PingUnit.Centimeters
            )
        }
        serial.writeValue("kyori hidari", kyori)
    }
    basic.pause(200)
})
