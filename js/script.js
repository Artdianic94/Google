let btn = document.getElementById("btn");
let search = document.getElementById("search")

let people = [];
people[0] = {
    name: 'Diana',
    age: 27
}
people[1] = {
    name: 'Alex',
    age: 27
}
people[2] = {
    name: 'Mary',
    age: 24
}
people[3] = {
    name: 'Lily',
    age: 61
}
let result

function superSum() {
    var c = parseInt(prompt("Введите число c:"))
    var d = parseInt(prompt("Введите число d:"))
    result = c + d;
    return result;
}

btn.addEventListener("click", () => {
        if (search.value === "google") {
            alert('Yandex круче. Но это не точно');
        } else if (search.value === '' || null) {
            alert(people[0].name)
        }
        //10
        else if (search.value === "google3") {
            setTimeout(() => {
                if (search.value === "google3") {
                    alert('Yandex круче. Но это не точно');
                }
            }, 3000);
        } else if (search.value === "result") {
            alert(superSum())
        } else { alert(search.value) }
    })
    //7
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
}
console.log(randomArray);

function findMin() {
    let min = randomArray[0];
    let minIndex = 0;
    for (let i in randomArray) {
        if (randomArray[i] < min) {
            min = randomArray[i];
            minIndex = i;
        }
    }
    console.log("Min value of randomArray is: " + randomArray[minIndex])
}
findMin()

function findMax() {
    let max = randomArray[0];
    let maxIndex = 0;
    for (let i in randomArray) {
        if (max < randomArray[i]) {
            max = randomArray[i];
            maxIndex = i;
        }
    }
    console.log("Max value of randomArray is: " + randomArray[maxIndex])
}
findMax()
    //8
let a = 100;
let b = 200;
console.log(a, b)
b = [a, a = b][0];
console.log("A=: " + a)
console.log("B=: " + b)
    //9
function findMaxNew() {
    var maxNumber = randomArray[0];
    for (var i = 1; i < randomArray.length; i++) {
        var currentNumber = randomArray[i];
        if (currentNumber > maxNumber) {
            maxNumber = currentNumber
        }
    }
    return maxNumber;
}
console.log("Max value of randomArray is: " + findMaxNew());