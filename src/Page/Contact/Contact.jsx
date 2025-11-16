import React from 'react';
import ContactElement from './ContactComponent/ContactElement';
import Footer from '../../Components/Shared/Footer';
import ScrollToTop from '../../Components/Shared/ScrollToTop';

const Contact = () => {
    return (
        <div>
            <ContactElement></ContactElement>
            <ScrollToTop></ScrollToTop>
            <Footer></Footer>
        </div>
    );
};

export default Contact;