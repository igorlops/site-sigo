interface CardProps {
    title:string;
    content:JSX.Element;
    image: JSX.Element;
}
export default function Card({title, content, image} : CardProps) {

    return (
        <>
            <div className="group relative">
                <div className="bg-gray-800 aspect-h-1 aspect-w-1 sm:w-[23em] lg:w-[25em] overflow-hidden ring-1 ring-inset ring-amber-200/10 rounded-md lg:aspect-none hover:shadow-amber-300/10 hover:shadow-lg transition ease-in-out duration-300 hover:scale-105 p-7">
                    <div className="flex flex-col text-white justify-center items-center gap-y-2">
                        <div className="w-[80px]">
                            {image}
                        </div>
                        <div className="flex flex-col text-white text-center">
                            <div className="text-xl font-bold font-sans text-amber-300">
                                {title}
                            </div>
                            <div className="text-sm py-3">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}