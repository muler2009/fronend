import React from "react";
import {Pie, PieChart, Cell, Legend, ResponsiveContainer} from 'recharts'
// import ProgressBar from "../ui/ProgressBar";
import UpgradeAccountOnDashboard from "./UpgradeAccountOnDashboard";


const StudentGeneralStastics = () => {
    return(
        <React.Fragment>
            <section className={`w-full py-1 pb-3 flex gap-5 px-1 sm:flex-col md:flex-row lg:flex-row lg:space-x-1`}>
                <div className={`shadow-md bg-gray-50 px-5 space-y-5 sm:w-full sm:px-16 md:w-1/2 lg:w-1/2`}>
                    <div className={`flex justify-between items-center py-5`}>
                        <h1 className={`font-Poppins text-[15px]`}>Overall Performace</h1>
                        <div className={`border-[1px] rounded-lg p-1 space-x-3`}>
                            <button className={`text-[12px] btn-sm px-5 focus:bg-indigo-500 focus:text-white`}>Accuracy</button>
                            <button className={`text-[12px] btn-sm bg-white focus:bg-indigo-500 focus:text-white`}>Avg-Time</button>
                        </div>
                    </div>

                    <Scharts />
                    {/* <StudentProgressChart /> */}
                </div>

                <div className={`bg-gray-100 sm:w-full md:w-1/2 lg:w-2/3`}>
                    <UpgradeAccountOnDashboard />
                </div>
            </section>
        </React.Fragment>
    )
}

export default StudentGeneralStastics;






export const Scharts = () => {

    const data01 = [
        { name: 'Correct', value: 70 },
        { name: 'Wrong', value: 20 },
        { name: 'Unattempted', value: 10 },
    ];

    const COLORS = ['#4ac494', '#f87a82', '#000'];

    return(
        <React.Fragment>
            <div className="w-full container mx-auto bg-[#f5f5f5] font-Poppins -z-0">
                <ResponsiveContainer>
                    <PieChart width={450} height={250} s>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="140" cy="100" outerRadius={100} innerRadius={50} fill="#8884d8" >
                            {data01.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie> 
                        <Legend align="left" layout="horizontal" verticalAlign="bottom"/>
                    </PieChart>
                </ResponsiveContainer>

            </div>
            
        </React.Fragment>
    )
}













export const StudentProgressChart = () => {

    const data = [
        { bgcolor: "#071466", completed: 60 },
    ]

    const labelStyles = {
        padding: 5,
        color: 'black',
        fontWeight: 'bold'
      }

      const fillerStyles = {
        height: '100%',
        width: `${data.completed}%`,
        backgroundColor: data.bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
      }

    return(
        <React.Fragment>
            <div className={`flex flex-col my-5`}>
                <div className={`relative`}>
                    <h1 className={`font-Oswald tracking-wide text-[18px] text-[#071466] after:content-[""] after:absolute after:top-4 after:bg-[#ddd] after:w-[70%] after:h-[1px] after:ml-5 `}>Your Progress</h1>
                </div>

                <div className={`flex flex-col p-3 rounded-lg bg-[#f9fafe]`}>
                    <h1 className={`text-sm font-Poppins`}>Overall</h1>
                    <div className={`flex justify-between`}>
                        <h2 className={`font-Poppins text-[12px]`}>1 of 5 module done</h2>
                      
                     
                            
                      
                    </div>  
                    {/* {data.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    ))} */}

                </div>  
            </div>
        </React.Fragment>
    )

}