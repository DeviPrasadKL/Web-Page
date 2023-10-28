import React, { useState } from 'react';
import filter from '../assets/Vectorfliter.png'
import arrowDown from '../assets/Vector 633.png'
import arrow from '../assets/Vectora.png'

export default function Table1() {
    const [openView, setOpenView] = useState(false);

    const openOptions = () => {
        setOpenView(!openView);
    }
    return (
        <div className='bg-white' style={{ width: '530px', height: 'auto', borderRadius: '30px', padding: '2rem 4rem', marginLeft: '2rem', marginTop: '2rem', boxShadow: '0px 0px 10px #55715389' }} >
            <div className="top" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ height: '24px' }}>
                    <h3 style={{ color: 'rgba(10, 58, 103, 1)' }}>AUM by Branch</h3>
                </div>
                <div style={{ display: 'flex', height: '28px' }} >
                    <div className="button">
                        <img src={filter} alt="" />
                        <h3>Filter</h3>
                    </div>
                    <div className="button">
                        <h3  >Today</h3>
                        <img src={arrowDown} alt="" />
                    </div>
                </div>
            </div>
            <h6><i style={{ color: 'rgba(10, 58, 103, 0.6)', fontSize: '14px' }}>insights of AUM of different branches handled by PRMs</i></h6>
            <div className='flex1' onClick={openOptions}>
                <h3 className='cities'>Banglore</h3>
                <h3>1.15Cr</h3>
                <h3 className='green'>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div style={{ display: openView ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '0.5rem' }} >
                <div>
                    <h3 className='options' >Premium</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >silver</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >Gold</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >Platinum</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >AC</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
            </div>
            <div style={{ display: openView ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '1rem' }} >
                <div>
                    <h3 className='options' >Free</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >Silver</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >Gold</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >Platinum</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
                <div>
                    <h3 className='options' >AC</h3>
                    <h3 className='options' >&#x20b9; 1.15L</h3>
                </div>
            </div>
            <div className='flex1'>
                <h3 className='cities'>Mumbai</h3>
                <h3>1.15Cr</h3>
                <h3 className='green'>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3 className='cities'>Delhi</h3>
                <h3>1.15Cr</h3>
                <h3 className='green'>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3 className='cities'>Hyderabad</h3>
                <h3>1.15Cr</h3>
                <h3 className='green'>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3 className='cities'>Chennai</h3>
                <h3>1.15Cr</h3>
                <h3 className='green'>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
}
