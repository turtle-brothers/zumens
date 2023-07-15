import React, { memo, ReactNode, FC } from 'react';

import { Footer } from '../organisms/layout/Footer';

type Props = {
  children: ReactNode;
};

export const FooterLayout: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      {children}
      <Footer />
    </>
  );
});
