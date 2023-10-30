import React from "react"
import {useEffect} from 'react';

export default function Main(){
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    return (
        <div>
            <div className="upper-part1">
                <h2>
                    <span style={{color: '#FAA111'}}>Є</span>вропейська<br/>
                    <span style={{color: '#FAA111'}}>Н</span>орма<br/>
                    <span style={{color: '#FAA111'}}>О</span>селі для<br/>
                    <span style={{color: '#FAA111'}}>Т</span>ебе</h2>
                <h3><br/>Вітаємо вас у світі нерухомості, <br/> де ваші мрії стають реальністю!</h3>
            </div>
            <div className='arrow-up'>
                <button onClick={() => {
                    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}>
                    <i className='material-icons'>arrow_upward</i>
                </button>
            </div>
            <div className='upper-part2'>
                <h3>Наша агенція нерухомості в Києві - ваш надійний <br/> партнер у всіх питаннях,
                    повєязаних з купівлею, продажем <br/> чи арендою нерухомості.</h3>
            </div>
            <div className='middle-part-connector'>
                <h1>
                <span style={{color: '#FAA111'}}>ПРОДАЖ. КУПІВЛЯ.</span>
                    <span style={{color: 'white'}}>АРЕНДА.<br/> КОНСТУЛЬТАЦІЇ РІЄЛТОРА КИЇВ</span></h1>
            </div>
            <div className='middle-part1'>
                <div className='middle-part1-left'>
                    <h3>Експертна команда:</h3>
                    <img src={require('../images/expteam.png' )} alt='expteam.png' />
                    <h4>Наша агенція має<br/> команду досвідчених<br/> та кваліфікованих фахівців<br/> у галузі
                        нерухомості.</h4>
                </div>
                <div className='middle-part1-center'>
                    <h3>Повний спектр послуг:</h3>
                    <img src={require('../images/fulserv.png' )} alt='fulserv.png' />
                    <h4>Ми пропонуємо повний<br/> спектр послуг у сфері<br/> нерухомості, включаючи покупку,
                        продаж та інше.</h4>
                </div>
                <div className='middle-part1-right'>
                    <h3>Індивідуальний підхід:</h3>
                    <img src={require('../images/pers.png' )} alt='pers.png' />
                    <h4>Ми пропонуємо<br/> персоналізований підхід<br/> до кожного клієнта,<br/> враховуючи їх
                        унікальні<br/> потреби та бажання.</h4>
                </div>
            </div>
            <div className='form'>
                <div className='forminput'>
                    <input/><button>Консультація</button>
                    <h3><br/>Або зателефонуйте нам +38 (093) 962 08 67</h3>
                </div>
            </div>
            <div>
                <div className='middle-part-connector2'>
                    <h3>
                        Ваш успіх - наша мета. Ми вкладаємо всі зусилля в те,<br/> щоб забезпечити ваш успіх у пошуку нерухомості.
                    </h3>
                </div>
            </div>
            <div className="middle-part2">
                <div className="middle-part2-top">
                    <h2 id='buyer'>ПОКУПЦЯМ</h2>
                    <br/>
                    <h3><span className='pink'>1</span> НАЙКРАЩІ УГОДИ</h3>
                    <br/>
                    <h4>Ми знаємо де знаходяться найкращі пропозиції<br/> та готові знайти найвигіднішу нерухомість для вас.</h4>
                    <br/>
                    <h3><span className='pink'>2</span> ПІДТРИМКА ПІСЛЯ УГОДИ</h3>
                    <br/>
                    <h4>Наша підтримка не закінчується після покупки.<br/> Ми завжди готові допомогти вам з будь-якими<br/> питаннями або потребами щодо вашого житла.</h4>
                    <br/>
                    <h3><span className='pink'>3</span> ЗРУЧНІСТЬ І ЕФЕКТИВНІСТЬ</h3>
                    <br/>
                    <h4>Ваш комфорт і час важливі для нас, тому ми зробимо<br/> все можливе, щоб зробити процес покупки нерухомості<br/> як найзручнішим та ефективним.</h4>
                </div>
                <div className="middle-part2-bottom">
                    <h2 id='seller'>ПРОДАВЦЯМ</h2>
                    <br/>
                    <h3>ШИРОКА КЛІЄНТСЬКА БАЗА <span className='yellow'>1</span></h3>
                    <br/>
                    <h4>Ми маємо доступ до великої бази покупців,<br/> що допоможе знайти покупця<br/> для вашої нерухомості.</h4>
                    <br/>
                    <h3>ЕКСПЕРТНА ОЦІНКА <span className='yellow'>2</span></h3>
                    <br/>
                    <h4>Наші експерти нададуть чесну та об'єктивну<br/> оцінку вашій власності, щоб встановити<br/> конкурентоспроможну ціну.</h4>
                    <br/>
                    <h3> ПІДТРИМКА НА КОЖНОМУ ЕТАПІ <span className='yellow'>3</span></h3>
                    <br/>
                    <h4>Наша команда буде поруч з вами на всіх етапах<br/> продажу, від початку до закінчення.</h4>
                </div>
            </div>
        </div>
    )
}

