import Input from "@/components/Form/Input";
import Button from "@/components/Form/Button";

function MailSent() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg max-w-xl">
            <form>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFFF42] to-[#ED2409] bg-clip-text text-transparent text-center mb-12 mt-2">
                    Đặt lại mật khẩu
                </h1>
                <p className="text-gray-500 text-center mb-4 px-8">Chúng tôi đã gửi email tài khoản của quý khách, vui lòng xác thực</p>
                <Button
                    type="button"
                    name="Đi đến mail"
                />
            </form>
        </div>
    );
}

export default MailSent;