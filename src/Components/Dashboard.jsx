import React from 'react';
import windowimg from '../assets/Dashboard.png'
import group from '../assets/Group 1000007734.png'
import group1 from '../assets/Group 1707484363.png'
import client from '../assets/client.png'
import properties from '../assets/Vector.png'
import order from '../assets/orders.png'
import flame from '../assets/Vectorflame.png'
import call from '../assets/Vectorcall.png'
import piggy from '../assets/Vectorpiggy.png'
import pay from '../assets/Vectorpay.png'
import stars from '../assets/Vectorstars.png'

export default function Dashboard() {
    return (
        <div className='bg-white' style={{
            width: '235px',
            top: '142px', padding: '38px, 9px, 38px, 20px', borderRadius: '30px', boxShadow: '6px 6px 36px 0px rgba(0, 0, 0, 0.06) -2px -4px 13px 0px rgba(255, 255, 255, 0.3) 4px 4px 47px 0px rgba(0, 0, 0, 0.04)', marginLeft:'2rem'
        }}>
            <div className='list'>
                <img style={{backgroundColor:"rgba(233, 233, 233, 0.769)", padding:'0.5rem', borderRadius:'10px'}} src={windowimg} alt="" />
                <h3 style={{backgroundColor:"rgba(233, 233, 233, 0.769)", padding:'0.8rem', paddingRight:'1.8rem' , borderRadius:'25px', marginLeft:'0.5rem', color:'rgba(10, 58, 103, 1)'}}>Dashboard</h3>
            </div>
            <div className='list'>
                <img src={group} alt="" />
                <h3>Leads</h3>
            </div>
            <div className='list'>
                <img src={group1} alt="" />
                <h3>Buyers</h3>
            </div>
            <div className='list'>
                <img src={client} alt="" />
                <h3>Clients</h3>
            </div>
            <div className='list'>
                <img src={properties} alt="" />
                <h3>Properties</h3>
            </div>
            <div className='list'>
                <img src={order} alt="" />
                <h3>Orders</h3>
            </div>
            <div className='list'>
                <img src={flame} alt="" />
                <h3>Red Box</h3>
            </div>
            <div className='list'>
                <img src={call} alt="" />
                <h3>Call Back</h3>
            </div>
            <div className='list'>
                <img src={piggy} alt="" />
                <h3>Investments</h3>
            </div>
            <div className='list'>
                <img src={pay} alt="" />
                <h3>Payments</h3>
            </div>
            <div className='list'>
                <img src={stars} alt="" />
                <h3>MAGIK</h3>
            </div>
        </div>
    );
}
