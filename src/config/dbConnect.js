import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ti:1234@assistencia.rxixirm.mongodb.net/AssistenciaTI");

let db = mongoose.connection;

export default db;