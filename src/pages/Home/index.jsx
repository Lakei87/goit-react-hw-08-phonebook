import { Title, Icon } from "./home.styled";
import phoneIcon from "../../images/phone-icon.png"
import { MainWrap } from "components/Box";

export default function Home() {
    return (
        <MainWrap>
            <Icon src={phoneIcon} alt="phoneIcon" />
            <Title>Phone Book Application</Title>
        </MainWrap>
    );
};
