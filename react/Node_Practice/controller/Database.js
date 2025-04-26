import mangoose from "mangoose"
import mongoose from "mongoose"
const db= (URL)=>{
try {
    mongoose.connect(URL)
const DataBase=mangoose.Connection
DataBase.once("open",()=>{
    console.log("Db is connected");
    
})

} catch (error) {
    console.log(error);
    
}

}