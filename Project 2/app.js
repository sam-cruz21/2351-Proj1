let data = [
    {
        name: "Samantha",
        age: "21"
    },
    {
        name: "Fernando",
        age: "20"
    },   
    {
        name: "Candy",
        age: "20"
    },   
    {
        name: "Isme",
        age: "21"
    },   
    {
        name: "Zee",
        age: "20"
    },   
    {
        name: "Felipe",
        age: "21"
    },
    
];

const info = document.querySelector("#info")

let details  = data.map(function (item) {
return "<div>" + item.name + " " + "is " + item.age + " years old" + "</div>";
});

info.innerHTML = details.join("\n");