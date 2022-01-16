let count=0
let records="Previous Counts: | "

function increment(){
    count = count+1
    document.getElementById("count-text").textContent = count
}

function save() {
    records += count+" | "
    document.getElementById("save-text").textContent = records
    count = 0
    document.getElementById("count-text").textContent = count
}