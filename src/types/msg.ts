export type SkyType =
    | "day"
    | "sunset"
    | "night"
    | "storm"

export type BottleAnim =
    | "float"
    | "slow"
    | "drift"

export type MessageOptions = {
    w?: number        // wave strength
    s?: SkyType       // sky theme
    a?: BottleAnim    // bottle animation
}

export type MessageData = {
    v: number        // version
    c: string        // MDX content
    t: number        // created timestamp
    e?: number | 0   // expire timestamp
    o?: MessageOptions
}