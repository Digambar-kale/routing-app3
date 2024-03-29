import React, { useState } from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (Option) => {
        setSelection(Option);
    };

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ]

    return (
        <div className='flex'>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
            {/* <Dropdown options={options} value={selection} onChange={handleSelect} /> */}

        </div>
    );
}

export default DropdownPage;