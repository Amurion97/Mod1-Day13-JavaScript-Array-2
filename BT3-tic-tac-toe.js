const N = 10;
const winRule = 3;
const arr = new Array(N);
for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(N);
}
let xTurn = true;

function reset() {
    let table = `<table>`;
    for (let i = 0; i < N; i++) {
        table += `<tr>`;
        for (let j = 0; j < N; j++) {
            table += `<td id="row-${i}-col-${j}" class="text-center">.</td>`
            arr[i][j] = 0;
        }
        table += `</tr>`;
    }
    table += `</table>`;
    document.getElementById("result").innerHTML = table;
    xTurn = true;
}

reset();
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("change").addEventListener("click", function () {
    let x = parseInt(prompt("row :"));
    let y = parseInt(prompt("column :"));
    let cell = document.getElementById(`row-${x}-col-${y}`);
    if (arr[x][y] !== 0) {
        alert("Position is currently " + ((arr[x][y] === 1) ? "x" : "o"));
    } else {
        if (xTurn) {
            arr[x][y] = 1;
            cell.innerHTML = "x";
        } else {
            arr[x][y] = 2;
            cell.innerHTML = "o";
        }
        xTurn = !xTurn;
        console.log(arr)
        console.log(x,y,check(x, y));
        if (check(x, y)) {
            alert(((arr[x][y] === 1) ? "x" : "o") + " wins!")
        }
    }

})

function check(i, j) {
    let max = arr.length;
    let count;
    //topLeft-middle-bottomEight
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        if ((i + k >= 0) && (j + k >= 0) && (i + k < max) && (j + k < max) && (i + k + 1 < max) && (j + k + 1 < max)) {
            if ((arr[i + k][j + k] === arr[i + k + 1][j + k + 1]) && (arr[i + k][j + k] > 0)) {
                count ++;
                // console.log(arr[i + k][j + k],":",arr[i + k + 1][j + k + 1])
                // console.log(count)
            } else {
                count = 0;
            }
            if (count === winRule-1){
                return true;
            }
        }
    }
    //top-middle-bottom
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        // console.log("k: ",k)
        if ((i + k >= 0) && (i + k < max) && (i + k + 1 < max)) {
            // console.log(arr[i + k][j],":",arr[i + k + 1][j])
            if ((arr[i + k][j] === arr[i + k + 1][j]) && (arr[i + k][j] > 0)) {
                count ++;
                // console.log()
                // console.log("count = ",count)
            } else {
                count = 0;
            }
            if (count === winRule-1){
                return true;
            }
        }
    }
    //topRight-middle-bottomLeft
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        // console.log("k: ",k)
        if ((i + k >= 0) && (j - k >= 0) && (i + k < max) && (j - k < max) && (i + k + 1 < max) && (j - k - 1 >= 0)) {
            // console.log(arr[i + k][j - k],":",arr[i + k + 1][j - k - 1])
            if ((arr[i + k][j - k] === arr[i + k + 1][j - k - 1]) && (arr[i + k][j - k] > 0)) {
                count ++;
                console.log()
                // console.log("count = ",count)
            } else {
                count = 0;
            }
            if (count === winRule-1){
                return true;
            }
        }
    }
    //right-middle-left
    count = 0;
    for (let k = 1 - winRule; k < winRule - 1; k++) {
        console.log("k: ",k)
        if ((j + k >= 0)&& (j + k < max) && (j + k + 1 < max)) {
            console.log(arr[i][j + k],":",arr[i][j + k + 1])
            if ((arr[i][j + k] === arr[i][j + k + 1]) && (arr[i][j + k] > 0)) {
                count ++;
                console.log()
                console.log("count = ",count)
            } else {
                count = 0;
            }
            if (count === winRule-1){
                return true;
            }
        }
    }
    // if ((i - 2 > 0) && (j - 2 > 0)) {
    //     if ((arr[i - 2][j - 2] === key) && (arr[i - 1][j - 1] === key)) {
    //         alert(true);
    //         return true;
    //     }
    // }
    // if ((i + 2 < arr.length) && (j + 2 < arr.length)) {
    //     if ((arr[i + 2][j + 2] === key) && (arr[i + 1][j + 1] === key)) {
    //         alert(true);
    //         return true;
    //     }
    // }
    // if ((i - 1 > 0) && (j - 1 > 0) && (i + 1 < arr.length) && (j + 1 < arr.length)) {
    //     if ((arr[i - 1][j - 1] === key) && (arr[i + 1][j + 1] === key)) {
    //         alert(true);
    //         return true;
    //     }
    // }
    return false;
}

// console.log(!isNaN(arr[-1][-1]));