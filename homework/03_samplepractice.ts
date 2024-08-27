let hello: string = "hello";
let tripleSeven: number =777;
let arr1: number[]=[10,20,30,40,50]

let person:{name:string; age: number} ={name : "string", age: 24}

//타입스크립트는 자바스크립트와 마찬가지로 기명함수와 익명함수로 만들수있음
//이를 통해 api에서 함수 목록을 작성하든 일회성 함수를 써서 다른 함수로 전달하든
//애플리케이션에 적합한 방법을 선택할수있음

function add(x: number, y:number): number{
    return x + y;
}

function buildName(firstName : string, lastName?: string){
    if(lastName)
        return firstName + " "
    else
        return firstName;
}

let result1 = buildName("Bob")
let result2 = buildName("bob","Adams");