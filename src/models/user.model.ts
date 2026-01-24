import mongoose, { Document, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import jwt, { type Secret } from 'jsonwebtoken'
import conf from '../conf/conf';

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    avatar: string;
    avatarPublicId?: string;
    coverImage?: string;
    coverImagePublicId?: string;
    watchHistory: mongoose.Types.ObjectId[];
    password: string;
    refreshToken?: string;
    createdAt: Date;
    updatedAt: Date;
    isPasswordCorrect(password: string): Promise<boolean>;
    generateAccessToken(): string;
    generateRefreshToken(): string;
}

const userSchema = new Schema<IUser>(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },
        avatar: {
            type: String,
            required: true,
        },
        avatarPublicId: {
            type: String,
        },
        coverImage: {
            type: String
        },
        coverImagePublicId: {
            type: String
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Video'
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre<IUser>('save', async function () {
    if (!this.isModified('password')) return;

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (this: IUser, password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function (this: IUser): string {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            firstName: this.firstName,
            lastName: this.lastName
        },
        conf.accessTokenSecret as Secret,
        {
            expiresIn: conf.accessTokenExpiry as any
        }
    )
}

userSchema.methods.generateRefreshToken = function (this: IUser): string {
    return jwt.sign(
        {
            _id: this._id,
        },
        conf.refreshTokenSecret as Secret,
        {
            expiresIn: conf.refreshTokenExpiry as any
        }
    )
}

export const User = mongoose.model<IUser>('User', userSchema);
