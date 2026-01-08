import React from 'react';

const CSLordMixRewards = ({ title, timing, opt, weaponsExc, weaponsArch, weaponsSock, armorsExc, armorsSock, shieldExc, shieldSock, ancient }) => {
    return (
        <div className='reward_wrapper'>
            <h4 className='reward_h4'>{title}</h4>
            <h4 className='reward_h5'>{timing}</h4>
            <h4 className='reward_h6'>{opt}</h4>
            <div className='reward_item'>
                <div className='reward_item_title'><b>Weapons:</b></div>
                <div className='reward_item_content'>
                    <div>
                        <em className='excellent'>{weaponsExc}</em>
                        {weaponsArch &&
                            <em className='divine'>{weaponsArch}</em>
                        }
                        {weaponsSock &&
                            <em className='socket'>{weaponsSock}</em>
                        }
                    </div> 
                </div>
            </div>
            <div className='reward_item'>
                <div className='reward_item_title'><b>Armors:</b></div>
                <div className='reward_item_content'>
                    <div>
                        <em className='excellent'>{armorsExc}</em>
                        {armorsSock &&
                            <em className='socket'>{armorsSock}</em>
                        }
                    </div> 
                </div>
            </div>
            {shieldExc || shieldSock &&
            <div className='reward_item'>
                <div className='reward_item_title'><b>Shield:</b></div>
                <div className='reward_item_content'>
                    <div>
                        {shieldExc &&
                            <em className='excellent'>{shieldExc}</em>
                        }
                        {shieldSock &&
                        <em className='socket'>{shieldSock}</em>
                        }
                    </div> 
                </div>    
            </div>
            }
            {ancient &&
            <div className='reward_item'>
                <div className='reward_item_title'><b>Ancient Sets:</b></div>
                <div className='reward_item_content'>
                    <div>
                        <em className='ancient'>{ancient}</em>
                    </div> 
                </div>    
            </div>
            }
        </div> 
    );
}

export default CSLordMixRewards;
