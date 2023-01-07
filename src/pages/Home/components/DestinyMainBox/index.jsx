import React from 'react'
import { GiAirplaneDeparture } from 'react-icons/gi'

import * as M from './style'
import image from '../../../../assets/images/dubai.avif'

const DestinyMainBox = () => {
    return (
        <M.MainBox>
            <M.BoxWrapper>
                <picture className='w-full'>
                    <source srcSet={image} media='(min-width: 800px)' />
                    <img src={image} alt='travel' />
                </picture>
                <M.BoxSection>
                    <M.BoxDetails>
                        <h3 className='text-[#2564CF] text-lg font-semibold'>
                            Dubai
                        </h3>
                        <div className='mb-4 text-[15px] text-[#555]'>
                            15 Jan 2023 - 20 Jan 2023
                        </div>
                        <div className='text-[15px] text-[#555]'>
                            Econômica A partir de
                        </div>
                        <div className='text-[15px] text-[#333)'>
                            USD 2066
                        </div>
                    </M.BoxDetails>
                    <div className='md:w-1/2 w-full md:h-full h-auto flex justify-center items-center'>
                        <M.BoxButton>
                            <span>Compre já</span>
                            <GiAirplaneDeparture size={30} />
                        </M.BoxButton>
                    </div>
                </M.BoxSection>
            </M.BoxWrapper>
        </M.MainBox>
    )
}

export default DestinyMainBox