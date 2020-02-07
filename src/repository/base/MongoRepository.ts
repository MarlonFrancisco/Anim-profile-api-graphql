export abstract class MongoRepository<T, E> {
    protected abstract save(entity: T | E): Promise<T>;
    protected abstract findById(id: string): Promise<T>;
    protected abstract findAll(): Promise<T[]>;
    protected abstract delete(id: string): Promise<T>;
}