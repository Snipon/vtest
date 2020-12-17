import styled from 'styled-components';
import { colors, typography, spacing } from './util/theme';

const Container = styled.nav`
  background-color: ${colors.bg};
  padding: ${spacing.sm};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

const Title = styled.h1`
  ${typography.heading};
  margin: 0;
`;

const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  display: inline-block;
  padding: ${spacing.sm};
`;

export default function SiteHeader(props) {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Menu>
        {['Experiences', 'Company', 'Support'].map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </Menu>
    </Container>
  );
}
