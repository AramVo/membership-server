
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class User {
    id: number;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    attendances?: Nullable<Nullable<Attendance>[]>;
}

export class Attendance {
    from?: Nullable<string>;
    to?: Nullable<string>;
}

export abstract class IQuery {
    abstract user(id: number): Nullable<User> | Promise<Nullable<User>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;
}

type Nullable<T> = T | null;
