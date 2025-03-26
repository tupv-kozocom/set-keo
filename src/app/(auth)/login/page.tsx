import Link from "next/link";
import Image from "next/image";

function Login() {
    return (
        <div className="bg-white p-12 rounded-lg shadow-lg">
            <form>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#FFFF42] to-[#ED2409] bg-clip-text text-transparent text-center mb-12 mt-2">
                    Đăng nhập
                </h1>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        className="text-black border border-gray-300 rounded-lg w-full p-3"
                    />
                    <input
                        type="password"
                        placeholder="Mật khẩu"
                        name="email"
                        className="text-black border border-gray-300 rounded-lg w-full p-3"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-orange-500 w-full my-6 p-3 rounded-lg"
                >
                    Đăng nhập
                </button>
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <input
                            className="w-4 h-4 accent-orange-400/25 focus:ring-orange-500 cursor-pointer"
                            type="checkbox"
                            id="remember"
                        />
                        <label htmlFor="remember" className="text-black text-sm">Nhớ tài khoản</label>
                    </div>
                    <Link href="" className="text-gray-400 text-sm">Quên mật khẩu</Link>
                </div>
            </form>
            <div className="flex justify-center items-center my-6">
                <div className="border border-1 border-gray-200 flex-grow" />
                <div className="text-gray-300 text-sm px-2">Hoặc đăng nhập bằng</div>
                <div className="border border-1 border-gray-200 flex-grow" />
            </div>
            <div className="flex justify-between items-center space-x-4">
                <button className="flex items-center justify-center space-x-3 text-white bg-blue-500 p-3 rounded-lg border border-gray-200 w-full">
                    <Image
                        src="images/facebook.svg"
                        alt="Google"
                        width={24}
                        height={24}
                    />
                    <span className="text-white text-sm">Facebook</span>
                </button>
                <button className="flex items-center justify-center space-x-3 text-white p-3 rounded-lg border border-gray-200 w-full">
                    <Image
                        src="images/google-icon.svg"
                        alt="Google"
                        width={24}
                        height={24}
                    />
                    <span className="text-black text-sm">Google</span>
                </button>
            </div>
            <div className="text-center mt-10 mb-2 text-gray-300">
                Bạn chưa có tài khoản? <Link href="" className="text-slate-400 underline">Đăng ký ngay</Link>
            </div>
        </div>
    );
}

export default Login;