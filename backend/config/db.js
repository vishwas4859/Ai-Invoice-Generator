import mongoose from 'mongoose';
export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://wwwvishwaschaurasia_db_user:Vi$hu1234@cluster0.taobrvr.mongodb.net/Invoice")
    .then(() => { console.log("DB Connected") })
    
}