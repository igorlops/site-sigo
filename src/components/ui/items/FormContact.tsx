import { InputText } from "./InputText";

export default function FormContact() {
    return (
        <>
            <form action="" method="post">
                <div className="pb-5">
                    <h2 className="text-base font-semibold leading-7 text-amber-300">Preencha seus dados aqui</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-300">Solicite já um orçamento, vamos fazer seu negócio decolar.</p>

                    <div className="mt-10 flex flex-wrap flex-col text-white">
                        <div className="sm:col-span-3 my-3">
                            <InputText label="Primeiro nome" name="first-name" type="text"/>
                        </div>

                        <div className="sm:col-span-3 my-3">
                            <InputText label="Segundo nome" name="last-name" type="text"/>
                        </div>

                        <div className="sm:col-span-4 my-3">
                            <InputText label="Seu melhor e-mail" name="email" type="email"/>
                        </div>
                        <div className="sm:col-span-4 my-3">
                            <InputText label="Telefone" name="phone" type="text"/>
                        </div>
                        <div className="sm:col-span-4 my-3">
                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-50">Digite aqui a sua idéia</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                maxLength={30} 
                                className="block w-full rounded-lg border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-amber-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-300 focus:outline-none sm:text-sm sm:leading-8 focus:shadow focus:shadow-md focus:transition focus:shadow-amber-300"
                                placeholder="Digite sua idéia aqui"></textarea>
                        </div>
                    </div>
                </div>
                <button className="hover:scale-105 transition duration-300 ease-in-out px-5 py-2 my-5 bg-amber-300 rounded-md hover:bg-amber-600 hover:ring-amber-700 hover:text-white font-bold ring-1 ring-inset ring-amber-400" type="submit">Enviar</button>
            </form>
        </>
    )
}