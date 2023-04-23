import React,{ useState } from 'react'
import * as Fi from 'react-icons/fi'
import { upgradeData } from '../constants/bankattribute'
import UpgradeAccountModal from './UpgradeAccountModal'
import UpgradeAccountOnDashboard from './UpgradeAccountOnDashboard'

const UpgradeAccount = () => {
  const [upgradeModalshowState, setUpgradeModalShowState] = useState(false)

  return (
    <div className="w-full md:flex px-5">
        <div className="flex-1 flex-col gap-3 my-5 relative">
            <h1 className="font-Oswald tracking-wide text-center xs:text-[25px] before:content-[''] before:absolute before:top-5 before:left-5 before:xs:w-[20%] before:sm:w-[30%] before:md:w-[35%] before:bg-[#09bdd9] before:h-[1px] after:content-[''] after:absolute after:top-5 after:right-5 after:xs:w-[20%] after:sm:w-[30%] after:md:w-[35%] after:bg-[#09bdd9] after:h-[1px]">Upgrade Package</h1>

            <div className="flex-col items-center justify-center">
              {/* Attension section  */}
              <div className={`w-full bg-yellow-50 mt-5 shadow-lg`}>
                <div className={`flex flex-col py-4 px-5 text-red-600`}>
                    <h1 className={`font-Poppins flex items-center text-[16px] justify-start`}><span className={`mr-1`}><Fi.FiInfo /></span>Attention</h1>
                    <p className={`text-sm font-Poppins  my-5`}>
                        You can possibly upgrade your account to have more question s.
                    </p>
                </div>
              </div>

              <div className="">
                {
                  upgradeData?.map((upgrade,index) => (
                    <div className="flex justify-between items-center py-2" key={index}>
                      <h1 className="font-Poppins">{upgrade.quesPerModule}</h1>
                      <p>{upgrade.payment}</p>
                      <button className={`btn-sm px-4 bg-[#e6720c] text-white`} onClick={() => setUpgradeModalShowState(prev => !prev)}>Upgrade</button>
                    </div>
                  ))
                }
              </div>
            </div>  
        </div>

        <UpgradeAccountModal
            upgradeModalshowState={upgradeModalshowState}
            setUpgradeModalShowState={setUpgradeModalShowState} 
        />
    </div>
  )
}

export default UpgradeAccount