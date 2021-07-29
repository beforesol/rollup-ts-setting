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
      데모컴포넌트
      <Arrow />
    </div>
  )
}

export default DemoComponent;