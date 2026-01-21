import type { Config } from "../types/types.ts";

const conf: Config = {
    port: Number(process.env.PORT),
    mongoDBUri: process.env.MONGODB_URI,
    corsOrigin: process.env.CORS_ORIGIN,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    accessTokenExpiry: process.env.ACCESS_TOKEN_EXPIRY,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
    refreshTokenExpiry: process.env.REFRESH_TOKEN_EXPIRY,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
}

export default conf;