import styled from 'styled-components'
import tw from 'tailwind-styled-components'


export const AuthScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background: #FAF9F8;
	color: #292827;
`

export const AuthBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const AuthLeft = tw.div`
    h-full md:w-1/2 w-full flex justify-center items-center
    p-10
`

export const AuthRight = tw.div`
    h-full w-1/2 md:flex hidden justify-center items-center
    relative
`

export const AuthForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
`

export const AuthFormInput = styled.input`
    min-width: 350px;
    height: 40px;
    background: transparent;
    border: 1px solid #999999;
    border-radius: 4px;
    padding-left: 15px;
    
    &::-webkit-input-placeholder {
        color: #999999;
    }
`

export const AuthFormButton = styled.a`
    min-width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    transition: all ease .5s;
    cursor: pointer;

    &:hover {
        scale: 1.05;
    }
`
