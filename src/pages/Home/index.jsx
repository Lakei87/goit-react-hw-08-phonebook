import { Title, Icon } from "./home.styled";
import phoneIcon from "../../images/phone-icon.png"
import { Section, Container, Footer, Main } from "components/Box";

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
        <Footer></Footer>
        </>
    );
};
