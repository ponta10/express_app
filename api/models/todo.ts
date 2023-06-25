import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true }
}, {
  timestamps: true
});

export default mongoose.model<ITodo>('Todo', TodoSchema);