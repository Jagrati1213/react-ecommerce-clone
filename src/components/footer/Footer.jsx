import React from 'react';
import FooterList from './FooterList';
import {FaInstagram,FaFacebook, FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
    <footer className="text-center footer bg-slate text-whiteSmoke md:pt-10 pt-2">
        <div className="w-full p-4">
            <div className="flex md:flex-row flex-col md:justify-evenly justify-center md:text-start mt-5">
                {/* Company name  */}
                <div className="md:my-0 my-5 mx-5">
                    <h4 className="pb-3 font-semibold text-xl">E-commerce</h4>
                    <p className="copy-right text-[16px]"> Copyright©.</p>
                </div>

                 {/* Links */}
                <FooterList title={'Solution'} linkArr={['link name','link name']}/>
                <FooterList title={'Quick Link'} linkArr={['link name','link name']}/>
                <FooterList title={'Others'} linkArr={['link name']}/>
            </div>
       </div>
       <div className='bg-gray-800 py-4 italic'>Let's Shop</div>
  </footer>
  )
}

export default Footer