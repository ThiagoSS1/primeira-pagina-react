import insta from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'
import face from '../../assets/face.svg'
import { FooterDiv, Imgs, Linka, P } from './styles'

export default function Footer () {
    return (
        <FooterDiv>

            <Linka href="About"> About</Linka>
            <Linka href="Contact"> Contact</Linka>
            <Linka href="Terms Of Use"> Terms Of Use</Linka>
            <Linka href="Privacy Policy"> Pirvacy Policy</Linka>

            <Imgs src={face} alt="logo facebook"></Imgs>
            <Imgs src={twitter} alt="logo twitter"></Imgs>
            <Imgs src={insta} alt="logo instagram"></Imgs>

            <P>@Your Website 2022. All rights reserved</P>



        </FooterDiv>
    )
}