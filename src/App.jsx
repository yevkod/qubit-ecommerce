import React, { useState } from 'react'
import './App.css';
import { NavbarView } from './components/navbar/NavbarView';
import { MainView } from './components/main/MainView';
import { TrustedView } from './components/trusted/TrustedView';
import { GrowView } from './components/grow/GrowView';
import { CommerceView } from './components/commerce/CommerceView';
import { CampaignView } from './components/campaign/CampaignView';
import { DoView } from './components/do/DoView';
import { BrandsView } from './components/brands/BrandsView';
import { IndustryView } from './components/industry/IndustryView';
import { EcoSystemView } from './components/ecosystem/EcoSystemView';
import { BookView } from './components/book/BookView';
import { ConnectView } from './components/connect/ConnectView';
import { FooterView } from './components/footer/FooterView';
import { BurgerMenuView } from './components/burgerMenu/BurgerMenuView';

export const App = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className='w-[100%] mx-auto'>
      {menu && (
        <div className='flex lg:hidden fixed rounded-lg z-[50] top-[60px] right-0 flex-col shadow-md bg-white'>
          <BurgerMenuView setMenu={setMenu}/>
        </div>
      )}
      <NavbarView menu={menu} setMenu={setMenu} />
      <div id='mainView'><MainView /></div>
      <div id='trustedView'><TrustedView /></div>
      <div id='growView'><GrowView /></div>
      <div id='commerceView'><CommerceView /></div>
      <div id='campaignView'><CampaignView /></div>
      <div id='doView'><DoView /></div>
      <div id='brandsView'><BrandsView /></div>
      <div id='industryView'><IndustryView /></div>
      <div id='ecoSystemView'><EcoSystemView /></div>
      <div id='bookView'><BookView /></div>
      <div id='connectView'><ConnectView /></div>
      <FooterView />
    </div>
  );
}

