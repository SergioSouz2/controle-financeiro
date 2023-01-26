import styled from "styled-components";


export const Tr = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   
   
`;


export const Td = styled.div`
   width: 25%;

   padding: 15px;
   text-align: ${(props) => (props.alignCenter ? "center" : "start")};
   /* width: ${(props) => (props.width ? props.width + "%" : "auto")}; */
   word-break: break-all;


svg {
   width: 18px;
   height: 18px;
}
`;