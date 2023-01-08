import React, { useState, useMemo } from 'react'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { MdSearch } from 'react-icons/md'
import { FormControl, Select, MenuItem, InputLabel, ListSubheader, TextField, InputAdornment } from '@mui/material'

import * as D from './style'
import DestinyMainBox from '../DestinyMainBox'

import berlim from '../../../../assets/images/berlim.jpeg'
import buda from '../../../../assets/images/budapest.jpeg'
import madrid from '../../../../assets/images/madrid.jpeg'
import bali from '../../../../assets/images/bali.jpeg'

const containsText = (text, searchText) => text.toLowerCase().indexOf(searchText.toLowerCase()) > -1

const allOptions = ['Luanda AO', 'Lisboa PT', 'New york USA', 'Brasília BR']

const Destiny = () => {
    const [selectedOption, setSelectedOption] = useState(allOptions[0])
    const [searchText, setSearchText] = useState('')

    const displayedOptions = useMemo(
        () => allOptions.filter((option) => containsText(option, searchText)),
        [searchText],
    )

    return (
        <D.DestinyContainer>
            <D.DestinyHeader>
                <h2>Encontre ótimas tarifas</h2>

                <div>
                    <FormControl sx={{ width: '300px' }}>
                        <InputLabel id='search-select-label'>A partir</InputLabel>
                        <Select
                            // Disables auto focus on MenuItems and allows TextField to be in focus
                            MenuProps={{ autoFocus: false }}
                            labelId='search-select-label'
                            id='search-select'
                            value={selectedOption}
                            label='Options'
                            onChange={(e) => setSelectedOption(e.target.value)}
                            onClose={() => setSearchText('')}
                            // This prevents rendering empty string in Select's value
                            // if search text would exclude currently selected option.
                            renderValue={() => selectedOption}
                        >
                            {/*
                                TextField is put into ListSubheader so that it doesn't
                                act as a selectable item in the menu
                                i.e. we can click the TextField without triggering any selection.
                            */}
                            <ListSubheader>
                                <TextField
                                    size='small'
                                    // Autofocus on textfield
                                    autoFocus
                                    placeholder='Type to search...'
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <MdSearch />
                                            </InputAdornment>
                                        ),
                                    }}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key !== 'Escape') {
                                            // Prevents autoselecting item while typing (default Select behaviour)
                                            e.stopPropagation()
                                        }
                                    }}
                                />
                            </ListSubheader>
                            {displayedOptions.map((option, i) => (
                                <MenuItem key={i} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </D.DestinyHeader>
            <D.DestinyBody>
                <D.DestinyBodyWrapper>
                    <DestinyMainBox />
                    <div className='md:w-1/2 w-full md:h-full min-h-[650px] flex flex-col'>
                        <D.DestinyBodyChild>
                            <D.DestinyChildBox>
                                <img src={berlim} alt='/' />
                                <D.DestinyChildBoxDetails>
                                    <h3 className='text-[#2564CF] text-lg font-semibold'>
                                        Berlim
                                    </h3>
                                    <div className='mb-4 text-[15px] text-[#555]'>
                                        25 Apr 2023 - 02 Nov 2023
                                    </div>
                                    <div className='text-[15px] text-[#555]'>
                                        Econômica A partir de
                                    </div>
                                    <div className='text-[15px] text-[#333)'>
                                        USD 1586
                                    </div>
                                    <D.DestinyChildBoxDetailsButton href='/'>
                                        <GiAirplaneDeparture />
                                    </D.DestinyChildBoxDetailsButton>
                                </D.DestinyChildBoxDetails>
                            </D.DestinyChildBox>
                            <D.DestinyChildBox>
                                <img src={buda} alt='/' />
                                <D.DestinyChildBoxDetails>
                                    <h3 className='text-[#2564CF] text-lg font-semibold'>
                                        Budapeste
                                    </h3>
                                    <div className='mb-4 text-[15px] text-[#555]'>
                                        10 Fev 2023 - 12 Ago 2023
                                    </div>
                                    <div className='text-[15px] text-[#555]'>
                                        Econômica A partir de
                                    </div>
                                    <div className='text-[15px] text-[#333)'>
                                        USD 1218
                                    </div>
                                    <D.DestinyChildBoxDetailsButton href='/'>
                                        <GiAirplaneDeparture />
                                    </D.DestinyChildBoxDetailsButton>
                                </D.DestinyChildBoxDetails>
                            </D.DestinyChildBox>
                        </D.DestinyBodyChild>
                        <D.DestinyBodyChild>
                            <D.DestinyChildBox>
                                    <img src={madrid} alt='/' />
                                    <D.DestinyChildBoxDetails>
                                        <h3 className='text-[#2564CF] text-lg font-semibold'>
                                            Madrid
                                        </h3>
                                        <div className='mb-4 text-[15px] text-[#555]'>
                                            01 Mai 2023 - 20 Jul 2023
                                        </div>
                                        <div className='text-[15px] text-[#555]'>
                                            Econômica A partir de
                                        </div>
                                        <div className='text-[15px] text-[#333)'>
                                            USD 999
                                        </div>
                                        <D.DestinyChildBoxDetailsButton href='/'>
                                        <GiAirplaneDeparture />
                                    </D.DestinyChildBoxDetailsButton>
                                    </D.DestinyChildBoxDetails>
                            </D.DestinyChildBox>
                            <D.DestinyChildBox>
                                <img src={bali} alt='/' />
                                <D.DestinyChildBoxDetails>
                                    <h3 className='text-[#2564CF] text-lg font-semibold'>
                                        Bali
                                    </h3>
                                    <div className='mb-4 text-[15px] text-[#555]'>
                                        18 Jan 2023 - 20 Fev 2023
                                    </div>
                                    <div className='text-[15px] text-[#555]'>
                                        Econômica A partir de
                                    </div>
                                    <div className='text-[15px] text-[#333)'>
                                        USD 3500
                                    </div>
                                    <D.DestinyChildBoxDetailsButton href='/'>
                                        <GiAirplaneDeparture />
                                    </D.DestinyChildBoxDetailsButton>
                                </D.DestinyChildBoxDetails>
                            </D.DestinyChildBox>
                        </D.DestinyBodyChild>
                    </div>
                </D.DestinyBodyWrapper>
            </D.DestinyBody>
        </D.DestinyContainer>
    )
}

export default Destiny