'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

function ResetPasswordPage() {
	const path = usePathname();
	return <div>ResetPasswordPage - path:{JSON.stringify(path)}</div>;
}

export default ResetPasswordPage;
