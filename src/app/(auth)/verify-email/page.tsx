// View
import VerifyEmailView from '@/views/Auth/Verify-Email';

// Types
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = { title: 'Verify Email' };

const Page = (): JSX.Element => <VerifyEmailView />;

export default Page;
