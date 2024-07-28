import Link from 'next/link'

export default function MainPage() {
    const listPage = [
        { name: "Login", url: "/dangnhap" },
        { name: "Register", url: "/dangky" },
        { name: "My Account", url: "/taikhoan" },
        { name: "My Post", url: "/baidang" },
        { name: "___________________", url: "/" },
        { name: "News", url: "/tintuc" },
        { name: "Detail News", url: "/tintuc/1" },
        { name: "Add/Edit News", url: "/baidang/tintuc" },
        { name: "___________________", url: "/" },
        { name: "Hostel", url: "/nhatro" },
        { name: "Detail Hostel", url: "/nhatro/1" },
        { name: "Add/Edit Hostel", url: "/baidang/nhatro" },
        { name: "___________________", url: "/" },
        { name: "Job", url: "/vieclam" },
        { name: "Detail Job", url: "/vieclam/1" },
        { name: "Create/Edit Job", url: "/baidang/vieclam" },
        { name: "___________________", url: "/" },
        { name: "Food", url: "/anuong" },
        { name: "Food Detail", url: "/anuong/1" },
        { name: "Create/Edit Food", url: "/baidang/anuong" },


    ]
    return (
        <div className="w-full p-10 bg-white border rounded-lg">
            <div className="flex justify-center font-bold text-2xl">
                Function List
            </div>
            <ul>
                {listPage.map((i) => <Link href={i.url} key={i.name} className="flex hover:text-blue-500">
                    <div className="w-1/4">{i.name}</div>
                    <div className="w-1/5">{i.url}</div>
                </Link>
                )}
            </ul>
        </div>
    );
}