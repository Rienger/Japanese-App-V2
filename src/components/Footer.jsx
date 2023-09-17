import React from 'react'


function Footer(){


    const currentYear = new Date().getFullYear()



    return <div className='footer'>
        <div className='footer-content'>
            <h3>Yana Nihongo</h3>
            <p>ito ay maingat at malubhasang nilikha ng mga batikang propesyonal sa aralin ng dayuhang linggwistika na nanggaling mula sa bansa ng katangi tanging husay at talino, eto ay ang Pilipinas.</p>
            <ul className='socials'>
                <li><ion-icon name="logo-facebook"></ion-icon></li>
                <li><ion-icon name="logo-twitter"></ion-icon></li>
                <li><ion-icon name="logo-instagram"></ion-icon></li>
                <li><ion-icon name="logo-linkedin"></ion-icon></li>
                <li><ion-icon name="mail-outline"></ion-icon></li>
            </ul>
        </div>
        <div className='footer-bottom'>
            <p>{currentYear} copyright © L.R. corporation</p>
        </div>
    </div>
}

export default Footer;