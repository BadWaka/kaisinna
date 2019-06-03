interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};

tom.id = 123214;