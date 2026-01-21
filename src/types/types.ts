export interface Config {
    port: number | undefined,
    mongoDBUri: string | undefined,
    corsOrigin: string | undefined,
    accessTokenSecret: string | undefined,
    accessTokenExpiry: string | undefined,
    refreshTokenSecret: string | undefined,
    refreshTokenExpiry: string | undefined,
    cloudinaryCloudName: string | undefined,
    cloudinaryApiKey: string | undefined,
    cloudinaryApiSecret: string | undefined
}