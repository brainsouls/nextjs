import React, { useState } from 'react'

function FAQs({ question, answer, answer2 }) {
    const [show, setshow] = useState(false)
    return (
        <div>
            <div className='faq-div1 mt-4'>
                <div className='d-flex align-items-center faq-question-div1'>
                    <h1 className='faq-text1' onClick={() => setshow(!show)}>{question}</h1>
                    <svg onClick={() => setshow(!show)} className='faqs-plus-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M0 12L24 12" stroke="black" stroke-width="1.5" />

                        <path className={`${show ? "d-none" : "d-block"}`} d="M12 0L12 24" stroke="black" stroke-width="1.5" />
                    </svg>
                </div>
                <div className=' '>
                    {
                        show && <div className="faq-answer-div1">
                            <p className="faq-text2">{answer}</p>
                            <p className="faq-text2">{answer2}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default FAQs
