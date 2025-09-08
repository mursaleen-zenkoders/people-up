'use client';

// Assets
import logo from '#/icons/logo-2.svg';

// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

// Schema
import { LoginSchema } from '@/schemas/login.schema';

// Cookie
import { setCookie } from 'cookies-next';

// Formik
import { useFormik } from 'formik';

// Hook
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const { push, refresh } = useRouter();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: async () => {
      try {
        setCookie('token', 'lorem');
        push('/');
        refresh();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="h-full grid md:grid-cols-2 w-full items-center gap-6">
      <div className="space-y-10 xl:pl-24 max-w-lg justify-self-center xl:justify-self-start w-full">
        <div>
          <h2 className="text-h font-bold text-2xl">Sign in to your Account</h2>
          <p className="text-p">Let’s sign in to your Account and Get Started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 w-full">
          <Input
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            error={touched.email ? errors.email : undefined}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            onChange={handleChange}
            value={values.password}
            error={touched.password ? errors.password : undefined}
          />
          <Button>Sign In</Button>
        </form>
      </div>

      <div className="bg-primary-300 rounded-xl w-full h-full p-[70px] relative hidden md:block">
        <h1 className="text-primary-900 font-bold text-[54px]">Spotlight</h1>
        <p className="text-neutral-950 text-2xl italic">The pulse of a positive workplace</p>
        <Image
          src={logo}
          alt="logo"
          width={202}
          height={202}
          className="absolute bottom-1 right-1"
        />
      </div>
    </div>
  );
};

export default LoginView;
