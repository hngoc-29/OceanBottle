import { getMessageParam } from "./url";

export function checkParams(): boolean {
    const params = getMessageParam();
    if (!params) return false

    return true
}