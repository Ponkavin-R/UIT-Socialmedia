import React from 'react'
import { Link } from "react-router-dom";
import StatsProvider from '../context/StatsProvider'
import StatsToday from './StatsToday'
import Navbar from './Navbar';
export default function Home() {
    return (
        <div>

            <StatsProvider />
            <StatsToday />
        </div>
    )
}
