import React from 'react';

interface NumberProps extends React.PropsWithChildren {
  value: number;
}

const Number: React.FC<NumberProps> = props => {
  return (
    <div className="person">
      {props.value}
    </div>
  );
};

export default Number;