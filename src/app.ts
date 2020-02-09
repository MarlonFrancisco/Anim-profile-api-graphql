import express, { Request, Response, NextFunction } from "express";
import graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";
import Context from "./repository/context";
import "dotenv/config";
import { extractJwt } from "./middlewares/extract.jwt";

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
            extractJwt(),
            (req: Request & { context: any }, res: Response, next: NextFunction) => {
                req.context.User = Context.User;
                next();
            },
            graphqlHTTP((req: Request & {context: any} ) => ({
                schema,
                graphiql: process.env.NODE_ENV === "development",
                context: req.context
            })),
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
