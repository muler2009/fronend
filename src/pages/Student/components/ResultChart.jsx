import React from "react";
import {Pie, PieChart, Cell, Legend, ResponsiveContainer} from 'recharts'

const ResultChart = () => {

    const data01 = [
        { name: 'Correct', value: 70 },
        { name: 'Wrong', value: 20 },
        { name: 'Unattempted', value: 10 },
    ];

    const COLORS = ['#4ac494', '#f87a82', '#000'];

    return(
        <React.Fragment>
            <div className="w-full flex justify-center items-center font-Poppins -z-0">
                <ResponsiveContainer className={`bg-[#f5f5f5] w-full flex-1 relative `} >
                <PieChart
                    width={450}
                    height={100}
                    data={data01}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Pie data={data01} dataKey="value" nameKey="name" cx="100" cy="100" outerRadius={150} innerRadius={85} fill="#8884d8" >
                        {data01.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie> 
                    <Legend align="center" layout="horizontal" verticalAlign="bottom"/>
                </PieChart>
                </ResponsiveContainer>

            </div>
            
        </React.Fragment>
    )
}

export default ResultChart;
