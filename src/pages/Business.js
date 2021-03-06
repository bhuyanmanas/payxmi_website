import React from 'react';
import { Divider } from 'antd';
import Sec1 from '../components/business-sections/Sec1';
import Sec2 from '../components/business-sections/Sec2';
import Sec3 from '../components/business-sections/Sec3';
import Sec4 from '../components/business-sections/Sec4';

function business(props) {
  return (
    <div style={{ background: `rgb(38 42 44)` }}>
      <Sec1 />
      <Divider style={{ backgroundColor: `white` }} />
      <Sec2 />
      <Divider style={{ backgroundColor: `white` }} />
      <Sec3 />
      <Divider style={{ backgroundColor: `white` }} />
      <Sec4 />
    </div>
  );
}

export default business;
