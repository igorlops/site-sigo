interface ButtonCTAProps {
    title: string;
}

export default function ButtonCTA({title} : ButtonCTAProps) {
    return (
        <a href="#" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 px-5 py-2 my-5 bg-amber-300 rounded-md hover:bg-amber-600 hover:ring-amber-700 hover:text-white font-bold ring-1 ring-inset ring-amber-400">
          {title}
        </a>
    )

}