import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";
import Checkbox from "@/components/Form/Checkbox";
import Label from "@/components/Form/Label";
import Link from "next/link";

function Register() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xl">
            <form>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFFF42] to-[#ED2409] bg-clip-text text-transparent text-center mb-12 mt-2">
                    Đăng ký
                </h1>
                <div className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email*"
                        name="email"
                    />
                    <Input
                        type="password"
                        placeholder="Mật khẩu*"
                        name="password"
                    />
                    <Input
                        type="password"
                        placeholder="Nhắc lại mật khẩu*"
                        name="confirm_password"
                    />
                    <Input
                        type="text"
                        placeholder="Họ và tên *"
                        name="name"
                    />
                </div>
                <div className="flex items-center space-x-2 my-4">
                    <Checkbox
                        name="remember"
                        id="remember"
                    />
                    <Label htmlFor="remember" name="Tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật" />
                </div>
                <Button
                    type="submit"
                    name="Đăng ký"
                    className="mt-0"
                />
            </form>
            <div className="text-center mt-10 mb-2 text-gray-300">
                Bạn đã có tài khoản? <Link href="login" className="text-slate-400 underline">Đăng nhập</Link>
            </div>
        </div>
    );
}

export default Register;