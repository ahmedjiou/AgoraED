// To implement the carrousel feature, i thought it is simpler to do it with a double linkedList :) 
// This could have been done more efficiently if we wanted to add and substract elements etc....
// But for simplicity's sake and supposing we will only have up to maybe 4 or 5 elements, i didnt really push it

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}




const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

const testimo1 = document.getElementById('testimonial1');
const testimo2 = document.getElementById('testimonial2');

const item1 = new ListNode(testimo1);
const item2 = new ListNode(testimo2);

// First connections
item1.next = item2;
item2.next = item1;

// Second connections
item1.previous = item2;
item2.previous = item1;

var currentItem = item1;

leftArrow.addEventListener("click", function() {
        // We will hide the current item
        // show the previous item
        // set the currentItem to the previous item, which actually became the current one 

        currentItem.data.style.display = 'none';
        currentItem.previous.data.style.display = 'block';
        currentItem = currentItem.previous;
});


rightArrow.addEventListener("click", function() {
    // We will hide the current item
    // show the next item
    // set the currentItem to the next item, which actually became the current one 

    currentItem.data.style.display = 'none';
    currentItem.next.data.style.display = 'block';
    currentItem = currentItem.next;
});