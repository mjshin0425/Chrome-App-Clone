/////////////// 배열(Array): 데이터에 접근 하기 위해 필요

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon, tue, wed, thu, fri, sat, sun]; //배열: 데이터로 이루어진 것, 위에 mon,tue 등을 "mon", "tue"로 문자열로 지정해주었기 때문에 배열을 쓸 수 있음

const nonsense = [1, 2, "hello", false, null, true, undefined];

console.log(daysOfWeek, nonsense); // number, string, boolean, null, undefined 넣을 수 있음

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"]; // 문자열은 따옴표 넣어줘야 함

// 배열에서 아이템 가져오기
console.log(daysOfWeek[4]); // fri

//배열에 아이템 추가
daysOfWeek.push("sun");
console.log(daysOfWeek); //mon~sun
