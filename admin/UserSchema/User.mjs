import mongoose, { Schema } from "mongoose";

const infoSchema = new Schema({
    name: { type: String,},
    lastName: { type: String, },
    town: { type: String,  }, // Corrected "towon" to "town"
    zipCode: { type: String, },
    email: { type: String, },
    phoneNumber: { type: String,},
    country: { type: String,  }, // Corrected "countery" to "country"
    address: { type: String,  }
});

const InfoModel = mongoose.model("Infos", infoSchema);

export default InfoModel;
