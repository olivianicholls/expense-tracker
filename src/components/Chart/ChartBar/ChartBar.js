import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className='c-chart-bar'>
      <div className='c-chart-bar__inner'>
        <div className='c-chart-bar__fill' style={{height: barFillHeight}}></div>
      </div>
      <div className='c-chart-bar__label'>{props.label}</div>
    </div>
  );
}


export default ChartBar;