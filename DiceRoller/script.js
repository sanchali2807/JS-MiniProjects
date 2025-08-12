function rollDice(){
    const numofDice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceResult");
    const diceimages = document.getElementById("diceimages");
    const value = [];
    const images = [];

    for(let i = 0 ; i < numofDice ;i++){
        const val = Math.floor(Math.random() * 6)+1;
        // console.log(val);
        value.push(val);
        images.push(`<img src="dice_images/${val}.png" alt="Dice ${val}">`)
// alt is for when our image cna not show so it will display an alternative text
        
    }
    diceresult.textContent = `dice: ${value.join(', ')}`;
    diceimages.innerHTML = images.join('');

}