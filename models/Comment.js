import monggose, { Mongoose } from "mongoose"

const CommentSchema = new Mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

const model = mongoose.model("Comment", CommentSchema)
export default model
