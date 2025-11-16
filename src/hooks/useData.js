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
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch("/blogData.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    const [gallery,setGallery] = useState([])
    useEffect(()=>{
        fetch("/gallery.json")
        .then(res=>res.json())
        .then(data=>setGallery(data))
    },[])
    const [customerss,setCustomerss] = useState([])
    useEffect(()=>{
        fetch("/customerData.json")
        .then(res=>res.json())
        .then(data=>setCustomerss(data))
    },[])
    return {packages,hotels,blogs,gallery,customerss}
};

export default useData;