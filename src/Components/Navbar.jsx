import React from 'react';
import arrow from '../assets/Vector (1).png'
import plus from '../assets/carbon_add.png'
import logo from '../assets/Ellipse 168.png'
import search from '../assets/search-12-64.png'
import bell from '../assets/bell.png'
import circle from '../assets/Vectorcircle.png'

export default function Navbar() {
    return (
        <div className='bg-white' style={{ height: '56px', padding: '1rem 0rem', marginBottom:'1.5rem' }}>
            <div style={{ height: '54px', top: '30px', left: '30px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
                <div className='flex'>
                    <img style={{ height: '50px', width: '50px', borderRadius: '50%', top: '32px', left: '30px', paddingRight: '1rem' }} src={logo} alt="" />
                    <div >
                        <h4 style={{ color: "#17538c60" }} >Partner code: IA234522</h4>
                        <h4 style={{ color: "#17538c60" }} >Referal code: IA234522</h4>
                    </div>
                </div>
                <div style={{ backgroundColor: "#0A3A67", borderRadius: "50%", height: '48px', width: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={arrow} alt="" />
                </div>
                <div style={{ height: '48px', width: '525px', border: '1px solid #17538c60', borderRadius: '0.5rem', display: 'flex', alignItems: 'center' }}>
                    <img src={search} alt="" style={{ height: '25px', position: 'relative', left: "2rem", top: '0.1rem' }} />
                    <input type="text" name="" id="in" style={{ height: '27.51px', width: '358.31px', border: 'none', paddingLeft: '3.5rem' }} placeholder='Search Clients, Properties, Services' />
                </div>
                <div style={{ width: '202px', height: '54px', borderRadius: "10px", backgroundColor: "#0A3A67", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={plus} alt="" style={{ height: '25px', paddingRight: '0.2rem' }} />
                    <h3 style={{ color: "white" }}>Add</h3>
                </div>
                <div className="flex" >
                    <div style={{ border: '1px solid #0A3A67', borderRadius: "10px", height: '54px', width: '54px', display: 'flex', alignItems: 'center', justifyContent: "center", marginRight:'1.5rem' }}>
                        <img src={bell} alt="" style={{ height: '25px' }} />
                    </div>
                    <div style={{ border: '1px solid #0A3A67', borderRadius: "10px", height: '54px', width: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <img className='dot' src={circle} alt="" />
                        <img className='dot' src={circle} alt="" />
                        <img className='dot' src={circle} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
