import React, { useState } from 'react'
import * as Fi from 'react-icons/fi'
import UpgradeAccountModal from './UpgradeAccountModal'

const UpgradeAccountOnDashboard = () => {
    const [upgradeModalshowState, setUpgradeModalShowState] = useState(false)


    return(
        <React.Fragment>
           <div className={`flex flex-col text-sm`}>
                <div className={`bg-yellow-50 shadow-lg`}>
                    <div className={`flex flex-col py-4 px-5 text-red-600`}>
                        <h1 className={`font-Poppins flex items-center text-[16px] justify-start`}><span className={`mr-1`}><Fi.FiInfo /></span>Attention</h1>
                        <p className={`text-sm font-Poppins  my-5`}>
                            You can possibly upgrade your account to have more question s.
                        </p>
                    </div>
                </div>
                <div className={`bg-white my-0.5 py-4 px-5 flex justify-between items-center font-Poppins`}>
                    <h1 className={`text-sm`}>200 Questions per module</h1>
                    <p>200 ETB</p>
                    <button className={`btn-sm px-4 bg-[#e6720c] text-white`} onClick={() => setUpgradeModalShowState(prev => !prev)}>Upgrade</button>
                </div>

                <div className={`bg-white my-0.5 py-4 px-5 flex justify-between items-center font-Poppins`}>
                    <h1 className={`text-sm`}>100 Questions per module</h1>
                    <p>200 ETB</p>
                    <button className={`btn-sm px-4 bg-[#e6720c] text-white`}>Upgrade</button>
                </div>

                <div className={`bg-white my-0.5 py-4 px-5 flex justify-between items-center font-Poppins`}>
                    <h1 className={`text-sm`}>200 Questions per module</h1>
                    <p>300 ETB</p>
                    <button className={`btn-sm px-4 bg-[#e6720c] text-white`}>Upgrade</button>
                </div>

                <div className={`bg-white my-0.5 py-4 px-5 flex justify-between items-center font-Poppins`}>
                    <h1 className={`text-sm`}>100 Questions per module</h1>
                    <p>100 ETB</p>
                    <button className={`btn-sm px-4 bg-[#e6720c] text-white`}>Upgrade</button>
                </div>
                <div className={`bg-white my-0.5 py-4 px-5 flex justify-between items-center font-Poppins`}>
                    <h1 className={`text-sm`}>100 Questions per module</h1>
                    <p>100 ETB</p>
                    <button className={`btn-sm px-4 bg-[#e6720c] text-white`}>Upgrade</button>
                </div>
                
           </div>

           <UpgradeAccountModal
                upgradeModalshowState={upgradeModalshowState}
                setUpgradeModalShowState={setUpgradeModalShowState} 
            />

        </React.Fragment>
    )
}

export default UpgradeAccountOnDashboard