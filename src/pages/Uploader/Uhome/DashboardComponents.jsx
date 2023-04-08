import React from 'react'
import { 
    Legend, 
    BarChart, 
    Bar, 
    ResponsiveContainer, 
    Tooltip, 
    YAxis, 
    XAxis,
    CartesianGrid 
} from 'recharts'


const DashboardComponents = () => {
  return (
    <div>DashboardComponents</div>
  )
}

export const ModuleNumberChart = () => {

    const module_bar = [
        {  name: 'Mo_1', pv: 10, file: 20 },
        {  name: 'Mo_2', pv: 30, file: 30 },
        {  name: 'Mo_3', pv: 60, file: 10 },
        {  name: 'Mo_4', pv: 40, file: 50 },
        {  name: 'Mo_5', pv: 10, file: 60 },        
    ]

    return(
        <React.Fragment>
           <div className={`font-Poppins text-sm mt-10`} >

            <ResponsiveContainer width={350} height={200}>
                <BarChart data={module_bar} barSize={10} barGap={10} >
                    <XAxis dataKey="name" />
                    <YAxis hide="true" padding={{ top: 20 }} dataKey="pv" />
                    <Legend verticalAlign='top' />
                    <CartesianGrid vertical={false} strokeDasharray='4' stroke="#c9c9c9" />
                    <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                    <Bar dataKey="file" barSize={20} fill="green" />
                   
                </BarChart>
            </ResponsiveContainer>
           </div>
        </React.Fragment>
    )
}

export const UploaderAccount = () => {

    return(
        <React.Fragment>
            <div className={`w-full p-5`}>
               <div className={`flex justify-center items-center`}>
                    <h1>Section for displaying something CSV </h1>
               </div>
            </div>
        </React.Fragment>
    )
} 


