import React from 'react'
import Grid from './grid'
import Skill from './skill'
import Logo from './logo'
export default function Home() {
    return (
        <div className="container">
           <main className="page lanidng-page">
            <Logo/>
            <Grid/>
            <Skill/>
            </main>

        </div>
    )
}
