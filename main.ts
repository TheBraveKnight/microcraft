input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Tortoise)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # . . .
        . # . . .
        . . # # .
        . # # . .
        # . . . .
        `)
})
