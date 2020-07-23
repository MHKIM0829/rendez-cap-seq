using { seq.db as seq } from '../db/schema.cds';

service seqService @(path:'/seq') {
    entity IFLT0001 as projection on seq.IFLT0001;
}