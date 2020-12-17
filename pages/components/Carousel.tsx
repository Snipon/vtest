import styled, { css } from 'styled-components';
import DestinationTeaser from './DestinationTeaser';
import { spacing, colors, typography } from './util/theme';

const Container = styled.section``;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
  padding: ${spacing.sm};
`;

const ListItem = styled.li`
  flex-basis: 25%;
  padding: ${spacing.sm};
`;

const Title = styled.h1`
  ${typography.heading}
`;
const Sub = styled.h2`
  ${typography.base}
`;

export default function Featured({ data }) {
  return (
    <Container>
      <Title>Adventure awaits out there</Title>
      <Sub>Get out and experience Scandinavian way of living.</Sub>
      <List>
        {data.items.map((item, i) => (
          <ListItem key={item.id}>
            <DestinationTeaser {...item} small dark />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
