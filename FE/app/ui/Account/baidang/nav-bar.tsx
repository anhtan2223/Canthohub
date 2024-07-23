'use client'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import Job from '@/app/ui/Home/vieclam/Job'


const App = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tin Tức',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: 'Nhà Trọ',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Việc Làm',
      children: <Job isAdd={true}></Job> ,
    },
    {
      key: '4',
      label: 'Ăn Uống',
      children: 'Content of Tab Pane 4',
    },
  ];

  return <>
    <Tabs
      defaultActiveKey="1"
      items={items}
      size='small'
      className='pl-2 text-xs'
    />
  </>
};

export default App;