'use client'
import { Button, Form, Input, DatePicker } from 'antd';
import type { FormProps } from 'antd';
import { RegisterRequest } from "@type/taikhoan/auth.request"
import { notification } from "antd"
import auth from "@service/AuthService"
import account from "@service/AccountService"
import Link from 'next/link'
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons"
import { ErrorResponse } from '@/app/lib/types/master';
import { RegisterData } from '@/app/lib/types/taikhoan';
import { tokenAtom, userAtom } from "@storage"
import { useSetAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { PhoneValidation, RePasswordValidation, PasswordValidation, EmailValidation } from "@util"
import { getErrorMessage } from "@util"

const Register = () => {

  const setUser = useSetAtom(userAtom)
  const setToken = useSetAtom(tokenAtom)
  const router = useRouter()

  const onFinishFailed: FormProps<RegisterRequest>['onFinishFailed'] = (errorInfo) => {
    console.log(errorInfo.values)
  };

  const onFinish = async (values: RegisterRequest) => {
    try {
      if (values.birthdate)
        values.birthdate = values.birthdate?.format('YYYY-MM-DD')
      const data = await auth.Register(values) as RegisterData
      setToken(data.token.access_token)

      const info = await account.GetMe(data.token.access_token)
      setUser(info)
      notification.success({ message: "Register Sucess", placement: "bottomRight" })
      router.push("/tintuc")
    } catch (error) {
      const err = error as ErrorResponse
      notification.error({ message: err.message, placement: "bottomRight" })
      if (err.validation_errors) {
        getErrorMessage(err.validation_errors).forEach(message => {
          notification.error({ message: message, placement: "bottomRight" })
        })
      }
    }
  };
  return (
    <>
      <Form<RegisterRequest>
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
      >
        <div className="flex items-center justify-center dark:text-dark-text dark:border-dark">
          <div className="p-10 rounded-lg shadow-lg text-center w-3/4 bg-white dark:bg-dark-secondary">
            <h1 className="text-3xl mb-8 font-bold">Đăng Ký</h1>
            <div className="text-left mb-6">
              <Form.Item
                label="Họ Và Tên"
                name="full_name"
                rules={[{ required: true, message: 'Vui Lòng Nhập Họ Tên' }]}
              >
                <Input
                  prefix={<UserOutlined width={17} height={12} className='left-2 w-full' />} />
              </Form.Item>
            </div>
            <div className="text-left mb-6">
              <Form.Item
                label="Ngày Sinh"
                name="birthdate"
                colon={false}
              >
                <DatePicker className='w-full' placeholder="Ngày Sinh" />
              </Form.Item>
            </div>
            <div className="text-left mb-6">
              <Form.Item
                label="Số Điện Thoại"
                name="phone"
                rules={[PhoneValidation]}
              >
                <Input
                  prefix={<PhoneOutlined width={17} height={12} className='left-2 w-full' />} />
              </Form.Item>
            </div>
            <div className="text-left mb-6">
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Vui Lòng Nhập Email' }, EmailValidation]}
              >
                <Input
                  prefix={<MailOutlined width={17} height={12} className='left-2 w-full' />} />
              </Form.Item>
            </div>
            <div className="text-left mb-6">
              <Form.Item
                label="Mật Khẩu"
                name="password"
                rules={[{ required: true, message: 'Vui Lòng Nhập Mật Khẩu' }, PasswordValidation]}
              >
                <Input.Password
                  prefix={<LockOutlined width={17} height={12} className='left-2' />} />
              </Form.Item>
            </div>
            <div className="text-left mb-6">
              <Form.Item
                label="Nhập Lại Mật Khẩu"
                name="re-password"
                dependencies={['password']}
                rules={[RePasswordValidation]}
              >
                <Input.Password
                  prefix={<LockOutlined width={17} height={12} className='left-2' />} />
              </Form.Item>
            </div>
            <div className="mb-4 text-center">
              <label htmlFor="privacyPolicy" className="text-sm text-gray-500">
                Tôi đã đọc và đồng ý với
                <div>
                  <Link href="/policy" className="text-indigo-500 hover:underline ml-1">Chính sách quyền riêng tư</Link>
                </div>
              </label>
            </div>
            <Button type="primary" htmlType="submit">
              Đăng Ký
            </Button>

            <div className='flex justify-center w-full mt-5'>
              <p className="text-center text-sm text-gray-500 cursor-pointer mb-6">
                Bạn đã có tài khoản? <Link href="/dangnhap" className='hover:underline font-medium text-[#22C0CF]'>Đăng Nhập Ngay</Link>
              </p>
            </div>
          </div>
        </div >
      </Form>
    </>
  );
};

export default Register;
