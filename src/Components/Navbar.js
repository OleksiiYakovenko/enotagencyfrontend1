import React from "react"

export default function Navbar(){
    return (
        <nav>
            <div className='navbar'>
                <div className='logo'>
                    <img src={require('../images/logo.png' )} alt='loho.png' />
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
                    <img src={require('../images/sociallogos.png')} alt='sociallogos.png' />
                </div>
            </div>
        </nav>)
}
