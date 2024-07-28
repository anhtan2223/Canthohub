import Image from 'next/image'
import Link from 'next/link'

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F5F5]">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-3xl mb-8 font-bold text-gray-700">Đăng Ký</h1>
        <div className="text-left mb-6">
          <label className="block mb-1 font-semibold text-black">Họ Và Tên</label>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder=""
              className="w-full pl-9 pr-4 py-1 border-0 border-b-2 border-black custom-input bg-transparent"
            />
            <Image src="/Icon/name.png" width={15} height={15} className='absolute left-2' alt="Email Icon" />
          </div>
        </div>
        <div className="text-left mb-6">
          <label className="block mb-1 font-semibold text-black">Email</label>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder=""
              className="w-full pl-9 pr-4 py-1 border-0 border-b-2 border-black custom-input bg-transparent"
            />
            <Image src="/Icon/email.png" className='absolute left-2' width={17} height={12} alt="Email Icon" />
          </div>
        </div>
        <div className="text-left mb-6">
          <label className="block mb-1 font-semibold text-black">Mật Khẩu</label>
          <div className="relative flex items-center">
            <input
              type="password"
              placeholder=""
              className="w-full pl-9 pr-4 py-1 border-0 border-b-2 border-black custom-input bg-transparent"
            />
            <Image src="/Icon/password.png" className='absolute left-2' width={15} height={15} alt="Password Icon" />
          </div>
        </div>
        <div className="mb-6 text-center">
          <label htmlFor="privacyPolicy" className="text-sm text-gray-500">
            Tôi đã đọc và đồng ý với
            <div>
              <Link href="/privacy_policy" className="text-indigo-500 hover:underline ml-1">Chính sách quyền riêng tư</Link>
            </div>
          </label>
        </div>
        <button className="w-[50%] py-2 mb-4 bg-[#3559E0] text-white rounded-full font-semibold hover:bg-[#2742b3] transition duration-300 ease-in-out">
          Đăng Ký
        </button>
        <p className="text-center text-sm text-gray-500 cursor-pointer mb-6">
        Bạn đã có tài khoản? <Link href="/dangnhap" className='hover:underline font-medium text-[#22C0CF]'>Đăng Nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
