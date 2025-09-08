'use client';

// Components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Constants
import { Routes } from '@/constants/routes';

// Schema
import { SetPasswordSchema } from '@/schemas/reset-password.schema';

// Formik
import { useFormik } from 'formik';

// Hook
import { useRouter } from 'next/navigation';

const SetPasswordView = () => {
  const { login } = Routes;
  const { push } = useRouter();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: { password: '', confirmPassword: '' },
    validationSchema: SetPasswordSchema,
    onSubmit: async () => {
      try {
        push(login);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="border-[1.5px] border-dashed border-yellow-400 space-y-10 max-w-lg w-full rounded-xl p-10 bg-neutral-light">
      <div>
        <h2 className="text-h font-bold text-2xl">Setup your Password</h2>
        <p className="text-p">Let’s sign in to your Account and Get Started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 w-full">
        <Input label="Email" disabled value={'xyz@gmail.com'} />
        <Input
          name="password"
          label="New Password"
          value={values.password}
          onChange={handleChange}
          error={touched.password ? errors.password : undefined}
        />
        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          onChange={handleChange}
          value={values.confirmPassword}
          error={touched.confirmPassword ? errors.confirmPassword : undefined}
        />
        <Button>Complete</Button>
      </form>
    </div>
  );
};

export default SetPasswordView;
