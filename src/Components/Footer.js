import React from "react"

export default function Footer(){
    return (
        <footer>
            <div className='footer-developed'>
                <div className='footer-left'>
                    <div className='footer-logo'>
                        <img src={require('../images/enotlogo2.png')} alt='pers.png' />
                    </div>
                    <div className='footer-icon'>
                        <h3>Звертайтесь до нас і ми допоможемо<br/> знайти ідеальну оселю в Києві.</h3>
                        <br/>
                        <br/>
                        <h4>+38 (093) 962 08 67</h4>
                        <br/>
                        <img src={require('../images/teleicon.png')} alt='telegram' />
                        <img src={require('../images/vibericon.png')} alt='viber' />
                        <img src={require('../images/faceicon.png')} alt='facebook' />
                        <a href="https://www.instagram.com/enotagancy/"><img src={require('../images/insticon.png')} alt='instagram.png' /></a>
                        <img src={require('../images/tikicon.png')} alt='tiktok' />
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>© 2023 Developed by WeAreACompany. </p>
                </div>
                <div className='footer-right'>
                    <div className='footer-right-text'>
                        <h3><a href='#buyer'>Покупцям</a></h3>
                        <br/>
                        <h3><a href='#seller'>Продавцям</a></h3>
                        <br/>
                        <h3><a href='#FAQ'>Запитання та відповіді</a></h3>
                        <br/>
                        <h4>Адреса офісу: вул. Левка Лук'яненко 2л, офіс 8<br/> (стара адреса Маршала Тимошенко 2л)</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}