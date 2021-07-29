import React from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as Arrow } from '@assets/img/arrow.svg';
import style from './index.scss';

const cx = classNames.bind(style);

interface IOwnProps {
};

const DemoComponent:React.FC<IOwnProps> = ({

}) => {
  return (
    <div className={cx('demo')}>
      demo component
      <Arrow />
    </div>
  )
}

export default DemoComponent;