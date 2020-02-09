export abstract class MongoRepository<T, E> {
    protected abstract save(entity: T | E): Promise<T>;
    protected abstract findById(id: string, fields: string[]): Promise<T>;
    protected abstract findAll(fields: string[]): Promise<T[]>;
    protected abstract delete(id: string, fields: string[]): Promise<T>;
}