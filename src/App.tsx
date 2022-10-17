import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ContextUIProvider } from './context/ContextUI/ContextUIProvider';
import { RouterEvents, RouterFaculties, RouterHome, RouterPersons, RouterProfiles, RouterRoles, RouterUsers } from './routers';
import { RouterAttendances } from './routers/RouterAttendances';
import { RouterLogin } from './routers/RouterLogin';
import { RouterPeriods } from './routers/RouterPeriods';
import { } from './routers/RouterRoles';
const router = createBrowserRouter([
	RouterAttendances,
	RouterEvents,
	RouterFaculties,
	RouterHome,
	RouterLogin,
	RouterPeriods,
	RouterPersons,
	RouterProfiles,
	RouterRoles,
	RouterUsers
]);

export const App = () => {
	return (
		<ContextUIProvider>
			<RouterProvider router={router} />
		</ContextUIProvider>
	);
};
