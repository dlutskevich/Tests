let user = {
  name: "John",
  age: 30,
  "natural": true
};


let key = prompt("Что вы хотите узнать о пользователе?", "name or age or natural");

if (key === "name") {
  alert(user[key])
}
if (key === "age") {
  alert(user[key])
}
if (key === "natural") {
  alert(user[key])
}
else {
  alert("nu i nahuq ti eto napisal?")
}