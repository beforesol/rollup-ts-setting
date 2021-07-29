import React from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as Arrow } from '@assets/img/arrow.svg';

const style = require('./index.scss');
const cx = classNames.bind(style);

interface IOwnProps {
};

const DemoComponent:React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('demo')}>
      DEMO
      <Arrow />
    </div>
  )
}

export default DemoComponent;