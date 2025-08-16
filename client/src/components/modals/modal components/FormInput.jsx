import React from 'react';

const FormInput = ({value, onChange}) => {
    return (
        <div className='input-div'>
            <input
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default FormInput;
