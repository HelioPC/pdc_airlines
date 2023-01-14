import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const FlySearchContainer = tw.div`
    min-h-screen w-screen min-w-[350px] py-20 px-2
`

export const FlySearchHeader = styled.div`
    max-width: 1280px;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;

    h2 {
        font-size: 30px;
        font-weight: 300;
        letter-spacing: -1px;

        margin-bottom: 30px;
    }

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        max-width: 990px;
    }
`

export const FlySearchBody = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (min-width: 576px) {
        max-width: 540px;
    }

    @media (min-width: 768px) {
        max-width: 720px;
    }

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        max-width: 990px;
    }
`

export const FlySearchContent = styled.div`
    width: 100%;
    min-height: 100px;
    display: flex;
    background-color: white;
    border-radius: 10px;
    transition: all ease .5s;

    &:hover {
        border-radius: 20px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const FlySearchContentLogo = styled.div`
    width: 10%;
    padding: 5px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const FlySearchContentBody = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2px;
    padding: 10px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: flex-start;
        flex-direction: column;
    }
`
