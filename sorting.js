let arr = [50, 40, 30, 20, 10, 60, 80, 5];
let parentDiv = document.getElementsByClassName('parentdiv');
let btn = document.getElementsByClassName('startbtn');
let i = 0;

// Create and display bars
arr.forEach(e => {
    let innerDiv = document.createElement('div');
    innerDiv.style.height = (e * 6 + 'px');
    innerDiv.style.width = '20px';
    innerDiv.style.margin = '2px';
    innerDiv.style.backgroundColor = '#' + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0');
    innerDiv.setAttribute('id', 'elem' + i);
    i++;
    innerDiv.classList.add("innerDiv");
    parentDiv[0].appendChild(innerDiv);
});

// Add event listener for sorting
btn[0].addEventListener("click", () => myFunction(arr));

// Sleep function for animations
const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

// Sorting function
async function myFunction(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            await sleep(700);
            if (arr[j] > arr[j + 1]) {
                swapNumber(arr, j);
                // Swap colors and heights
                swapColorHeight(j);
            }
        }
    }
}

// Swap numbers in the array
function swapNumber(arr, j) {
    let temp = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = temp;
}

// Swap bar heights and colors
function swapColorHeight(j) {
    let a = 'elem' + j;
    let b = 'elem' + (j + 1);
    let el1 = document.getElementById(a);
    let el2 = document.getElementById(b);
    let bg1 = el1.style.backgroundColor;
    let bg2 = el2.style.backgroundColor;
    let h1 = el1.clientHeight;
    let h2 = el2.clientHeight;
    el1.style.backgroundColor = bg2;
    el2.style.backgroundColor = bg1;
    el1.style.height = h2 + "px";
    el2.style.height = h1 + "px";
}
