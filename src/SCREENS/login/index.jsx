import React, { useContext, useState } from 'react';
import { Fragment } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './styles/index.css';
import Roboot from './styles/robot-7770312_1280.webp'
import { sections } from './compontes/sections'
import { AuthContext } from '../../contexts/AuthContext';
import { MyTextField } from '../../COMPONENTS/textField/textField.jsx'
import { Google } from '@mui/icons-material';
const LoginForm = () => {
  const { loginWithGoogle, loginWithEmailAndPassword } =
    useContext(AuthContext)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((old) => ({ ...old, [name]: value }))
  }
  const handleLoginWithGoogle = () =>
    loginWithGoogle(data?.email, data?.password)
  const handleLoginWithEmailAndPassword = () =>
    loginWithEmailAndPassword(data?.email, data?.password)

  console.log(Roboot)
  return (
    <Stack
      className='elemento-com-animacao'
      sx={{
        backgroundImage: 'url("https://cdn.pixabay.com/photo/2023/02/05/19/05/robot-7770312_1280.jpg")',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '1',
        animation: 'backgroundAnimation 10s linear infinite',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          position: 'relative',
        }}
      >
        <Fragment>
          <Stack
            sx={{
              textAlign: 'center',
              padding: '20px',
            }}
          >
            <h1>
              <samp style={{ color: "orange" }}>hack</samp><samp>Celld7</samp>
            </h1>
            {sections?.map((section, index) => {
              return (
                <MyTextField
                  key={index}
                  label={section.label}
                  name={section.name}
                  type={section.type}
                  value={data[section.name]}
                  onChange={
                    handleChange
                  }
                />
              );
            })}

            <Button
              variant="contained"
              fullWidth
              onClick={handleLoginWithEmailAndPassword}
              sx={{
                backgroundColor: '#007ACC',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#005ea8',
                },
              }}
            >
              CONECTAR-SE
            </Button>
            <Button
              onClick={handleLoginWithGoogle}
              startIcon={<Google />}
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#DB4437',
                cursor: 'pointer',
                color: '#fff',
                '&:hover': {
                  backgroundColor: '#c43128',
                },
                marginTop: '10px',
              }}
            >
              Login com Google
            </Button>
          </Stack>
        </Fragment>
      </Container>
    </Stack>
  );
};

export default LoginForm;
