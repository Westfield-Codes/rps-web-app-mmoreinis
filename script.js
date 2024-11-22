

function getRounds(){
    let rounds = document.getElementById("rounds").value;
    setRounds(rounds);
}

function setRounds(rounds){
    if (rounds % 2 === 0) {
        alert("must be odd");
    }
}
