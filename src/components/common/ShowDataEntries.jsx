import React from "react"


const ShowDataEntries = (props) => {

    const { pageSize, setPageSize } = props
    return(
        <React.Fragment>
            <div className={`flex`}>         
                <div className="flex space-x-4">
                    <div className="flex items-center justify-center font-Poppins text-sm">Show Entries</div>
                    <div className={`flex justify-start`}>
                        
                        <select className="select-sm" type="number" value={pageSize} onChange={(event) => setPageSize(Number(event.target.value))}>
                            {
                                [2, 5, 10, 15, 20].map(pageSize => (
                                    <option key={pageSize} value={pageSize}>
                                        {`${pageSize}`}
                                    </option>
                                ))
                            }

                        </select>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}


export default ShowDataEntries;