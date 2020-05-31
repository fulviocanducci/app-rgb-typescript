import styled from "styled-components";
import { IColor } from "../../@types/IColor";

const Bar = styled.div<{ rgb: IColor }>`
  width: 100%;
  height: 300px;
  border: 1px solid #efefef;
  background: rgb(
    ${(props) => props.rgb.Red},
    ${(props) => props.rgb.Green},
    ${(props) => props.rgb.Blue}
  );
`;

Bar.defaultProps = {
  rgb: {
    Red: 0,
    Green: 0,
    Blue: 0,
  },
};

export default Bar;
