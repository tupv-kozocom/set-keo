import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function ForgotPassword() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-xl  max-w-xl">
            <form>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFFF42] to-[#ED2409] bg-clip-text text-transparent text-center mb-12 mt-2">
                    Quên mật khẩu
                </h1>
                <Input
                    type="email"
                    placeholder="Email*"
                    name="email"
                    className="h-12"
                />
                <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-4 bg-orange-500"
                >Lấy lại mật khẩu</Button>
            </form>
        </div>
    );
}

export default ForgotPassword;