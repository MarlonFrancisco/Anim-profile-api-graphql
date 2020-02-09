import { JsonWebTokenError, verify, sign } from "jsonwebtoken";

/**
 * Interface payload for token
 *
 * @export
 * @interface IPayload
 */
export interface IPayload {
    sub: string | number;
    exp: number;
}

export class Jwt {
    /**
     * Get secret key
     *
     * @static
     * @param {boolean} [convertBase64]
     * @returns {string}
     * @memberof Jwt
     */
    public static getSecret(convertBase64?: boolean): string {
        return convertBase64
            ? Buffer.from(process.env.SECRET).toString("base64")
            : process.env.SECRET;
    }

    /**
     * Verify authenticity of token
     *
     * @static
     * @param {string} token
     * @param {(decoded: any, err: JsonWebTokenError) => void} callback
     * @memberof Jwt
     */
    public static verify(
        token: string,
        callback: (err: JsonWebTokenError, decoded: any) => void,
    ): void {
        verify(token, this.getSecret(true), callback);
    }

    /**
     * Create token
     *
     * @static
     * @param {*} payload
     * @returns {string}
     * @memberof Jwt
     */
    public static create(payload: IPayload): string {
        return sign({ sub: payload.sub }, this.getSecret(true), {
            expiresIn: payload.exp
        });
    }
}
