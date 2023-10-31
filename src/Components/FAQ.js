import React from "react";
import {useState} from "react";

export default function FAQ() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <div className='FAQ'>
            <div className='faqname'>
                <h2 id='FAQ'>ЗАПИТАННЯ ТА ВІДПОВІДІ</h2>
            </div>
            <div className='wrapper'>
                <div className='accordion'>
                    {data.map((item, i) => (
                        <div className='item'>
                            <div className='title' onClick={()=> toggle(i)}>
                                {item.question}
                                <span>{selected === i ? '-' : '+'}</span>
                            </div>
                            <div className={selected === i ? 'content-show' : 'content'}>
                            {item.answer}
                            </div>
                        </div>
                ))}
            </div>
        </div>
        </div>
    )
}


const data = [
    {
        question: 'Для чого мені потрібен ріелтор?',
        answer: 'Досвідчений ріелтор допоможе вам на всіх етапах вашого шляху' +
            ' (продаж, покупка, аренда).' +
            ' Перевірить документи на квартиру і саму квартиру,' +
            ' висловить свій висновок. Домовиться про зручний для вас час для перегляду.' +
            ' Допоможе з ціною. Допоможе обрати надійного нотаріуса.',
    },
    {
        question: 'Який у вас досвід та кваліфікація?',
        answer: 'Усі рієлтори нашого агентства кваліфіковані, перебувають у реєстрі рієлторів та мають право вести свою професійну діяльність.',
    },
    {
        question: 'Скільки сьогодні може коштувати моя квартира?',
        answer: 'У нас є різні формули, за якими ми розраховуємо ситуацію.' +
            ' В нерухомості ми використовуємо показники "Швидкості поглинання" або "Рати поглинання".' +
            ' Ви берете кількість проданих об\'єктів за певний період і ділите їх на кількість активних об\'єктів на цей час.' +
            ' Якщо ця швидкість поглинання менше ніж 15%, то це ринок покупця, і об\'єкти не продаються швидко.' +
            ' Якщо швидкість поглинання становить більше ніж 20%, то це ринок продавця, і об\'єкти продаються значно швидше.' +
            ' Чим нижчий відсоток, тим більше об\'єктів на продаж, вони продаються довше, покупці мають вибір, і якщо цей процес триватиме довго, ціни будуть знижуватися.\n',
    },
    {
        question: 'За який час буде продана моя квартира?',
        answer: 'Це залежить від багатьох факторів. Повноцінну оцінку ви можете отримати зателефонувавши нам.',
    },
    {
        question: 'Чи надаєте ви юридичний супровід?',
        answer: 'Так. У нашій команді є кваліфіковані та досвідчені юристи, разом з якими ми супроводжуємо вас на всіх етапах угоди.',
    }
]