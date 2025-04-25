import styled, { keyframes }  from 'styled-components';


export const CoinTickerWrapper = styled.div`
    white-space: nowrap; 
    overflow: hidden;
`;


export const AdvancedImageWrapper = styled.em`
 position: relative;
  padding:12px;
  top: 8px;
  margin-right: 7px;
`;


export const CoinTickerText = styled.em`
  color: Beige;
  font-size: 1.2em;
  top: 3px;
  position: relative;
  font-weight: 900;
  font-style: normal;
`;


export const CoinUpSymbol = styled.em`
  color: MediumTurquoise;
  font-size: 1.2em;
  padding:2px;
  top: 2px;
  position: relative;

`;

const ticker = keyframes`
  0% {
    opacity: 1;
    transform: translateX(350px);
  }
  100% {
    opacity: 1;
    transform: translateX(-350px);
  }
`;



export const InnerWrapper = styled.div`
    display: inline-block;
    animation: ${ticker} 8s linear infinite;
    white-space: nowrap;
    width: fit-content;
    flex-wrap: nowrap; 
`;

