import React, { useState } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';

export default function Table() {
    return (
        <div className='flex'>
            <Table1/>
            <Table2/>
        </div>
    );
}
