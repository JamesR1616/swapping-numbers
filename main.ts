let number_1 = 0
let number_2 = 0
input.onButtonPressed(Button.A, function () {
    number_1 += 1
    basic.showNumber(number_1)
})
input.onGesture(Gesture.TiltLeft, function () {
    number_1 += -1
    basic.showNumber(number_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(number_1)
    basic.showNumber(number_2)
})
input.onButtonPressed(Button.B, function () {
    number_2 += 1
    basic.showNumber(number_2)
})
input.onGesture(Gesture.Shake, function () {
    number_1 = 0
    number_2 = 0
})
input.onGesture(Gesture.TiltRight, function () {
    number_2 += -1
    basic.showNumber(number_2)
})
basic.forever(function () {
	
})
