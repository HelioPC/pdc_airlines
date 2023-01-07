import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const DestinyContainer = tw.div`
    min-h-screen w-screen py-20 px-2
`

export const DestinyHeader = styled.div`
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
`

export const DestinyBody = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 10px;

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
        max-width: 960px;
    }
`

export const DestinyBodyWrapper = tw.div`
    md:h-[664px] min-h-[664px] flex md:flex-row flex-col gap-5
`

export const DestinyBodyChild = tw.div`
    md:w-full h-1/2 flex md:flex-row flex-col gap-2 md:p-1 p-0
`

export const DestinyChildBox = styled.div`
    /*md:w-1/2 md:h-full h-[150px] border-purple-600 border-solid border-2*/
    width: 50%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    background-color: white;

    @media (max-width: 768px) {
        width: 100%;
        height: 50%;
        display: flex;
    }

    img {
        width: 100%;
        height: 150px;
        margin: 0;
        object-fit: cover;
        border-radius: 20px 20px 0 0;

        @media (max-width: 768px) {
            width: 50%;
            height: auto;
            border-radius: 20px 0 0 20px;
        }
    }
`

export const DestinyChildBoxDetails = styled.div`
    height: calc(100% - 150px);
    margin: 0;
    padding: 10px;
    border-radius: 0 0 20px 20px;
    transform-origin: bottom;
    -webkit-transform-origin: bottom;

    @media (max-width: 768px) {
        width: 50%;
        height: 158px;
        border-radius: 0 20px 20px 0;
    }

    &:hover {
        background-color: #2564CF;
        display: flex;
        justify-content: center;
        align-items: center;

        & > * {
            display: none;
        }
        a {
            display: block;
        }
    }
`

export const DestinyChildBoxDetailsButton = styled.a`
    display: none;
    padding: 10px;
    border-radius: 50%;
    font-weight: bold;
    border: 2px solid #FFF;
    color: #FFF;

    &:hover {
        background-color: #FFF;
        color: #000;
    }
`
