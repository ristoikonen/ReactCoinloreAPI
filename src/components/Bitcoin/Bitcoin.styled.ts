import styled from 'styled-components';
const DEFAULT_TEXTWIDTH = "480px"; // default value for textwidth

interface Props {
    textwidth?: string;
}

export const BitcoinWrapper = styled.div<Props>`
    width: ${(props) => props.textwidth || DEFAULT_TEXTWIDTH};
    font-size: 1.3em;
`;
