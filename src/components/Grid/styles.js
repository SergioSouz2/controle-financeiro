import styled from "styled-components";

export const Table = styled.table`
   width: 98%;
   background-color: #FFF;
   padding: 20px;
   box-shadow: 0px 0px 5px #ccc;
   border-radius: 5px;
   max-width: 1120px;
   margin: 20px auto;

`;

export const Thead = styled.thead``
export const Tbody = styled.tbody``


export const Tr = styled.tr`
   display: flex;
   flex-direction: row;
   

`;


export const Th = styled.th`
   width: 25%;

   border-bottom: inset;
   padding-bottom: 5px;
   text-align: ${(props) => (props.alignCenter ? "center" : "start")};
   /* width: ${(props) => (props.width ? props.width + "%" : "auto")}; */


`;
// export const Thead = styled.div``
