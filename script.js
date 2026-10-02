

let names = +prompt("Birinchi sonni kiriting")

let age = +prompt("Sonning darajasini kiriting")
names * age

for (let i = names; i <= age; i++) {
    names = names * i * i
    console.log(names);
}
while (isNaN(names)) {
    names = +prompt("Birinchi sonni boshidan kiriting")
}
while (isNaN(age)) {
    age = +prompt("Sonning darajasini boshidan kiriting")
}
