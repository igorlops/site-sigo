export default function Footer() {
    return (
        <>
            <div className="bg-gray-800 py-[70px] w-full">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between flex-wrap">
                        <div className="flex flex-col items-center text-white">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500" alt="SIGO Soluções Web"/>
                            </div>
                            <h3 className="text-lg max-w-sm my-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Fugiat consectetur accusamus quo illum vel nobis
                            </h3>
                        </div>
                        <div className="flex flex-col items-center text-white">
                            <h3>Serviços</h3>
                            <p>Serviços</p>
                        </div>
                        <div className="text-white flex items-center flex-col">
                            <h3>Contato</h3>
                            <p>email@teste.com</p>
                        </div>
                        <div className="text-white flex items-center flex-col">
                            <h3>Redes sociais</h3>
                            <p>email@teste.com</p>
                        </div>
                    </div>

                    <div className="divide-x divide-gray-200 text-white">
                        Teste
                    </div>
                </div>
            </div>
        </>
    );
}