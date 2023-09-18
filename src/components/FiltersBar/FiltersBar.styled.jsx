import styled from 'styled-components';

// export const StyledSelect = styled.select`
//     width: 224px;
//     height: 48px;
//     border-radius: 14px;
//     border-color: transparent;
//     background-color: var(--sel-color);
//     outline: none;
// `
// export const StyledLabel = styled.label`
//     display: grid;
//     gap: 8px;
// `

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;
export const SpanContainer = styled.span`
  z-index: 9999;
  border: 0px;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  padding: 0px;
  white-space: nowrap;
`;

export const WrapControl = styled.div`
  display: flex;
  align-items: center;
  cursor: default;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  position: relative;
  transition: all 100ms ease 0s;
  background-color: rgb(255, 255, 255);
  border-color: rgb(230, 10, 10);
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  box-sizing: border-box;
  outline: 0px !important;
`;

export const Hlgwow = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: grid;
  flex: 1 1 0%;
  flex-wrap: wrap;
  position: relative;
  overflow: hidden;
  padding: 2px 8px;
  box-sizing: border-box;
`;

export const Placeholder = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  color: rgb(227, 24, 24);
  margin-right: 2px;
  box-sizing: border-box;
`;

export const DataValue = styled.div`
  visibility: visible;
  display: inline-grid;
  grid-area: 1 / 1 / 2 / 3;
  grid-template-columns: 0px min-content;
  margin: 2px;
  padding-bottom: 2px;
  padding-top: 2px;
  color: rgb(51, 51, 51);
  box-sizing: border-box;
`;
export const Input = styled.input`
  color: inherit;
  width: 50px;
  background: 0px center;
  opacity: 1;
  grid-area: 1 / 2 / auto / auto;
  font: inherit;
  min-width: 2px;
  border: 0px;
  margin: 0px;
  outline: 0px;
  padding: 0px;
`;
export const BtnWrap = styled.div`
 -webkit-box-align: center;
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-shrink: 0;
    box-sizing: border-box;
`;
export const Span = styled.span`
  align-self: stretch;
    width: 1px;
    background-color: rgb(204, 204, 204);
    margin-bottom: 8px;
    margin-top: 8px

;
    box-sizing: border-box;
`;

export const IndicatorContainer = styled.div`
  display: flex;
  transition: color 150ms ease 0s;
  color: rgb(223, 10, 10);
  padding: 8px;
  box-sizing: border-box;
`;
export const Svg = styled.svg`
  display: inline-block;
  fill: currentcolor;
  line-height: 1;
  stroke: currentcolor;
  stroke-width: 0;
`;
