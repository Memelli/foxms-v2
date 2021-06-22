import React, { useState } from 'react'
import Accordion from '../../components/utils/accordion'
import data from '../../components/utils/accordion/questions'

const Suporte = () => {
    const [questions, setQuestions] = useState(data)

    return (
        <>
            <div className="flex justify-center">
                <div className="h-screen my-10 w-full lg:w-5/6 shadow-md">
                    <div className="flex items-center flex-col">
                        <div className="text-5xl font-thin">Suporte</div>
                        <div>
                            Abaixo estão algumas das principais dúvidas que nossos jogadores já tiveram.
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <center>
                            {questions.map((question) => (
                                <Accordion key={question.id} {...question} />
                            ))}
                        </center>
                    </div>
                    <div className="flex items-center mt-5 flex-col">
                        <small>Ainda tem alguma dúvida? Entre em contato com o nosso suporte via <a href="/" className="text-blue-500 hover:underline hover:text-blue-600">Discord</a>.</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Suporte
