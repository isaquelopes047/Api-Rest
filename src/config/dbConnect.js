import mongoose from "mongoose";

mongoose.connect(process.env.DATABASE_URL || "mongodb+srv://ti:1234@assistencia.rxixirm.mongodb.net/manutencaoParelhos");

let db = mongoose.connection;

export default db;