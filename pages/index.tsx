import React from 'react';
import MainComponent from '../components/shared/MainComponent';
import LoginForm from '../components/LoginForm';

import { useRouter } from 'next/router';

const Home:React.FC = () => {

  const router = useRouter();
  return (
    <MainComponent>
      <button onClick={() => router.push('/Auth/Login')}>Login</button>
    </MainComponent>
  )
}

export default Home;
