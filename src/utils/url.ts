export function getMessageParam(): string | null {
    const params = new URLSearchParams(window.location.search)
    return params.get("d") || null;
}