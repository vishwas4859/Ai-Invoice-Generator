import mongoose from "mongoose";

const businessProfileSchema = new mongoose.Schema({
    owner:{type: String, required: true, index: true},//it is clerk id
    businessName: { type: String, required: true },
    email: { type: String, reuquired: false , trim : true,default: ""},
    address:{type: String, required: false, trim : true, default: ""},
    phone:{type: String, required: false, trim : true, default: ""},
    gst:{type: String, required: false, trim : true, default: ""},
    //for images
    logoUrl:{type: String, required: false, trim : true, default: nulll},
    stampUrl:{type: String, required: false, trim : true, default: null},
    signatureUrl:{type: String, required: false, trim : true, default: null},

    signatureOwnerName:{type: String, required: false, trim : true, default: ""},
    signatureOwnerTitle:{type: String, required: false, trim : true, default: ""},
    signatureTaxPercentage:{type: Number, required: false, default: 18},
},{
    timestamps: true
});
const BusinessProfile= mongoose.models.BusinessProfile || mongoose.model('BusinessProfile', businessProfileSchema);

export default BusinessProfile;