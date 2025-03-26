import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

function ForgotPassword() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-xl  max-w-xl">
            <form>
                <h1 className="text-3xl font-bold mb-12 mt-2 text-center text-gradient w-full">
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