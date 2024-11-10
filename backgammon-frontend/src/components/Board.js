// src/components/Board.js
import React, {useState} from "react";
import Point from "./Point";
import './styling/Board.css';

const init_points = [
    { id: 1, color:"green",checkers: [{ color: "red" }, { color: "red" },{ color: "red" },{ color: "red" },{ color: "red" }] },
    { id: 2, checkers: [] },
    { id: 3,color:"green", checkers: [] },
    { id: 4, checkers: [] },
    { id: 5,color:"green", checkers: [{ color: "black" }, { color: "black" }, { color: "black" }] },
    { id: 6, checkers: [] },
    { id: 7,color:"green", checkers: [{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }] },
    { id: 8, checkers: [] },
    { id: 9,color:"green", checkers: [] },
    { id: 10, checkers: [] },
    { id: 11,color:"green", checkers: [] },
    { id: 12, checkers: [{ color: "red" }, { color: "red" }] },
    { id: 13, checkers: [{ color: "black" }, { color: "black" },{ color: "black" },{ color: "black" },{ color: "black" }] },
    { id: 14,color:"green", checkers: [] },
    { id: 15, checkers: [] },
    { id: 16,color:"green", checkers: [] },
    { id: 17, checkers: [{ color: "red" }, { color: "red" }, { color: "red" }] },
    { id: 18,color:"green", checkers: [] },
    { id: 19, checkers: [{ color: "red" }, { color: "red" }, { color: "red" }, { color: "red" }, { color: "red" }] },
    { id: 20,color:"green", checkers: [] },
    { id: 21, checkers: [] },
    { id: 22,color:"green", checkers: [] },
    { id: 23, checkers: [] },
    { id: 24,color:"green", checkers: [{ color: "black" }, { color: "black" }] },

    // Repeat for all 24 points
  ];

const Board = () => {
    const [Dice, setDice] = useState(0);
    const [Turn,setTurn] = useState("black")
    const [Points,setPoints] = useState(init_points);
    const [SelectedChecker,setSelectedChecker] = useState(null);
    function generateHalf(start,end) {
        return (
            <div className={"half"}>
                {Points.slice(start, end).map((point, index) => (
                    <Point onClick={() => moveChecker(point.id)} onCheckerClick={setSelectedChecker} id={point.id} key={index} color={point.color} checkers={point.checkers}/>
                ))}
            </div>
        )
}
    function moveChecker(target){
        const temp = Points.map((x) => x)
        if(Dice > 0 && SelectedChecker && target && (SelectedChecker + Dice === target) && Points[SelectedChecker-1].checkers[0].color === Turn){
            if(temp[target-1].checkers.length === 0 || temp[target-1].checkers[0].color === temp[SelectedChecker-1].checkers[0].color) {

                temp[target - 1].checkers.push(temp[SelectedChecker - 1].checkers.pop())
                setPoints(temp)
                setSelectedChecker(null);
                setDice(0)
                if(Turn==="black"){
                    setTurn("red")
                } else if(Turn==="red"){
                    setTurn("black")
                }
            }

        }
    }
    return (
        <div className="board">
            <div className="points top">
                {generateHalf(0, 6)}
                <div className={"center-bar"}></div>
                {generateHalf(6, 12)}

            </div>

            <div className="points bottom">
                {generateHalf(12, 18)}
                <div className={"center-bar"}></div>
                {generateHalf(18, 24)}

            </div>
            <button onClick={() => setDice(Math.floor(Math.random() * 6))}>roll</button>
            <h1>{Dice}</h1>
            <h1>{Turn}</h1>
        </div>
    );
};

export default Board;
