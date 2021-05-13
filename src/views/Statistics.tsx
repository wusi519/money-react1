import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useTags} from '../hooks/useTags';
import {useRecords} from '../hooks/useRecords';
import day from 'dayjs';

const CategoryWrapper = styled.div`
    background:white;
`;

function Statistics() {
  const [category, setCategroy] = useState<'-' | '+'>('-');
  const {records} = useRecords();
  const {getName} = useTags();
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={value => setCategroy(value)}/>
      </CategoryWrapper>
      <div>
        {records.map((r: any) => {
          return <div>{r.tagIds.map((tagId: number) => <span>{getName(tagId)}</span>)}
            {r.amount}
            {day(r.createAt).format('YYYY年MM月DD日')}
          </div>;
        })}
      </div>
    </Layout>
  );
}

export default Statistics;