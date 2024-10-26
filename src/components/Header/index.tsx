export default function Header() {
    return (
        <div className="w-full flex justify-between px-4 py-1 backdrop-blur-md h-16 max-w-screen-xl items-center fixed top-0">
            <p className="font-extrabold text-2xl">Darren Nathaneil</p>
            {/* <div className="gap-4 flex items-center">
                <p className="hover:scale-105 transition-all duration-100 hover:font-bold cursor-pointer">
                    About Me
                </p>
                <p className="hover:scale-105 transition-all duration-100 hover:font-bold cursor-pointer">
                    Projects
                </p>
                <p className="hover:scale-105 transition-all duration-100 hover:font-bold cursor-pointer">
                    Contact
                </p>
            </div> */}
        </div>
    );
}
