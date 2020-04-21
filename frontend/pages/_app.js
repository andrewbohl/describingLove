import App, {Container} from 'next/app';
import Page from '../components/Page';
import diceRoll from './roll';

class MyApp extends App {
    state = {
        numberOfDice:0,
        diceType:null,
        rolls:[],
        rollSum:0
    };
    diceRoll = (numberOfDice, diceType) => {
        let rolls = [];
        let rollSum = 0;
        for(let die=0; die < numberOfDice; i++){
            rolls[i] = Math.floor(Math.random() * diceType) + 1;
            rollSum += rolls[i];
        }    
        this.setState({
            numberOfDice,
            rolls,
            rollSum
        });
    };
    render() {
        const { Component } = this.props;
        return  (
            <Page>
                <Component />
                <div className="buttons">
                    {['d4', 'd6', 'd8', 'd10', 'd12', 'd20'].map(text => {
                        let number = text.slice(1) == 1 ? "die" : "dice";
                        return (
                        <button
                            key={text}
                            onClick={() => this.diceRoll(number)}
                            className="button"
                        >
                            {text}
                        </button>
                        );
                    })}
                </div>
            </Page>
        )
    }
}
export default MyApp;