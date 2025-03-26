import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';

function ForgotPassword() {
  return (
    <div className="bg-white p-12 rounded-lg shadow-lg max-w-xl">
      <form>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFFF42] to-[#ED2409] bg-clip-text text-transparent text-center mb-12 mt-2">
          Quên mật khẩu
        </h1>
        <Input type="email" placeholder="Email*" name="email" />
        <Button type="submit" name="Lấy lại mật khẩu" />
      </form>
    </div>
  );
}

export default ForgotPassword;
