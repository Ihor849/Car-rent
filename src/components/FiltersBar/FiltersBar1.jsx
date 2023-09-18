import React from 'react';
// import {
//   BtnWrap,
//   Container,
//   DataValue,
//   Hlgwow,
//   IndicatorContainer,
//   Input,
//   Placeholder,
//   Span,
//   SpanContainer,
//   Svg,
//   WrapControl,
// } from './FiltersBar.styled';

import CustomStyled from "./Filter.css"
import AsyncSelect from 'react-select/async';
import { colourOptions } from './data';
 
const filterColors = inputValue => {
  return colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

// const FiltersBar = () => {
//   return (
//     <Container className="css-b62m3t-container">
//       <SpanContainer className="css-7pg0cj-a11yText"></SpanContainer>
//       <SpanContainer
//         className="css-7pg0cj-a11yText"
//         aria-live="polite"
//         aria-atomic="false"
//         aria-relevant="additions text"
//       ></SpanContainer>
//       <WrapControl
//         className="css-13cymwt-control"
//         id="react-select-21-live-region"
//       >
//         <Hlgwow className=" css-hlgwow">
//           <Placeholder
//             className=" css-1jqq78o-placeholder"
//             id="react-select-21-placeholder"
//           >
//             Select...
//           </Placeholder>
//           <DataValue className=" css-19bb58m" data-value>
//             <Input
//               type="text"
//               id="react-select-21-input"
//               spellcheck="false"
//               tabindex="0"
//               aria-autocomplete="list"
//               valuestyle="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2 / auto / auto; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"
//             />
//           </DataValue>
//         </Hlgwow>
//         <BtnWrap className=" css-1wy0on6">
//           <Span className=" css-1u9des2-indicatorSeparator"></Span>
//           <IndicatorContainer
//             className=" css-1xc3v61-indicatorContainer"
//             aria-hidden="true"
//           >
//             <Svg
//               height="20"
//               width="20"
//               viewBox="0 0 20 20"
//               aria-hidden="true"
//               focusable="false"
//               className="css-8mmkcg"
//             >
//               <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
//             </Svg>
//           </IndicatorContainer>
//         </BtnWrap>
//       </WrapControl>
//     </Container>
//   );
// };

const AsyncSelectWithFiltersBar = () => {
  return <AsyncSelect cacheOptions
  className="select-container"
  classNamePrefix="select"
   loadOptions={loadOptions}
   styles={{
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'grey' : 'red',
    }),
  }}
     defaultOptions />;
};

// export default FiltersBar;
export default AsyncSelectWithFiltersBar;
