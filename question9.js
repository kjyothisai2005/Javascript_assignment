// question 9
let cnt = 0;
const display = document.getElementById("count");
document.getElementById("increment").addEventListener("click", () => {
  cnt++;
  display.textContent = cnt;
});
document.getElementById("decrement").addEventListener("click", () => {
  if (cnt > 0) {
    cnt--;
    display.textContent = count;
  }
});