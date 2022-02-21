
// import Divs from "../../components/Divs"

import { DivBody2, TituloColor1 } from "../../components/Div2/styles"
import { Contacts, DivBody } from "../../components/Divs/styles"
import Footer from "../../components/Footer"
import ListaObjetos from "../../components/ListaObjetos"
import Summary from "../../components/Summary"
import Titulo from "../../components/Titulo"
import TituloContact from "../../components/TituloContact"
import lista from "../../data/people"



export default function Home () {
    document.title = "Minha primeira Pagina"

    return (
        <div>
            <DivBody> 
                <Titulo /> 
            </DivBody>
            <ListaObjetos objetos={lista}></ListaObjetos>
            <Summary />
            <Contacts> 
                <TituloContact />    
            </Contacts>    
            <Footer></Footer>
        </div>

    )

}