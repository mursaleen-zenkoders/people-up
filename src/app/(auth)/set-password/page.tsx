// View
import SetPasswordView from '@/views/Auth/Set-Password';

// Types
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = { title: 'Set Password' };

const Page = (): JSX.Element => <SetPasswordView />;

export default Page;
