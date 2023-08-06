const arrYears = [
    2018,
    2020,
    2021,
    2023
];

arrYears.push(2024);

arrYears.unshift(2017);

arrYears.pop();

arrYears.shift();

arrYears.splice(1, 1, 2019, 2020);

arrYears.splice(4, 0, 2022);

console.log(arrYears);

const str = arrYears.join();

console.log(str);
