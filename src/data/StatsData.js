import React from 'react'
import {GiEarthAmerica} from '@react-icons/all-files/gi/GiEarthAmerica' 
import {MdAirplanemodeActive} from '@react-icons/all-files/md/MdAirplanemodeActive' 
import {MdTimer} from '@react-icons/all-files/md/MdTimer' 
import {FaMoneyCheck} from '@react-icons/all-files/fa/FaMoneyCheck' 

export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`color: #047bf1`}/>),
        title: "Over 100 Destinations",
        desc: "Travel to over 100 unique places"
    }, 
    {
        icon: (<MdAirplanemodeActive css={`color: #f3a82e`}/>),
        title: "1 Million Trips Made",
        desc: "Over 1 Million Trips completed last yar"
    }, 
    {
        icon: (<MdTimer css={`color: #f34f2e`}/>),
        title: "Fastest Support",
        desc: "Access Our Support Team 24/7"
    }, 
    {
        icon: (<FaMoneyCheck css={`color: #3af576`}/>),
        title: "Best Deals",
        desc: "We offer the best prices"
    }, 
    

]