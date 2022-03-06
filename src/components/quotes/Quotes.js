import styled from 'styled-components';
import { string, func } from 'prop-types';
import { Button } from '../button';

export const Quotes = ({ quote, speaker, onUpdate = () => { } }) => {
  return (
    <Wrapper>
      <Quote>"{quote}"</Quote>
      <Speaker>- {speaker}</Speaker>
      <Button onClick={onUpdate}>Financial Advice</Button>
    </Wrapper>
  );
};

Quotes.propTypes = {
  quote: string,
  speaker: string,
  onUpdate: func
};

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Quote = styled.p`
  font-size: 2em;
  text-shadow: rgba(0, 0, 0) 2px 0px 2px;
  flex: 1;
  margin: 0;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  padding: 10px;
`;

const Speaker = styled(Quote)`
  align-self: end;
  margin-bottom: 50px;
`;
