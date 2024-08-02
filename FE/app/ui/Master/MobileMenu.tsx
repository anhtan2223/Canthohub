'use client'
import { FormOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Drawer, Row} from "antd";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function MobileMenu({ children }: { children?: ReactNode  }) {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

    return (
        <div className="lg:hidden flex justify-end">
            <Button onClick={showDrawer}>
                <IoMdMenu/>
            </Button>
            <Drawer title="Danh Mục" onClose={onClose} open={open} placement="left">
            <Link href='/baidang' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer transition-colors'>
                <FormOutlined style={{ fontSize: '20px'}} />
                Bài Đăng Của Tôi
            </Link>
            <Link href='/taikhoan' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer transition-colors'>
                <UserOutlined style={{ fontSize: '20px'}} />
                Cài Đặt Tài Khoản
            </Link>
            <Link href='/logout' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer'>
                <LogoutOutlined style={{ fontSize: '20px'}} />
                Đăng Xuất
            </Link>
            </Drawer>
        </div>
    );
}
