import express, { Request, Response, NextFunction } from "express";
import graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";
import Context from "./repository/context";
import "dotenv/config";

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.configs();
        this.middlewares();
    }

    private middlewares(): void {
        this.app.use(
            "/graphql",
            (req: Request & { context: any }, res: Response, next: NextFunction) => {
                req.context = Context;
                next();
            },
            graphqlHTTP({
                schema,
                graphiql: process.env.NODE_ENV === "development",
                context: Context
            }),
        );
    }

    private configs(): void {
        this.app.listen(process.env.PORT, () => {
            console.log(`MODE ENV: ${process.env.NODE_ENV}`);
            console.log(`PORT: ${process.env.PORT}`);
        });
    }
}

export default new App().app;
