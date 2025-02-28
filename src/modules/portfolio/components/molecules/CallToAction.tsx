

import React from 'react';
import Button from '../atoms/Button';
type Props ={
  className?: string;
}
const CallToAction: React.FC<Props> = ({className}) => {
  return <Button variant="primary" to="/experience-education" className={className}>About Me <span>→</span></Button>;
};

export default CallToAction;