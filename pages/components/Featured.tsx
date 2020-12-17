import styled from 'styled-components';
import Hero from './Hero';
import DestinationTeaser from './DestinationTeaser';
import { spacing } from './util/theme';
const Container = styled.div``;

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  list-style: none;
  margin: 0;
  padding: ${spacing.sm};
`;

const ListItem = styled.li`
  flex: 1 0 40%;
  padding: ${spacing.sm};
  &:nth-child(even) {
    flex-basis: 60%;
  }
`;

export default function Featured({ data }) {
  return (
    <Container>
      <Hero {...data[0]} />
      <List>
        {data.slice(1).map((item, i) => (
          <ListItem key={item.id}>
            <DestinationTeaser {...item} isEven={i % 2 === 1} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
