export interface Config {
    port: number,
    mongoDBUri: string,
    corsOrigin: string,
    accessTokenSecret: string,
    accessTokenExpiry: string,
    refreshTokenSecret: string,
    refreshTokenExpiry: string,
    cloudinaryCloudName: string,
    cloudinaryApiKey: string,
    cloudinaryApiSecret: string,
}