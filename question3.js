//question-3
let list = document.querySelectorAll('#mylist li');
for (let i=0;i<list.length;i++){
    console.log('Item'+(i+1)+':'+list[i].textContent);
    if(i%2!=0)
        list[i].classList.add('highlight');
}
console.log(list);
console.log(`Total list items:${list.length}`);