export function generateUserAvatarFallback(name: string | null | undefined) {
    if (!name) {
        return "TK";
    }
    const nameParts = name.trim().split(" ");
    if (nameParts.length === 1) {
        return nameParts[0].substring(0, 2).toUpperCase();
    }
    return nameParts[0].charAt(0).toUpperCase() + nameParts[1].charAt(0).toUpperCase();
}
