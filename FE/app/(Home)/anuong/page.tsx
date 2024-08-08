import Breadcrumbs from "@/app/ui/Master/breadcrums";
import FoodPage from "@/app/ui/Home/anuong/FoodPage";
export default async function Page({
    searchParams,
  }: {
    searchParams?: {
      query?: string;
      page?: string;
    };
  }) {
    if (searchParams?.page) {
        console.log("Hello!")
    }
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Ăn uống', href: '/anuong', active: true },
    ];
    return (
        <>
            <div className="relative">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <FoodPage/>
            </div>
        </>
    );
}
