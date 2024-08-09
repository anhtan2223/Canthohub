'use client'
import { Button, Drawer} from "antd";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function MobileMenu() {
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
            <Link href='/dangnhap' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer transition-colors'>
                Đăng Nhập
            </Link>
            <Link href='/dangky' className='flex gap-3 px-4 py-2 hover:bg-color cursor-pointer transition-colors'>
                Đăng Ký
            </Link>
            </Drawer>
        </div>
    );
}
