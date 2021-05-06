import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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
const CategorySection: React.FC = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof typeof categoryMap
  const [categoryList] = useState<Keys[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === '-' ? 'selected' : ''}
              onClick={() => {setCategory('-');}}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </Wrapper>
  );
};
export {CategorySection};