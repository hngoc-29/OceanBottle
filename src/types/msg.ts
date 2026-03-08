import type { EncryptedPayload } from "./encrypt"

// Sky theme
export type SkyType =
    | "day"
    | "sunset"
    | "night"
    | "storm"

// Bottle animation style
export type BottleAnimation =
    | "float"
    | "slow"
    | "drift"

// Visual options for rendering message
export interface MessageOptions {
    waveStrength?: number        // ocean wave strength
    sky?: SkyType                // sky theme
    bottleAnimation?: BottleAnimation
}

// Message data stored in bottle
export interface MessageData {
    version: number              // schema version
    content: string              // MDX content
    createdAt: number            // timestamp created
    expireAt?: number            // timestamp expire (optional)
    options?: MessageOptions     // visual options
}

export type BottleMessage =
    | {
        encrypted: false
        data: MessageData
    }
    | {
        encrypted: true
        data: EncryptedPayload
    }