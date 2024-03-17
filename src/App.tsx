import { useState } from 'react';
import { BsLayoutSidebar, BsLayoutSidebarInset, BsLayoutSidebarInsetReverse, BsLayoutSidebarReverse } from "react-icons/bs";

function App() {
	const [navVisible, setNavVisible] = useState(true);
	const [asideVisible, setAsideVisible] = useState(true);

	return (
		<div className="grid grid-rows-[auto,1fr] h-screen overflow-hidden text-sm">
			<header
				className="bg-customgray text-cusoffwhite flex justify-between items-center border-b border-cusdialogbg">
				<button onClick={() => setNavVisible(!navVisible)}
						className="p-2 hover:bg-cusdarkmenubg rounded-md">
					{navVisible ? <BsLayoutSidebarInset className="w-4 h-4"/> :
						<BsLayoutSidebar className="w-4 h-4"/>}
				</button>
				<h1 className="font-heading text-xl md:text-xl">header</h1>
				<button onClick={() => setAsideVisible(!asideVisible)}
						className="p-2 hover:bg-cusdarkmenubg rounded-md">
					{asideVisible ? <BsLayoutSidebarInsetReverse className="w-4 h-4"/> :
						<BsLayoutSidebarReverse className="w-4 h-4"/>}
				</button>
			</header>
			<div className="flex flex-grow overflow-hidden">
				<div className={`bg-customgray h-full text-cusoffwhite border-r border-cusdialogbg transition-all duration-250 ease-in-out ${navVisible ? 'w-56' : 'w-0'}`}>
					{navVisible && (
						<nav>
							Navigation
						</nav>
					)}
				</div>
				<main className="bg-customgray h-full text-cusoffwhite flex-grow flex justify-between">
					<div>Main Content</div>
					<div
						className={`bg-customgray h-full text-cusoffwhite border-l border-cusdialogbg transition-all duration-250 ease-in-out ${asideVisible ? 'w-80' : 'w-0'}`}>
						{asideVisible && (
							<aside>
								Properties Panel
							</aside>
						)}
					</div>
				</main>
			</div>
		</div>
	)
}

export default App