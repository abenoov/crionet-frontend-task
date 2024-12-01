import React, { PropsWithChildren } from 'react';

import Spinner from '../components/Spinner'

interface Props {
  isLoading?: boolean;
}

const Page: React.FC<PropsWithChildren<Props>> = ({ children, isLoading }) => (
  <main className="container mx-auto max-w-screen-xl px-2 pb-6">
    {isLoading ? <Spinner /> : children}
  </main>
);

export default Page;