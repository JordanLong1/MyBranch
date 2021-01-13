import React from 'react'; 

export default function NavBar() {
    return (
   
            <section className='header'>
                <section className='header-top'>
                    <section className='header-top_home-email-route'>
                    <h1>Branching Scenario</h1>
                    <a href='/'>Home</a>
                    <span onClick={() => window.location.href = "mailto:jordanleelong5@gmail.com"}>Email</span>
                    </section>
                </section>
            </section>
        
    )
}