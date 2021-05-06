import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import 'helper.scss';
import {CategorySection} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {TagsSection} from './Money/TagsSection';
import {NumberPadSection} from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
 display:flex;
 flex-direction: column;
`;
type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  return (
    <MyLayout>
      {selected.tags.join(',')}
      {selected.note}
      {selected.category}
      {selected.amount}
      <TagsSection value={selected.tags}
                   onChange={(tags) => setSelected({
                     ...selected,
                     tags,
                   })}/>
      <NoteSection value={selected.note}
                   onChange={(note)=>{
                     setSelected({
                       ...selected,
                       note
                     })
                   }}
      />
      <CategorySection value={selected.category}
                       onChange={(category)=>{
                         setSelected({
                           ...selected,
                          category
                         })
                       }}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount)=>{
                          setSelected({
                            ...selected,
                            amount
                          })
                        }}
      />
    </MyLayout>
  );
}

export default Money;