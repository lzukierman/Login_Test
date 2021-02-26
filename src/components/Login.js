// import { useState } from 'react'
// import app from '../config/firebase'

// import { Input, ButtonLogin, Form, GlobalStyle, FormWrapper, ButtonSignup } from './Styled'


// const Login = () => {

//     const [email, setEmail] = useState()
//     const [password, setPassword] = useState()

//         const handleEmail = (e) => {
//             const newEmail = e.target.value
//             setEmail(newEmail)

//         }

//         const handlePassword = (e) => {
//             const newPassword = e.target.value
//             setPassword(newPassword)

//         }

//     const login = (e) => {
//         e.preventDefault()
//         fire.auth().signInWithEmailAndPassword(email, password)
//             .then(u => { })
//             .catch(err => {
//                 alert('Signup first')
//                 console.log(err)
//             })
//     }

//     const signup = (e) => {
//         e.preventDefault()
//         fire.auth().createUserWithEmailAndPassword(email, password)
//             .catch(err => {
//                 alert('Signup a valid user')
//                 console.log(err)
//         })
//     }

//     return (
//         <>
//             <GlobalStyle />
//             <FormWrapper>
//                 <Form>
//                     <h2>Please login</h2>
//                     <h3> If you don't have an account signup</h3>
//                     <label htmlFor='email'> Email</label>
//                     <Input onChange={handleEmail} type='email' placeholder='write your email' />
//                     <label htmlFor='password'> Password</label>
//                     <Input onChange={handlePassword} type='password' placeholder='write your password' />
//                     <ButtonLogin onClick={login} type='submit'>Login</ButtonLogin>
//                     <ButtonSignup onClick={signup} type='submit'>Signup</ButtonSignup>
//                 </Form>
//             </FormWrapper>
//         </>
//     )
// }

// export default Login