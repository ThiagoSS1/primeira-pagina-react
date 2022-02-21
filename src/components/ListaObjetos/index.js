import Div2 from "../Div2";
import { DivColor } from "../Div2/styles";

export default function ListaPessoas(props) {
    return (
        <DivColor >
            {props.objetos.map((objetos) => (
                <Div2
                    objeto={objetos}       
                /> 
             ))}
        </DivColor>
    );
};