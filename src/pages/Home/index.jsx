import { Section, Container, Main } from "components/Box";
import Footer from "components/Footer";
import phoneIcon from "../../images/phone-icon.png"
import { Title, Icon } from "./home.styled";

export default function Home() {
    return (
        <>
        <Main>
            <Section>
                <Container>
                    <Icon src={phoneIcon} alt="phoneIcon" />
                    <Title>Phone Book Application</Title>
                </Container>
            </Section>
        </Main>
        <Footer/>
        </>
    );
};
