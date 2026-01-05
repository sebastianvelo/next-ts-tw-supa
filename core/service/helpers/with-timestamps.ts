const WithTimestamps = <T>(data: T): T & { createdAt: number, updatedAt: number } => ({
    ...data,
    createdAt: Date.now(),
    updatedAt: Date.now(),
});

export default WithTimestamps;