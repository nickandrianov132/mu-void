import React from 'react';

const DynamicExp = () => {
    return (
        <>
                <table className='dynamic_exp_table'>
                    <thead>
                        <tr>
                            <th className='th_title' colSpan={2}>🔥Bonus Exp for first 5 Resets</th>
                        </tr>
                        <tr>
                            <th className='th_1'>Reset:</th>
                            <th className='th_2'>Exp:</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className='tr_0th'>
                            <td>0th</td>
                            <td>100x</td>
                        </tr> */}
                        <tr className='tr_1st'>
                            <td>1st</td>
                            <td>250x</td>
                        </tr>
                        <tr className='tr_2nd'>
                            <td>2nd</td>
                            <td>230x</td>
                        </tr>
                        <tr className='tr_3rd'>
                            <td>3rd</td>
                            <td>210x</td>
                        </tr>
                        <tr className='tr_4th'>
                            <td>4th</td>
                            <td>190x</td>
                        </tr>
                        <tr className='tr_5th'>
                            <td>5th</td>
                            <td>150x</td>
                        </tr>
                        <tr className='tr_6th'>
                            <td>6th+</td>
                            <td>140x</td>
                        </tr>
                        <tr className='tr_7th'>
                            <td>7th</td>
                            <td>130x</td>
                        </tr>
                        <tr className='tr_8th'>
                            <td>8th</td>
                            <td>120x</td>
                        </tr>
                        <tr className='tr_9th'>
                            <td>9th</td>
                            <td>110x</td>
                        </tr>
                        <tr className='tr_10th'>
                            <td>10th - 20th</td>
                            <td>100x</td>
                        </tr>
                        {/* <tr className='tr_16th'>
                            <td>16th - 19th</td>
                            <td>35x</td>
                        </tr> */}
                        {/* <tr className='tr_20th'>
                            <td>20th</td>
                            <td>20x</td>
                        </tr> */}
                    </tbody>
                </table>  
        </>
    );
}

export default DynamicExp;
