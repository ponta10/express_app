import express, { Express } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

require('dotenv').config();

// Expressフレームワークのインスタンスを作成しています。これがサーバーアプリケーションの中心となります。
const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

// これにより、クロスオリジンリソース共有（CORS）が有効になり、異なるオリジン（ドメイン、プロトコル、またはポート）からのリクエストをサーバーが受け付けるようになります。
app.use(cors());

// これにより、サーバーはJSON形式のHTTPリクエストボディを自動的に解析できるようになります。
app.use(express.json());

// このモジュールは、特定のパス（この場合はおそらくtodoに関連するパス）に対するリクエストをどのように処理するかを定義します。
app.use(todoRoutes);

const uri: string = `mongodb+srv://ponta:${process.env.MONGO_PASSWORD}@cluster0.tbbrjsp.mongodb.net/todo_db?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((error) => {
    throw error;
  });
