// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

// Function1
function destructivelyAppendCat(name) {
    cats.push(name);
}

// Function2
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

// Function3
function destructivelyRemoveLastCat() {
    cats.pop();
}

// Function4
function destructivelyRemoveFirstCat() {
    cats.shift();
}

// Function5
function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

// Function6
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

// Function7
function removeLastCat() {
    const newCats = cats.slice(0, 2);
    return newCats;
}

// Function8
function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}