import React from 'react';
import filter from '../assets/Vectorfliter.png'
import arrowDown from '../assets/Vector 633.png'
import arrow from '../assets/Vectora.png'

export default function Table2() {
    return (
        <div className='bg-white' style={{ width: '530px', height: 'auto', borderRadius: '30px', padding: '2rem 4rem', marginLeft: '2rem', marginTop: '2rem', boxShadow: '0px 0px 10px #55715389' }}>
            <div className="top" style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div>
                    <h3 style={{ color: 'rgba(10, 58, 103, 1)' }}>AUM by PRM</h3>
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
            <h6><i style={{ color: 'rgba(10, 58, 103, 0.6)', fontSize:'14px' }}>insights of AUM handled by PRMs in different branches</i></h6>
            <div className='flex1' >
                <h3>Nalini</h3>
                <h3>1.15Cr</h3>
                <h3>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3>Rema</h3>
                <h3>1.15Cr</h3>
                <h3>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3>Arun</h3>
                <h3>1.15Cr</h3>
                <h3>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3>Nalini</h3>
                <h3>1.15Cr</h3>
                <h3>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex1'>
                <h3>Nalini</h3>
                <h3>1.15Cr</h3>
                <h3>+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
        </div>
    );
}
