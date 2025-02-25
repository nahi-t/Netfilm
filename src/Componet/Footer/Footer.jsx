import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import"./footer.css"
export default function Footer() {
  return (
    <div className='footer-outer-container'>
        <div className='footer-iner-container'>
            <div className='footer-icone'>
                < FacebookOutlinedIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>

                

            </div>
            <div className='footer-data'>
                <div>
                    <ul>
                    <li>Audio Aiscribtion Icon</li>
                    <li>Investor Relation</li>
                    <li>Legale notation</li>
                    </ul>
                    
                </div>
               <div>
                <ul>
                    <li>Gift card</li>
                    <li>Term of use</li>
                    <li>Corporate info</li>
                </ul>
               </div>
               <div>
                <ul>
                    <li>Media center</li>
                    <li>Privacy</li>
                    <li>contact use</li>
                </ul>
               </div>

            </div>
            <div className='service-code'>
                <p>Service code</p>

            </div>
            <div className='copy-write'>
                
            &copy; 2024 Netflix by Nahom

            </div>

        </div>
      
    </div>
  )
}

