const pathOf = (...segments: string[]) =>
    (segments[0].startsWith("/")) ? segments.join("/") : "/" + segments.filter(Boolean).join("/");

export default pathOf;