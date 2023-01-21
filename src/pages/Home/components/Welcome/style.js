import styled from 'styled-components'
// import tw from 'tailwind-styled-components'

export const Wrap = styled.div`
    width: 100vw;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: ${props => `url('${props.bgImage}')`};
`

export const ItemText = styled.div`
    padding: 1vh 0px 0px;

    h1 {
        font-size: 64px;
        margin-bottom: 10px;
        color: white;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 44px;
        }
    }

    p {
        font-size: 18px;
        line-height: 30px;
        color: white;
        text-align: center;

        @media (max-width: 768px) {
            font-size: 14px;
        }
    }
`

export const DownArrow = styled.img`
    height: 40px;
    overflow: hidden;
    animation: animateDown infinite 1.5s;
`
/*
    min-w-full p-0 rounded bg-white grid xl:grid-cols-5 lg:grid-cols-2 grid-cols-1
    shadow-[black_10px_10px_50px_0px] xl:grid-rows-1 lg:grid-rows-3 grid-rows-5
*/
export const Box = styled.div`
    min-width: 100%;
    padding: 10px;
    border-radius: 0px;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(5, minmax(0, 1fr));
    color: #5C0931;
    box-shadow: black 10px 10px 50px 0px;
    gap: 10px;

    @media (min-width: 728px) {
        grid-template-areas: 
        ". ."
        ". ."
        "button button";
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-template-rows: repeat(3, minmax(0, 1fr));
        gap: 0px;
        padding: 10px;

        &:hover {
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
    
    @media (min-width: 1280px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
        grid-template-rows: repeat(1, minmax(0, 1fr));

        &:hover {
            border-bottom-left-radius: 0px;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }
`

export const BoxButton = styled.button`
    background: #2564CF;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    color: white;
    padding: 10px;
    transition: all ease .5s;

    @media (max-width: 1280px) {
        &:hover {
            background: #0544AF;
            border-radius: 10px;
        }
    }

    @media (min-width: 728px) {
        grid-area: button;

        &:hover {
            background: #0544AF;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
        }
    }

    @media (min-width: 1280px) {
        grid-area: unset;
    }
`
