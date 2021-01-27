const fill = document.querySelector('.fill')

const empties = document.querySelectorAll('.empty')


// Fill Listeners
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// Loop through empties and call drag events
for(const empty of empties){ // for of
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// Drag functions
function dragStart(){
    this.className += ' hold';
    setTimeout(()=>this.className = 'invisible', 0) // 이 function이 모두 실행되고 마지막에 실행된다.
    
}

function dragEnd(){
    this.className = 'fill'
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered'
}

function dragLeave(){
    this.className = 'empty'
}

function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}
