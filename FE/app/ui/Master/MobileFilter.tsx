'use client'
import { Button, Drawer} from "antd";
import { ReactNode, useState } from "react";
import { LuFilter } from "react-icons/lu";

export default function MobileFilter({ children }: { children?: ReactNode  }) {
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
                <LuFilter></LuFilter> Lọc
            </Button>
            <Drawer title="Lọc Bài Viết" onClose={onClose} open={open}>
                    {children}
            </Drawer>
        </div>
    );
}
