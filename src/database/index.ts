import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/grap", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const connection = mongoose.connection;

connection.on("error", (err) => console.log(`Mongo connection error: ${err}`));
connection.on("open", () => console.log(`Connection successed`));

export default mongoose;
