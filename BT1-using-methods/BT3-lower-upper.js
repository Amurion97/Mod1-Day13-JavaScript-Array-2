let input = prompt("Nhap vao mot chuoi ki tu!").toString();
const arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(input[i]);
}
for (let i = 0; i < arr.length; i++) {
    arr[i] = (arr[i].toLowerCase() === arr[i])? arr[i].toUpperCase() : arr[i].toLowerCase();
    console.log(arr[i]);
}
alert(arr.join(""))