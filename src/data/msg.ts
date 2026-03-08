import type { BottleMessage } from "../types/msg"

export const fakeMessages: BottleMessage[] = [
    {
        encrypted: false,
        data: {
            version: 1,
            content: `
# Message From The Ocean 🌊

If you are reading this,
the bottle found you.
`,
            createdAt: Date.now(),

            options: {
                sky: "sunset",
                bottleAnimation: "float",
                waveStrength: 0.8
            }
        }
    },
    {
        encrypted: true,
        data: {
            c: "ZHVtbXktZW5jcnlwdGVkLWNpcGhlcnRleHQ=",
            iv: "YWJjZGVmZ2hpamts",
            s: "c2FsdC1mb3ItZmFrZS1kYXRh"
        }
    }
]