import React from 'react';

export default function DateFilter() {
    return (
        <>
            <div className='flex2' style={{ paddingBottom: '1rem' }}>
                <input type="radio" className='rad' name="day" checked id="" />
                <h3 className='options' >Today</h3>
            </div>
            <hr />
            <div className='flex2' style={{ padding: '1rem 0rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >Yesterday</h3>
            </div>
            <hr />
            <div className='flex2' style={{ padding: '1rem 0rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >WTD</h3>
            </div>
            <hr />
            <div className='flex2' style={{ padding: '1rem 0rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >MTD</h3>
            </div>
            <hr />
            <div className='flex2' style={{ padding: '1rem 0rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >QTD</h3>
            </div>
            <hr />
            <div className='flex2' style={{ padding: '1rem 0rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >YTD</h3>
            </div>
            <hr />
            <div className='flex2' style={{ padding: '1rem 0rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >Custom</h3>
            </div>
            <hr />
            <div className='flex2' style={{  paddingTop: '1rem' }}>
                <input type="radio" className='rad' name="day" id=""  />
                <h3 className='options' >Yesterday</h3>
            </div>
        </>
    );
}
