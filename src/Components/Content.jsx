import React, { useState } from 'react';
import Table from './Table';
import filter from '../assets/Vectorfliter.png'
import arrowDown from '../assets/Vector 633.png'
import DateFilter from './DateFilter';


export default function Content() {
    const [open, setOpen] = useState(false);

    const openOptions = () => {
        setOpen(!open);
    }
    return (
        <div style={{ display: 'block' }}>
            <div className='bg-white' style={{ height: '425px', top: '142px', left: '312px', borderRadius: '30px', padding: '2rem 4rem', marginLeft: '2rem', boxShadow: ' 0px 0px 10px #55715389' }}>
                <div className="top" style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '1rem' }}>
                    <div>
                        <h3 style={{ color: 'rgba(10, 58, 103, 1)' }}>AUM</h3>
                        <h6><i style={{ color: 'rgba(10, 58, 103, 0.6)' }}>insights of AUM of Properties with respect to their valuation</i></h6>
                    </div>
                    <div style={{ display: 'flex', height: '28px' }} >
                        <div className="button" style={{}}>
                            <img src={filter} alt="" />
                            <h3>Filter</h3>
                        </div>
                        <div className="button" onClick={openOptions}>
                            <h3  >Today</h3>
                            <img src={arrowDown} alt="" />
                        </div>
                        <div className='ab' style={{ display: open ? "grid" : "none" }} >
                            <DateFilter />
                        </div>
                    </div>
                </div>
                <div className="flex" style={{ justifyContent: 'space-evenly' }}>
                    <div className="card">
                        <h3 style={{ color: 'rgba(85, 113, 83, 0.6)' }}>Total AUM</h3>
                        < hr/>
                        <h1 style={{ color: 'rgba(85, 113, 83, 1)' }}>&#x20b9; 16.15Cr</h1>
                    </div>
                    <div className="card">
                        <h3 style={{ color: 'rgba(171, 136, 191, 0.6)' }}>Properties with valuation</h3>
                        < hr/>
                        <h1 style={{ color: 'rgba(171, 136, 191, 1)' }}>880</h1>
                    </div>
                    <div className="card">
                        <h3 style={{ color: 'rgba(156, 133, 133, 0.6)' }}>Properties without valuation</h3>
                        < hr/>
                        <h1 style={{ color: 'rgba(156, 133, 133, 1)' }}>350</h1>
                    </div>
                </div>

                <div className="flex" style={{ justifyContent: 'space-between', padding: '2rem', color: 'rgba(10, 58, 103, 0.6)', lineHeight: '21px', fontSize: '14px' }} >
                    <div className="flex ring" style={{ flexDirection: 'column' }}>
                        <h5>Total no of </h5>
                        <h5>properties</h5>
                        <h3 style={{ color: 'rgba(10, 58, 103, 1)', fontWeight: '700', fontSize: '24px', lineHeight: '36px' }}>1230</h3>

                    </div>
                    <div className="card card1">
                        <h5 style={{ color: 'rgba(10, 58, 103, 0.6)' }}>Properties with valuation</h5>
                        <div className="flex" style={{ justifyContent: 'space-between', paddingTop: '1rem' }}>
                            <h4 style={{ color: 'rgba(198, 61, 47, 0.6)' }}>IA-AI-verified</h4>
                            <h4 style={{ color: 'rgba(198, 61, 47, 1)', fontSize: '23px' }}>256</h4>
                        </div>
                        <br/>
                            < hr/>
                        <div className="flex" style={{ justifyContent: 'space-between', paddingTop: '1rem' }}>
                            <h4 style={{ color: 'rgba(53, 162, 159, 0.6)' }}>PRM</h4>
                            <h4 style={{ color: 'rgba(53, 162, 159, 1)', fontSize: '23px' }}>624</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Table />
        </div>
    );
}
