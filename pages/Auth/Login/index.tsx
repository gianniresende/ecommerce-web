import React from 'react';
import MainComponent from '../../../components/shared/MainComponent';
import LoginForm from '../../../components/LoginForm';

const Login: React.FC = () => {
  return (
    <MainComponent>
      <div className="p-4 text-center">
        <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />
      </div>
    </MainComponent>
  )
}

export default Login;