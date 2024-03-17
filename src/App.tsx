import { useState } from 'react';
import { BsLayoutSidebar, BsLayoutSidebarInset, BsLayoutSidebarInsetReverse, BsLayoutSidebarReverse } from "react-icons/bs";

function App() {
	const [navVisible, setNavVisible] = useState(true);
	const [asideVisible, setAsideVisible] = useState(true);

	return (
		<div className="flex h-screen overflow-hidden text-sm">
			<div className={`bg-customgray h-full text-cusoffwhite border-r border-cusbuttonoutline transition-all duration-250 ease-in-out ${navVisible ? 'w-56' : 'w-0'}`}>
				{navVisible && (
					<nav>
						Navigation
					</nav>
				)}
			</div>
			<main className="bg-customgray h-full text-cusoffwhite flex-grow">
				<header className="bg-customgray text-cusoffwhite flex justify-between items-center border-b border-cusbuttonoutline">
					<button onClick={() => setNavVisible(!navVisible)} className="p-2 hover:bg-cusdarkmenubg rounded-md">
						{navVisible ? <BsLayoutSidebarInset className="w-4 h-4"/> : <BsLayoutSidebar className="w-4 h-4"/>}
					</button>
					<button onClick={() => setAsideVisible(!asideVisible)} className="p-2 hover:bg-cusdarkmenubg rounded-md">
						{asideVisible ? <BsLayoutSidebarInsetReverse className="w-4 h-4"/> : <BsLayoutSidebarReverse className="w-4 h-4"/>}
					</button>
				</header>
				Main Content
			</main>
			<div className={`bg-customgray h-full text-cusoffwhite border-l border-cusbuttonoutline transition-all duration-250 ease-in-out ${asideVisible ? 'w-80' : 'w-0'}`}>
				{asideVisible && (
					<aside>
						Properties Panel
					</aside>
				)}
			</div>
		</div>
	)
}

export default App