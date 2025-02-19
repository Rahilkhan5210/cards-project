import React from 'react'

const Filters = (props) => {
    let filterData = props.filterData;
    let category =props.category;
    let setCategory=props.setCategory;


    function filterHandler(title){
        setCategory(title);
    }

    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4  py-4 mx-auto justify-center">
            {
             
             filterData.map( (data) => (
                <button
                className={`text-lg px-2 py-1 rounded-md font-medium 
            text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300
            ${category === data.title ? 
                "bg-opacity-70 border-white" :
                "bg-opacity-60 border-transparent"}
                 `}  
                key = {data.id}
                onClick= { () => filterHandler(data.title)} >

                {data.title}</button> 
             ))
            }
        </div>
    )
}
export default Filters;