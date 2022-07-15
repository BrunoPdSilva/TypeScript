// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays
let ninjas: string[] = [];

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("hello");
mixed.push(24);
mixed.push(true);

let uid: string | number;

// objects
let ninjaOne: object;
ninjaOne = { name: "Yoshi", age: 30 };

let ninjaTwo: { name: string; age: number; beltColour: string };
