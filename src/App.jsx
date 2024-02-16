import React from 'react'
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

export const App = () => {
  return (
    <div className='w-[100%] max-w-[90rem] mx-auto'>
      <NavbarView />
      <MainView />
      <TrustedView />
      <GrowView />
      <CommerceView />
      <CampaignView />
      <DoView />
      <BrandsView />
      <IndustryView />
      <EcoSystemView />
      <BookView />
      <ConnectView />
      <FooterView />
    </div>
  );
}

