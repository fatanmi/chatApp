let userId: number = 5;

let userName: string = "John Doe";
userName = "Jane Smith";

let ids: number[] = [1, 2, 3, 4, 5];

let arr: Array<number> = [1, 2, 3, 4, 5];

let person: { id: number; name: string } = {
  id: 1,name: "John Doe"
};

let employee: [number, string[]][] = [[1, ["John Doe"]]];

//enum
enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",

    Intern = "Intern"
}
console.log(`User ID is: ${userId}`);

console.log(`Role is: ${Role.GUEST}`);

console.log(`Role is: ${Role.Intern}`);


//Obkec
