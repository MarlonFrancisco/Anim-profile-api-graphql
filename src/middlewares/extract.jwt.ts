import { RequestHandler, Request, Response, NextFunction } from "express";

export const extractJwt = (): RequestHandler => {
    return (
        req: Request & { context: any },
        res: Response,
        next: NextFunction,
    ) => {
        if (!req.context) {
            req.context = {};
        }

        let token = req.get("authorization");

        if (!token) {
            return next();
        }

        const splitToken = token.split(" ");

        if (splitToken.length !== 2) {
            return next();
        }

        const typeAuth = splitToken[0];
        if (typeAuth !== "Bearer") {
            return next();
        }

        token = splitToken[1];
        req.context.token = token;
        next();
    };
};
