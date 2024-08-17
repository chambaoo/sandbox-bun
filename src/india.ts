interface MultiplyType {
    a: number;
    b: number;
    multiply(): number;
}

class Multiply implements MultiplyType {
    
    a: number;
    b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    multiply(): number {
        return this.a * this.b;
    }

}

class IndiaMultiply extends Multiply {
    constructor(a: number, b: number){
        if (a < 10 || a > 19) throw new Error();
        if (b < 10 || b > 19) throw new Error();        
        super(a, b);
    }
    indiaMultiply(): number {
        const ax: number = Number(this.a.toString().charAt(0));
        const ai: number = Number(this.a.toString().charAt(1));
        console.log(ax + ',' + ai);
        
        const bx: number = Number(this.b.toString().charAt(0));
        const bi: number = Number(this.b.toString().charAt(1));
        console.log(bx + ',' + bi);

        // 17×14=(17+4)×10+7×4=210+28=238

        // step 1. (a + bi) * 10の位の数
        const step1 = (this.a + bi) * ax * 10;
        console.log('step1', step1);

        // step 2. ai * bi
        const step2 = ai * bi;
        console.log('step2', step2);

        // step3. (step1 + step2)
        const step3 = step1 + step2;
        console.log('step3', step3);
        
        return step3;
    }
}


const test1 = new Multiply(11, 15);

console.log(test1.multiply());


const test2 = new IndiaMultiply(19, 12);
console.log(test2.multiply());
console.log(test2.indiaMultiply());


