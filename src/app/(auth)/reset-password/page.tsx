import { Button } from '@/components/ui/button';
import Link from 'next/link';
import ROUTES from '@/constants/routeName';
import Input from '@/components/ui/input';

function ForgotPassword() {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg w-xl max-w-xl">
      <form>
        <h1 className="text-3xl font-bold mb-12 mt-2 text-gradient w-full text-center">Quên mật khẩu</h1>
        <Input type="email" placeholder="Email*" name="email" className="border-gray-300 h-10" />
        <Link href={ROUTES.HOME}>
          <Button type="submit" size="xl" className="w-full text-white mt-4 cursor-pointer">
            Lấy lại mật khẩu
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default ForgotPassword;
