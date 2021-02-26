import { useState } from 'react'
import { Input, Error, Form, GlobalStyle, FormWrapper, ButtonSignup } from './Styled'
import { useAuth } from '../contexts/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)



    const { signup } = useAuth()


    const handleEmail = (e) => {
        const newEmail = e.target.value
        setEmail(newEmail)

    }

    const handlePassword = (e) => {
        const newPassword = e.target.value
        setPassword(newPassword)

    }

    const handleConfirmPassword = (e) => {
        const newConfirmPassword = e.target.value
        setConfirmPassword(newConfirmPassword)

    }

    const handleSubmit = async () => {

    if(password !== confirmPassword) {
        return setError('Passwords do not match')
    }
    try {
        setError('')
        setLoading(true)
        return await signup(email,password)
    }
    catch{
        setError('Failed to create an account')
    }
    setLoading(false)
    }

    return (
        <>
            <GlobalStyle />
                {error && <Error>{error}</Error> }
            <FormWrapper>
                <Form onSubmit={handleSubmit}>
                    <h2>Signup</h2>
                    <label htmlFor='email'> Email</label>
                    <Input onChange={handleEmail} type='email' placeholder='write your email' />
                    <label htmlFor='password'> Password</label>
                    <Input onChange={handlePassword} type='password' placeholder='write your password' />
                    <label htmlFor='confirm-password'> Password Confirmation</label>
                    <Input onChange={handleConfirmPassword}  type='password' placeholder='confirm your password' />
                    <ButtonSignup disabled={loading} type='submit'>Signup</ButtonSignup>
                </Form>
            </FormWrapper>
        </>
    )
}

export default Signup
