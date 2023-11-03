import React from "react"

export default function Navbar(){
    return (
        <nav>
            <div className='navbar'>
                <div className='logo'>
                    <img src={require('../images/enotlogo.png' )} alt='logo' />
                </div>
                <div className='c1'>
                    <h4><a href='#buyer'>Покупцям</a></h4>
                </div>
                <div className='c2'>
                    <h4><a href='#seller'>Продавцям</a></h4>
                </div>
                <div className='c3'>
                    <h4><a href='#FAQ'>Запитання та відповіді</a></h4>
                </div>
                <div className='c4'>
                    <h4>+38 (093) 962 08 67</h4>
                    <br/>
                    <img src={require('../images/faceicon.png' )} alt='facebook' />
                    <a href="https://www.instagram.com/enotagancy/"><img src={require('../images/insticon.png')} alt='instagram'/></a>
                    <img src={require('../images/tikicon.png' )} alt='tiktok' />
                    <img src={require('../images/teleicon.png' )} alt='telegram' />
                    <img src={require('../images/vibericon.png' )} alt='viber' />
                </div>
            </div>
        </nav>)
}
