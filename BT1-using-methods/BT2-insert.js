let input = prompt("Nhap mot so bat ki").toString();
const arr = [];
for (let i = 0; i < input.length; i++) {
    arr.push(input[i]);
}
console.log(arr);
for (let i = 0; i < 10; i++) {
    if ((parseInt(arr[i]) % 2 === 0) && (parseInt(arr[i+1]) % 2 === 0)){
        arr.splice(i+1,0,"-");
    }   
}
console.log(arr);
document.write(arr.join(""))