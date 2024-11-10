import Checker from "./Checker";
import "./styling/Point.css"

function Point({onCheckerClick,id,checkers,color,onClick}) {

    return (
        <div onClick={onClick} id={id} className={`point`}>
            <div className={`background`} style={{backgroundColor: color}}></div>
            {checkers.map((checker, index) => (
                <Checker onClick={() => onCheckerClick(id)} point_index={id} color={checker.color} key={index}/>
            ))}

        </div>
    )
}
export default Point;