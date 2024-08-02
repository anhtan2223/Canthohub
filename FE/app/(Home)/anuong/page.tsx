import Breadcrumbs from "@/app/ui/Master/breadcrums";
import FoodPage from "@/app/ui/Home/anuong/FoodPage";
import AddressService from "@/app/services/AddressService";
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
    const response = await AddressService.getProvinces();
    const data = await response;
    console.log(data);
    return (
        <>
            <div className="relative">
                <Breadcrumbs breadcrumbs={breadcrumbs} />
                <FoodPage/>
            </div>
        </>
    );
}
