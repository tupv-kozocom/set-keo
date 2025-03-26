import Link from "next/link";
import Input from "@/components/Form/Input";
import Checkbox from "@/components/Form/Checkbox";
import Label from "@/components/Form/Label";
import Separator from "@/components/Separator";
import SocialButton from "@/components/Form/SocialButton";
import Button from "@/components/Form/Button";

function Login() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xl">
            <form>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFFF42] to-[#ED2409] bg-clip-text text-transparent text-center mb-12 mt-2">
                    Đăng nhập
                </h1>
                <div className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <Input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                    />
                </div>
                <Button
                    type="submit"
                    name="Đăng nhập"
                />
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            name="remember"
                            id="remember"
                        />
                        <Label htmlFor="remember" name="Nhớ tài khoản" />
                    </div>
                    <Link href="reset-password" className="text-gray-400 text-sm">Quên mật khẩu</Link>
                </div>
            </form>
            <Separator name={"Hoặc đăng nhập bằng"} />
            <div className="flex justify-between items-center space-x-4">
                <SocialButton
                    src="images/facebook.svg"
                    alt="Facebook"
                    name="Facebook"
                />
                <SocialButton
                    src="images/google-icon.svg"
                    alt="Google"
                    name="Google"
                    className="bg-white"
                    classNameText="!text-black"
                />
            </div>
            <div className="text-center mt-10 mb-2 text-gray-300">
                Bạn chưa có tài khoản? <Link href="register" className="text-slate-400 underline">Đăng ký ngay</Link>
            </div>
        </div>
    );
}

export default Login;