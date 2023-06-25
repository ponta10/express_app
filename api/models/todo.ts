import mongoose, { Document, Schema } from 'mongoose';

// ITodoをエクスポート
export interface ITodo extends Document {
    name: string;
    done: boolean;
}

const TodoSchema: Schema = new Schema({
    name: { type: String, required: true },
    done: { type: Boolean, required: true }
});

export default mongoose.model<ITodo>('Todo', TodoSchema);

