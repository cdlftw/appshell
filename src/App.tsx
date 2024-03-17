import { useState } from 'react';
import { BsLayoutSidebar, BsLayoutSidebarInset, BsLayoutSidebarInsetReverse, BsLayoutSidebarReverse } from "react-icons/bs";

function App() {
	const [navVisible, setNavVisible] = useState(true);
	const [asideVisible, setAsideVisible] = useState(true);

	const mainClasses = `bg-customgray h-full text-cusoffwhite ${
		!navVisible && !asideVisible ? 'col-start-1 col-end-6' :
			!navVisible ? 'col-start-1 col-end-5' :
				!asideVisible ? 'col-start-2 col-end-6' : 'col-start-2 col-end-5'
	}`;

	return (
		<div className="grid grid-cols-5 h-screen ">
			{navVisible && (
				<nav className="col-start-1 col-end-2 bg-customgray h-full text-cusoffwhite border-r border-cusbuttonoutline">
					Navigation
				</nav>
			)}
			<main className={mainClasses}>
				<header className="bg-customgray text-cusoffwhite p-2 flex justify-between items-center border-b border-cusbuttonoutline">
					<button onClick={() => setNavVisible(!navVisible)} className="p-2 hover:bg-cusdarkmenubg">
						{navVisible ? <BsLayoutSidebarInset className="w-5 h-5"/> : <BsLayoutSidebar className="w-5 h-5"/>}
					</button>
					<button onClick={() => setAsideVisible(!asideVisible)} className="p-2 hover:bg-cusdarkmenubg">
						{asideVisible ? <BsLayoutSidebarInsetReverse className="w-5 h-5"/> : <BsLayoutSidebarReverse className="w-5 h-5"/>}
					</button>
				</header>
				Main Content
			</main>
			{asideVisible && (
				<aside className="col-start-5 col-end-6 bg-customgray h-full text-cusoffwhite border-l border-cusbuttonoutline">
					Properties Panel
				</aside>
			)}
		</div>
	)
}

export default App