import { $ } from "bun";

const NUMBER_FROM = 11;
const NUMBER_TO = 19;

let table: number[] = [];

for (let i = NUMBER_FROM; i <= NUMBER_TO; i++) {
    for (let j = NUMBER_FROM; j <= NUMBER_TO; j++) {
        table.push(i * j);
    }    
}

let out: string[] = [];
let tmp: string = '';
table.forEach((x, i) => {
    
    tmp += x.toString().padStart(5, ' ');

    if ((i + 1) % 9 === 0) {
        out.push(tmp.trim());
        tmp = '';
    }

})

out.forEach((x) => console.log(x));
