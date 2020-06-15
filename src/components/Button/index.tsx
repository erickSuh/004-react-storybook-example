import React from 'react';

interface Props {
  backgroundColor: string;
  color: string;
}

const styles: React.CSSProperties = {
  backgroundColor: '#7159c1',
  color: '#fff',
};

export const Button: React.FC<Props> = ({
  children,
  backgroundColor,
  color,
}) => {
  return <button style={styles}>{children}</button>;
};
