import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
	return (
		<>
			<Outlet />
			</>
	);
};

export default Layout;
