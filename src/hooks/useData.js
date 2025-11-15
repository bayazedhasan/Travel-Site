import React, { useEffect, useState } from 'react';

const useData = () => {
    const [packages,setPackages] = useState([])
    useEffect(()=>{
        fetch("/packageData.json")
        .then(res=>res.json())
        .then(data=>setPackages(data))
    },[])
    const [hotels,setHotels] = useState([])
    useEffect(()=>{
        fetch("/hotelData.json")
        .then(res=>res.json())
        .then(data=>setHotels(data))
    },[])
    return {packages,hotels}
};

export default useData;