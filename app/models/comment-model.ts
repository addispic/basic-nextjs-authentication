import mongoose from "mongoose";

// comment schema
const commentSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    text: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

// exports
export default mongoose.models.Comments ||
  mongoose.model("Comments", commentSchema);
