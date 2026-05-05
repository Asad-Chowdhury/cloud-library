import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { nextCookies } from "better-auth/next-js";

const uri = process.env.MONGODB_URI || process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGODB_URI or MONGO_URI is required for BetterAuth.");
}

const globalForMongo = globalThis;

const client =
  globalForMongo.__cloudLibraryMongoClient ?? new MongoClient(uri);

if (!globalForMongo.__cloudLibraryMongoClient) {
  globalForMongo.__cloudLibraryMongoClient = client;
}

const db = client.db(process.env.MONGODB_DB || "cloud-library-users");

const getOrigin = (url) => {
  try {
    return url ? new URL(url).origin : null;
  } catch {
    return null;
  }
};

const trustedOrigins = [
  getOrigin(process.env.BETTER_AUTH_URL),
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
  ...(process.env.BETTER_AUTH_TRUSTED_ORIGINS || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
].filter(Boolean);

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  trustedOrigins,
  database: mongodbAdapter(db, {
    client,
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
  plugins: [nextCookies()],
});
