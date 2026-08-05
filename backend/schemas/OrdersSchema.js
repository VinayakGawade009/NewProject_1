import { Schema } from "mongoose";

const OrdersSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: [1, "Quantity must be at least 1"]
    },
    price: {
        type: Number,
        required: true
    },
    mode: {
        type: String,
        enum: ['BUY', 'SELL'], // STRICTLY restricts to these two values
        uppercase: true, // Automatically converts "buy" -> "BUY"
        required: true
    },
    product: {
        type: String,
        enum: ['CNC', 'MIS'], // CNC = Holdings, MIS = Positions
        required: true, 
        uppercase: true,
        default: 'CNC' // Default to Holdings if not specified
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: true });

export { OrdersSchema };