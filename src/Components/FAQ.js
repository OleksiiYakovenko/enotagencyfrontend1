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
            <div className='endword'>
                <h2>
                    Звертайтесь до нас, і ми допоможемо вам знайти ідеальну нерухомість в Києві.
                    Разом ми зробимо ваші нерухомісні мрії реальністю!
                </h2>
            </div>
        </div>
        </div>
    )
}


const data = [
    {
        question: 'Для чого мені потрібен ріелтор?',
        answer: 'Досвідчений ріелтор допоможе вам на всіх етапах вашого шляху' +
            ' (чи то продаж, чи то покупка, не важливо).' +
            ' Кваліфікований ріелтор зробить якісні фотографії' +
            ' (наше агентство надає професійного фотографа).' +
            ' Перевірить документи на квартиру і саму квартиру,' +
            ' і висловить свій висновок. Домовиться про зручний для вас час для перегляду.' +
            ' Допоможе з ціною. Поможе обрати надійного нотаріуса.',
    },
    {
        question: 'Питання2',
        answer: 'Відповідь2',
    },
    {
        question: 'Питання3',
        answer: 'Відповідь3',
    },
    {
        question: 'Питання4',
        answer: 'Відповідь4',
    },
    {
        question: 'Питання5',
        answer: 'Відповідь5',
    }
]