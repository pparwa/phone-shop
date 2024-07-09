import React from 'react'
import HomeProduction from '../Components/HomeProduction'
import iphonepro from '../assets/images/iphone-14-pro.webp'
import mac from "../assets/images/mac-system-cut.jfif"
import FeatureProducs from '../Components/FeatureProducs'
export default function Home() {
  return (
    <div style={{width:'100%',height:'100%'}}>
          
 <HomeProduction pic={iphonepro} title={'iphone14 pro'}
 text={'Together, stylized in all caps), commonly known as TXT (/ˈtiː-ˈɛks-ˈtiː/ TEE-eks-tee), is a South Korean boy band formed by Big Hit Entertainment, now known as Big Hit Music.'}/>

 <FeatureProducs />
   <HomeProduction pic={mac} title={'Mac laptob'} text={'Together, stylized in all caps), commonly known as TXT (/ˈtiː-ˈɛks-ˈtiː/ TEE-eks-tee), is a South Korean boy band formed by Big Hit Entertainment, now known as Big Hit Music.'}/>
    
    </div>       
  )
}
