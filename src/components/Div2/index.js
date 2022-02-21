import { DivBody2, Myimg } from "./styles";

export default function Div2(props) {
    return (
        <DivBody2>
                <Myimg src={props.objeto.imagem}></Myimg>
                <h2>{props.objeto.des}</h2>
                <p>{props.objeto.texto}</p>
        </DivBody2>
    )
}