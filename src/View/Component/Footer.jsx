import React from 'react';
import Logo from '../../assets/logo.png'

const Navbar = () => {

    return (
        <div class="try-earkick__container">
            <div class="circle-earkick">
                <img class="earkick-bear" src={Logo} alt="Earkick bear"  />
            </div>
            <h2 className='text-white'>Try Wiser-Adviser today!</h2>
            <p className='text-white'>Track and improve your mental health in real time

            </p>
            <div class="powered-by-eleven-labs">
                <h3 className='text-white'>Powerd by Wiserbee.ca</h3>
            </div>
        </div>
    );
};

export default Navbar;
