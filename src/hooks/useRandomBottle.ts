import { fakeMessages as messages } from "../data/msg"

export function getRandomBottle() {
    const index = Math.floor(Math.random() * messages.length)
    return messages[index]
}