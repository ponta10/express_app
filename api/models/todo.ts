import mongoose, { Document, Schema } from 'mongoose';

// ITodoをエクスポート
// DocumentはMongooseの基本的な型で、MongoDBドキュメントに対応します。
export interface ITodo extends Document {
    name: string;
    done: boolean;
}

// name, doneをrequiredに設定
const TodoSchema: Schema = new Schema({
    name: { type: String, required: true },
    done: { type: Boolean, required: true }
});

// これを複数形にしてmongoDBのコレクションを作成
// このメソッドが返す値（この場合、'Todo'モデル）は、作成したモデルを利用してデータベースの操作を行うために使用します。
export default mongoose.model<ITodo>('Todo', TodoSchema);

