input.onPinPressed(TouchPin.P0, function () {
	
})
input.onButtonPressed(Button.A, function () {
	
})
let steam = 0
dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P2)
dfplayer.setVolume(30)
OLED.clear()
OLED.init(128, 64)
serial.redirectToUSB()
basic.pause(1000)
basic.forever(function () {
    dfplayer.execute(
    dfplayer.playType.type1
    )
    steam = pins.analogReadPin(AnalogPin.P3)
    serial.writeValue("value", steam)
    OLED.drawRectangle(
    0,
    20,
    128,
    40
    )
    OLED.newLine()
    OLED.newLine()
    OLED.newLine()
    OLED.writeString("   Steam Level:")
    OLED.writeNum(steam)
    basic.pause(1500)
    OLED.clear()
    if (steam > 600) {
        dfplayer.MP3_setSerial(SerialPin.P1, SerialPin.P2)
        dfplayer.folderPlay(1, 2, dfplayer.yesOrNot.type2)
    }
})
