import { useState } from 'react';
import { BsLayoutSidebarInsetReverse, BsLayoutSidebarReverse } from "react-icons/bs";

function App() {
	const [asideVisible, setAsideVisible] = useState(true);

	return (
		<div className="flex flex-col h-screen text-sm">
			<header className="bg-customgray text-cusoffwhite flex justify-between items-center border-b border-cusdialogbg">
				<h1 className="font-heading text-xl md:text-xl">header</h1>
				<button onClick={() => setAsideVisible(!asideVisible)} className="p-2 hover:bg-cusdarkmenubg rounded-md">
					{asideVisible ? <BsLayoutSidebarInsetReverse className="w-4 h-4"/> : <BsLayoutSidebarReverse className="w-4 h-4"/>}
				</button>
			</header>
			<div className="flex flex-grow overflow-hidden">
				<div className="bg-customgray h-screen text-cusoffwhite border-r border-cusdialogbg w-56">
					<nav>
						Navigation
					</nav>
				</div>
				<main className="bg-customgray h-full text-cusoffwhite flex-grow relative">
					Main Content
					<div className={`bg-customgray absolute right-0 top-0 bottom-0 text-cusoffwhite border-l border-cusdialogbg transition-transform duration-250 ease-in-out ${asideVisible ? 'translate-x-0' : 'translate-x-full'}`}>
						<aside className="w-80">
							Properties Panel
						</aside>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App