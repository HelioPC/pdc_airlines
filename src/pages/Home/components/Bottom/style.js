import styled from 'styled-components'
import tw from 'tailwind-styled-components'

import bg from '../../../../assets/images/bg-view.png'

export const BottomContainer = tw.div`
    min-h-[500px] w-screen py-0 px-2
`

export const BottomNewsletter = tw.div`
    h-[429px] min-h-[400px] mb-[35px] px-4
`

export const BottomNewsletterBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    min-height: 400px;
    max-width: 1192px;
    margin: 0 auto;
    border: 1px solid white;
    color: white;
    border-radius: 24px;
    background-image: url(${bg});

    @media (min-width: 992px) {
        max-width: 960px;
    }

    @media (min-width: 1024px) and (max-width: 1200px) {
        max-width: 1020px;
    }
`

export const BottomNewsletterContent = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        padding: 10px;
    }
`
