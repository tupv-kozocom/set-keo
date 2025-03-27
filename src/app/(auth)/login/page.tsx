import Link from "next/link";
import Separator from "@/components/Separator";
import SocialButton from "@/components/Form/SocialButton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

function Login() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-xl max-w-xl">
            <form>
                <h1 className="text-3xl font-bold mb-12 mt-2 text-gradient w-full text-center">
                    Đăng nhập
                </h1>
                <div className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        className="h-10 border-gray-300"
                    />
                    <Input
                        type="password"
                        placeholder="Mật khẩu"
                        name="password"
                        className="h-10 border-gray-300"
                    />
                </div>
                <Button
                    type="submit"
                    className="w-full text-white my-4 cursor-pointer"
                    size="xl"
                >Đăng nhập</Button>
                <div className="flex justify-between items-center">
                    <div className="flex items-end space-x-2">
                        <Checkbox
                            name="remember"
                            id="remember"
                        />
                        <Label htmlFor="remember" >Nhớ tài khoản</Label>
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
            <div className="text-center mt-10 mb-2 text-gray-400">
                Bạn chưa có tài khoản? <Link href="register" className="text-slate-400 underline">Đăng ký ngay</Link>
            </div>
        </div>
    );
}

export default Login;