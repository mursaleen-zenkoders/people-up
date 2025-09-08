// View
import LoginView from '@/views/Auth/Login';

// Types
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = { title: 'Login' };

const Page = (): JSX.Element => <LoginView />;

export default Page;
