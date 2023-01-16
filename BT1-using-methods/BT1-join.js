let arr = ["One","Two","Three","Four","Five"];
let joined = "";
for (let i = 0; i < arr.length; i++) {
    joined += arr[i].toString();
    if (i !== arr.length-1) {
        joined += ",";
    }
}
document.write(joined);