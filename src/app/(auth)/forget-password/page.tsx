// View
import ForgetPasswordView from '@/views/Auth/Forget-Password';

// Types
import { Metadata } from 'next';
import { JSX } from 'react';

export const metadata: Metadata = { title: 'Forget Password' };

const Page = (): JSX.Element => <ForgetPasswordView />;

export default Page;
