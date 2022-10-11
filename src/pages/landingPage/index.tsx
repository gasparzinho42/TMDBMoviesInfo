import React, { useContext, useState } from 'react'
import Box from '../../components/box'
import Button from '../../components/button'
import CardWrapper from '../../components/cardWrapper'
import Footer from '../../components/footer'
import Header from '../../components/header'
import Input from '../../components/input'
import { Title } from './styles'
import backgroundImage from '../../assets/img/netflixBackground.jpg'
import Checkbox from '../../components/checkbox'
import LinkText from '../../components/LinkText'
import Text from '../../components/Text'
import { CustomSpan } from '../../components/Text/styles'
import {
  createSession,
  deleteSession,
  getToken,
  validateWithLogin,
} from '../../common/API'
import {
  AuthWithLoginRequest,
  CreateSessionRequest,
  DeleteSessionRequest,
} from '../../common/interfaces'
import { useNavigate } from 'react-router-dom'
import { NetflixContext, UserSession } from '../../context'

const LandingPage: React.FC = () => {
  const [login, setLogin] = useState('')
  const [sessionID, setSessionID] = useState('')
  const [password, setpassword] = useState('')
  const navigate = useNavigate()
  const { setUserSession } = useContext(NetflixContext)

  const loginFunctions = {
    handleLogin: async () => {
      if (login && password) {
        const tokenResponse = await loginFunctions.getLoginToken()
        const requestToken = await loginFunctions.authenticateTMDBUser(
          tokenResponse.request_token
        )
        if (!requestToken) return
        const sessionId = await loginFunctions.createTMDBSession(requestToken)
        if (!sessionId) return
        setSessionID(sessionId)
        const newSession = loginFunctions.createUserSession(
          tokenResponse.expires_at,
          requestToken,
          sessionID
        )
        setUserSession(newSession)
        navigate('/browse')
      }
    },
    getLoginToken: async () => {
      return await getToken()
    },
    createTMDBSession: async (requestToken: string) => {
      const createSessionData: CreateSessionRequest = {
        request_token: requestToken || '',
      }
      return await createSession(createSessionData)
    },
    authenticateTMDBUser: async (tokenRes: string) => {
      const data: AuthWithLoginRequest = {
        username: login,
        password: password,
        request_token: tokenRes,
      }
      return await validateWithLogin(data)
    },
    handleDeleteSession: async () => {
      if (login && password) {
        const data: DeleteSessionRequest = {
          session_id: sessionID,
        }
        const deleteSessionRes = await deleteSession(data)
        if (deleteSessionRes?.success) return
        console.error(deleteSessionRes)
      }
    },
    createUserSession: (
      expires_at: Date,
      request_token: string,
      session_id: string
    ) => {
      const session: UserSession = {
        expires_at: expires_at,
        request_token: request_token,
        session_id: session_id,
      }
      return session
    },
  }
  return (
    <Box
      h='100vh'
      w='100vw'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'red',
        gap: '15px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
        overflowY: 'scroll',
      }}
    >
      <Header />
      <CardWrapper>
        <Box w='100%' flexDirection='column'>
          <Title style={{ marginBottom: '20px' }}>Entrar</Title>
          <Box w='100%' mb='15px' mt='10px'>
            <Input
              value={login}
              onChange={evt => setLogin(evt.target.value)}
              title='Email ou número de telefone'
            />
          </Box>
          <Box w='100%' mb='30px'>
            <Input
              value={password}
              onChange={evt => setpassword(evt.target.value)}
              title='Senha'
            />
          </Box>
        </Box>

        <Box w='100%' flexDirection='column'>
          <Box w='100%' mb='10px'>
            <Button
              title='Entrar'
              onClick={() => {
                loginFunctions.handleLogin()
              }}
            />
          </Box>
          <Box w='100%' mb='10px'>
            <Button
              title='Deletar sessão'
              onClick={() => {
                loginFunctions.handleDeleteSession()
              }}
            />
          </Box>
          <Box
            w='100%'
            justifyContent='space-between'
            alignItems='center'
            mb='90px'
          >
            <Checkbox
              label='Lembre-se de mim'
              id='rememberMe'
              name='rememberMe'
              onChange={evt => console.log(evt.target.checked)}
            />
            <Box w='100%' justifyContent='flex-end'>
              <LinkText
                href='https://www.netflix.com/LoginHelp'
                label='Precisa de ajuda?'
              />
            </Box>
          </Box>
          <Box
            w='100%'
            justifyContent='flex-start'
            alignItems='center'
            columnGap='2px'
            mb='16px'
          >
            <Text label='Novo por aqui?' />
            <Text altColor='white' label='Assine agora.' />
          </Box>
          <Box
            w='100%'
            justifyContent='flex-start'
            alignItems='center'
            mb='50px'
          >
            <Box w='100%'>
              <CustomSpan>
                Esta página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.
                <CustomSpan altColor='#0071eb'> Saiba mais</CustomSpan>
              </CustomSpan>
            </Box>
          </Box>
        </Box>
      </CardWrapper>
      <Footer />
    </Box>
  )
}

export default LandingPage
