import styled from 'styled-components';

const CategorySection = styled.section`
font-size:24px;
  > ul{
    display:flex;
    background:#c4c4c4;
    position: relative;
    >li{
      width:50%;  
      text-align: center; 
      padding:16px 0; 
      &.selected::after{
      content:'';
      display:block;
      height:3px;
      background:#333;
      position:absolute;
      bottom:0;
      width:50%;
      left:0;
         }
      }
    }
`;
export {CategorySection}