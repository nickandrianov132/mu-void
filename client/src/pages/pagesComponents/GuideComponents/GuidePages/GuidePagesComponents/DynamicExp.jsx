import React from 'react';

const DynamicExp = () => {
    return (
        <>
                <table className='dynamic_exp_table'>
                    <thead>
                        <tr>
                            <th className='th_title' colSpan={2}>🔥Bonus Exp for Easy Resets</th>
                        </tr>
                        <tr>
                            <th className='th_1'>Reset:</th>
                            <th className='th_2'>Exp:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='tr_1st'>
                            <td>1st</td>
                            <td>100x</td>
                        </tr>
                        <tr className='tr_2nd'>
                            <td>2nd</td>
                            <td>90x</td>
                        </tr>
                        <tr className='tr_3rd'>
                            <td>3rd</td>
                            <td>80x</td>
                        </tr>
                        <tr className='tr_4th'>
                            <td>4th</td>
                            <td>70x</td>
                        </tr>
                        <tr className='tr_5th'>
                            <td>5th</td>
                            <td>60x</td>
                        </tr>
                        <tr className='tr_6th'>
                            <td>6th+</td>
                            <td>50x</td>
                        </tr>
                    </tbody>
                </table>  
        </>
    );
}

export default DynamicExp;
