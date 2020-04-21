import Link from 'next/link';

export const diceRoll = (numberOfDice, diceType) => {
    let rolls = [];
    let rollsSum = 0;
    for(let die=0; die < numberOfDice; i++){
        rolls[i] = Math.floor(Math.random() * diceType) + 1;
        rollsSum += rolls[i];
    }    
};

const roll = props => (
    <div>
        <p>Roll!</p>
    </div>
)
export default roll;