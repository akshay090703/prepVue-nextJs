/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://prepvue_owner:fFmUd84cAeXW@ep-proud-tooth-a5kpyemg.us-east-2.aws.neon.tech/prepvue?sslmode=require",
  },
};
