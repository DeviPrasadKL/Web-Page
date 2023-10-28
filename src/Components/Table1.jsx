import React, { useState } from 'react';
import filter from '../assets/Vectorfliter.png'
import arrowDown from '../assets/Vector 633.png'
import arrow from '../assets/Vectora.png'
import View1 from './View1';
import View2 from './View2';

export default function Table1() {
    const [openView, setOpenView] = useState(false);
    const [openView1, setOpenView1] = useState(false);
    const [openView2, setOpenView2] = useState(false);
    const [openView3, setOpenView3] = useState(false);
    const [openView4, setOpenView4] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);


    const openOptions = (view) => {
        switch (view) {
            case "openView":
                setOpenView(!openView);
                break;
            case "openView1":
                setOpenView1(!openView1);
                break;
            case "openView2":
                setOpenView2(!openView2);
                break;
            case "openView3":
                setOpenView3(!openView3);
                break;
            case "openView4":
                setOpenView4(!openView4);
                break;
            default:
                break;
        }
    }
    return (
        <div className='bg-white' style={{ width: '530px', height: 'auto', borderRadius: '30px', padding: '2rem 4rem', marginLeft: '2rem', marginTop: '2rem', boxShadow: '0px 0px 10px #55715389' }} >
            <div className="top" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ height: '24px' }}>
                    <h3 style={{ color: 'rgba(10, 58, 103, 1)' }}>AUM by Branch</h3>
                </div>
                <div style={{ display: 'flex', height: '28px' }} >
                    <div className="button" onClick={() => { setOpenFilter(!openFilter) }}>
                        <img src={filter} alt="" />
                        <h3 style={{ fontWeight:'600' }}>Filter</h3>
                    </div>
                    <div className="filter" style={{ display: openFilter ? "flex" : "none" }}>
                        <h2>PRM</h2>
                        <select className='blue'>
                            <option value=""><span>Select Option</span></option>
                        </select>
                    </div>
                    <div className="button">
                        <h3  >Today</h3>
                        <img src={arrowDown} alt="" />
                    </div>
                </div>
            </div>
            <h6><i style={{ color: 'rgba(10, 58, 103, 0.6)', fontSize: '14px' }}>insights of AUM of different branches handled by PRMs</i></h6>
            <div className='flex1' onClick={() => { openOptions("openView") }}>
                <h3 >Banglore</h3>
                <h3>1.15Cr</h3>
                <h3 >+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div style={{ display: openView ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '0.5rem' }} >
                <View1 />
            </div>
            <div style={{ display: openView ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '1rem' }} >
                <View2 />
            </div>
            <div className='flex1' onClick={() => { openOptions("openView1") }}>
                <h3 >Mumbai</h3>
                <h3>1.15Cr</h3>
                <h3 >+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div style={{ display: openView1 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '0.5rem' }} >
                <View1 />
            </div>
            <div style={{ display: openView1 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '1rem' }} >
                <View2 />
            </div>
            <div className='flex1' onClick={() => { openOptions("openView2") }}>
                <h3 >Delhi</h3>
                <h3>1.15Cr</h3>
                <h3 >+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div style={{ display: openView2 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '0.5rem' }} >
                <View1 />
            </div>
            <div style={{ display: openView2 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '1rem' }} >
                <View2 />
            </div>
            <div className='flex1' onClick={() => { openOptions("openView3") }}>
                <h3 >Hyderabad</h3>
                <h3>1.15Cr</h3>
                <h3 >+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <hr />
            <div style={{ display: openView3 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '0.5rem' }} >
                <View1 />
            </div>
            <div style={{ display: openView3 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '1rem' }} >
                <View2 />
            </div>
            <div className='flex1' onClick={() => { openOptions("openView4") }}>
                <h3 >Chennai</h3>
                <h3>1.15Cr</h3>
                <h3 >+ 1.04L</h3>
                <div className='flex'>
                    <img src={arrow} alt="" />
                </div>
            </div>
            <div style={{ display: openView4 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '0.5rem' }} >
                <View1 />
            </div>
            <div style={{ display: openView4 ? "grid" : "none", gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', paddingTop: '1rem' }} >
                <View2 />
            </div>
        </div>
    );
}
