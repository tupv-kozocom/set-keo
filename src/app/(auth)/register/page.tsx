import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";

function Register() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xl">
            <form>
                <h1 className="text-3xl font-bold text-gradient w-full text-center mb-12 mt-2">
                    Đăng ký
                </h1>
                <div className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Email*"
                        name="email"
                        className="border-gray-300 h-10"
                    />
                    <Input
                        type="password"
                        placeholder="Mật khẩu*"
                        name="password"
                        className="border-gray-300 h-10"
                    />
                    <Input
                        type="password"
                        placeholder="Nhắc lại mật khẩu*"
                        name="confirm_password"
                        className="border-gray-300 h-10"
                    />
                    <Input
                        type="text"
                        placeholder="Họ và tên *"
                        name="name"
                        className="border-gray-300 h-10"
                    />
                </div>
                <div className="flex items-center space-x-2 my-4">
                    <Checkbox
                        name="remember"
                        id="remember"
                    />
                    <Label htmlFor="remember" >Tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật</Label>
                </div>
                <Button
                    type="submit"
                    name=""
                    className="w-full text-white cursor-pointer"
                    size="xl"
                >Đăng ký</Button>
            </form>
            <div className="text-center mt-10 mb-2 text-gray-400">
                Bạn đã có tài khoản? <Link href="login" className="text-slate-400 underline">Đăng nhập</Link>
            </div>
        </div>
    );
}

export default Register;