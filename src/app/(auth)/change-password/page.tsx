// View
import ChangePasswordView from '@/views/Auth/Change-Password';

// Types
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = { title: 'Change Password' };

const Page = (): JSX.Element => <ChangePasswordView />;

export default Page;
