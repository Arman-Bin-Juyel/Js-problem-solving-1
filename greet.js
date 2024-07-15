// step-1
function greet (name, greeting = 'Hello'){
    return `${greeting},${name}`;
}
console.log(greet("Alice!"))

// step-2

function greet (name, greeting = 'Hello'){
    return `${name},${greeting}`;
}
console.log(`"Bob","Good morning"`)

