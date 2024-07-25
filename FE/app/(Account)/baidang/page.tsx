import Breadcrumbs from "@/app/ui/Master/breadcrums";
import NavBar from "@/app/ui/Account/baidang/nav-bar"

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài Đăng Của Tôi', href: '/vieclam', active: true },
    ];
  return <div>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <NavBar></NavBar>
  </div>
}
