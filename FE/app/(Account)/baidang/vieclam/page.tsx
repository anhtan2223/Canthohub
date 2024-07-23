import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Create from "@/app/ui/Account/baidang/vieclam/create"

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Bài Đăng Của Tôi', href: '/baidang' },
        { label: 'Tạo Mới Việc Làm', href: '/vieclam', active: true },
    ];
  return <div>
        <Breadcrumbs breadcrumbs={breadcrumbs}/>
        <Create></Create>
  </div>
}
