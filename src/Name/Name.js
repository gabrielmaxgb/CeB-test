import React, { useState } from 'react';
import { NameContainer } from './NameStyles';

const Name = (props) => {
  const { name } = props;
  const [displayName, setDisplayName] = useState(true);

  setTimeout(() => {
    setDisplayName(false);
  }, name.timeout * 1000);

  return (
    <NameContainer display={displayName}>
      {name.name}
    </NameContainer>
  );
}

export default Name;
