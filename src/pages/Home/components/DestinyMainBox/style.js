import tw from 'tailwind-styled-components'
import styled from 'styled-components'

export const MainBox = tw.div`
    md:w-1/2 w-full md:h-full h-[500px] bg-white rounded-[20px] shadow-xl
`

export const BoxWrapper = styled.div`
    width: 100%;
    overflow: hidden;
    picture {
        img {
            width: 100%;
            height: 466px;
            border-radius: 20px 20px 0 0;
            object-fit: cover;

            @media (max-width: 768px) {
                width: 543px;
                height: 284px;
            }
        }
    }
`

export const BoxSection = tw.div`
    w-full md:h-[calc(650px-466px)] h-[calc(493px-284px)] flex md:flex-row flex-col md:items-center items-start justify-between
`

export const BoxDetails = styled.div`
    padding: 15px;
`

export const BoxButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2564CF;
    color: #FFF;
    cursor: pointer;
    padding: 20px;
    border-radius: 20px;
    transition: all ease .5s;

    svg {
        display: none;
    }

    @media (min-width: 768px) {
        &:hover {
            border-radius: 50%;
            svg {
                display: block;
            }
            span {
                display: none;
            }
        }
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        border-radius: 0 0 20px 20px;
    }
`
