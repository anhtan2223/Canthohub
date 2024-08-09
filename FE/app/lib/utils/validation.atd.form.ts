import { FormRule } from "antd"
const phoneRegex = /^(\+?[0-9]\d{1,14})?$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,}$/;


export const RePasswordValidation : FormRule = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Mật Khẩu Không Khớp!'));
    },
})

export const PasswordValidation : FormRule = () => ({
    validator(_, value) {
        if (passwordRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Mật Khẩu Phải Từ 8 Ký Tự'));
    }
})

export const EmailValidation : FormRule = () => ({
    validator(_, value) {
        if (emailRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Email Không Đúng Định Dạng'));
    }
})

export const PhoneValidation : FormRule = () => ({
    validator(_, value) {
        if (phoneRegex.test(value)) {
          return Promise.resolve();
        }
        return Promise.reject(new Error('Số Điện Thoại Không Đúng!'));
    }
})