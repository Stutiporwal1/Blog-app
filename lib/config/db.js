import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect(' MongoDB Link')
    console.log("DB Connected");
}
