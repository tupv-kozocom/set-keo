import {Button} from "@/components/ui/button";

function MailSent() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg w-xl max-w-xl">
            <form>
                <h1 className="text-3xl font-bold mb-12 mt-2 text-gradient w-full text-center">
                    Đặt lại mật khẩu
                </h1>
                <p className="text-gray-500 text-center mb-4 px-8">Chúng tôi đã gửi email tài khoản của quý khách, vui lòng xác thực</p>
                <Button
                    type="button"
                    className="w-full text-white mt-4 cursor-pointer"
                    size="xl"
                >Đi đến mail</Button>
            </form>
        </div>
    );
}

export default MailSent;