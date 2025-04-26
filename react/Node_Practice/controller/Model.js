import mangoose from "mangoose"
import { Schema } from "mongoose"
const productschema= new Schema({
    productName:"String",
    productcat:"String",
    productPrice:"Number",
    productdis:"String"
})

const newModel= mangoose.model("CreateModel",productschema,"Sakthidb")
export default newModel