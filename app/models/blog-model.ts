import mongoose from "mongoose";

// schema
const blogSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// exports
export default mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
