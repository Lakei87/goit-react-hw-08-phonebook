import { FooterWrap, FollowMe, Text, Link, Icon, Signature } from './footer.styled';

export default function Footer() {
  return (
      <FooterWrap>
          <FollowMe>
            <Text>Follow me</Text>
            <Link href="https://www.linkedin.com/in/sergii-lakei" target='blank'>
                <Icon />
            </Link>
          </FollowMe>
        <Signature>&copy; 2023 - By Serhii Lakei</Signature>
    </FooterWrap>
  )
};
