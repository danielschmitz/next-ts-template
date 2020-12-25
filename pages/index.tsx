import React from 'react';
import PropsExample from '@/components/examples/PropsExample';

const Home: React.FC = () => {
  return (
    <div>
      Hello next.js
      <PropsExample onClick={() => alert('click click')}>Props Example Children Content</PropsExample>
    </div>
  );
};

export default Home;


