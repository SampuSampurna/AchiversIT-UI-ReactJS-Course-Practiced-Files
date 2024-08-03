import { name, age } from './file1-export-modules.js';

export function nameOnly() {
    return name; // Return the name instead of console.log
}

export function nameAndAge() {
    return `${name} ${age}`; // Return name and age as a string
}
