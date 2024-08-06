'use client'
import Breadcrumbs from "@/app/ui/Master/breadcrums";
import Link from 'next/link';

export default function Page() {
    const breadcrumbs = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Chính sách bảo mật', href: '/policy', active: true },
    ];

    return (
        <div className="">
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <div className="content-center">
                <div>
                    <div className="border border-border-color rounded-lg p-4 bg-secondary">
                        <div className="text-center">
                            <h1 className="text-6xl font-bold mt-10">Chính sách bảo mật</h1>
                            <p className="text-xs text-gray-500">Last Updated May 23rd, 2022</p>
                        </div>
                        <div className="mt-8 flex">
                            <div className="w-3/5 pr-4">
                                <p>Chính sách bảo mật này sẽ giúp bạn hiểu rõ hơn về cách chúng tôi thu thập, sử dụng và chia sẻ thông tin cá nhân của bạn.</p>

                                <h2 id="intro" className="text-xl font-semibold mt-4">1. Giới thiệu</h2>
                                <p>Chúng tôi, CanThoHub, cam kết bảo vệ quyền riêng tư và bảo mật thông tin cá nhân của bạn khi sử dụng trang web của chúng tôi. Chính sách bảo mật này cung cấp thông tin chi tiết về cách chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin cá nhân. Bằng cách truy cập và sử dụng trang web của chúng tôi, bạn đồng ý với các điều khoản của chính sách bảo mật này.</p>

                                <h2 id="info-collection" className="text-xl font-semibold mt-4">2. Thông Tin Được Thu Thập</h2>
                                <h3 className="text-lg font-semibold mt-2">2.1. Thông Tin Cá Nhân</h3>
                                <p>Chúng tôi thu thập các thông tin cá nhân mà bạn cung cấp khi sử dụng trang web, bao gồm nhưng không giới hạn:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Thông Tin Đăng Ký:</strong> Khi bạn đăng ký tài khoản hoặc gửi thông tin liên hệ, chúng tôi thu thập thông tin như tên, địa chỉ email, số điện thoại, và các thông tin khác liên quan đến hồ sơ của bạn.</li>
                                    <li><strong>Thông Tin Đăng Tin:</strong> Khi bạn đăng tin về việc làm, nhà trọ, hoặc quán ăn, chúng tôi thu thập các thông tin liên quan đến tin đăng đó, bao gồm mô tả, địa chỉ, giá cả, và thông tin liên hệ.</li>
                                </ul>
                                <h3 className="text-lg font-semibold mt-2">2.2. Thông Tin Sử Dụng</h3>
                                <p>Chúng tôi thu thập thông tin về cách bạn sử dụng trang web của chúng tôi, bao gồm:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Hoạt Động Truy Cập:</strong> Thông tin về các trang bạn truy cập, thời gian bạn ở lại trên trang web, và các hành động khác mà bạn thực hiện trên trang web.</li>
                                    <li><strong>Thông Tin Tương Tác:</strong> Dữ liệu về các tương tác của bạn với các tính năng của trang web, bao gồm việc tìm kiếm, xem tin tức, ứng tuyển việc làm, và tìm kiếm nhà trọ hoặc quán ăn.</li>
                                </ul>
                                <h3 className="text-lg font-semibold mt-2">2.3. Thông Tin Kỹ Thuật</h3>
                                <p>Chúng tôi thu thập thông tin kỹ thuật từ thiết bị của bạn, bao gồm:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Địa Chỉ IP:</strong> Địa chỉ IP của bạn giúp chúng tôi xác định vị trí địa lý và cung cấp trải nghiệm tùy chỉnh hơn.</li>
                                    <li><strong>Trình Duyệt và Hệ Điều Hành:</strong> Loại trình duyệt và hệ điều hành bạn sử dụng, cùng với thông tin về các thiết bị mà bạn truy cập trang web.</li>
                                </ul>
                                <h2 id="info-usage" className="text-xl font-semibold mt-4">3. Cách Sử Dụng Thông Tin</h2>
                                <p>Thông tin cá nhân của bạn được sử dụng cho các mục đích sau:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Cung Cấp và Cải Thiện Dịch Vụ:</strong> Để cung cấp dịch vụ, như tin tức nổi bật, thông tin việc làm, nhà trọ, và quán ăn. Chúng tôi cũng sử dụng thông tin để cải thiện trang web và các tính năng của chúng tôi.</li>
                                    <li><strong>Giao Tiếp và Hỗ Trợ:</strong> Để liên hệ với bạn về các vấn đề liên quan đến tài khoản của bạn, các cập nhật, và hỗ trợ khách hàng.</li>
                                    <li><strong>Thông Tin Tiếp Thị:</strong> Để gửi thông tin tiếp thị và khuyến mãi nếu bạn đã đồng ý nhận chúng. Bạn có thể từ chối nhận thông tin tiếp thị bất cứ lúc nào.</li>
                                    <li><strong>Phân Tích và Nghiên Cứu:</strong> Để phân tích cách người dùng tương tác với trang web của chúng tôi và cải thiện chất lượng dịch vụ.</li>
                                </ul>
                                <h2 id="info-sharing" className="text-xl font-semibold mt-4">4. Chia Sẻ Thông Tin</h2>
                                <p>Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Đối Tác và Nhà Cung Cấp Dịch Vụ:</strong> Chúng tôi có thể chia sẻ thông tin với các đối tác và nhà cung cấp dịch vụ hỗ trợ chúng tôi trong việc vận hành trang web, xử lý thanh toán, và thực hiện các chức năng khác. Các bên này cam kết bảo vệ thông tin cá nhân và không sử dụng nó cho mục đích khác ngoài những gì chúng tôi yêu cầu.</li>
                                    <li><strong>Nhà Tuyển Dụng và Chủ Nhà Trọ:</strong> Thông tin cá nhân của bạn có thể được chia sẻ với các nhà tuyển dụng hoặc chủ nhà trọ khi bạn đăng tin tuyển dụng hoặc tìm kiếm nhà trọ. Chúng tôi sẽ đảm bảo rằng thông tin này được xử lý một cách bảo mật.</li>
                                    <li><strong>Cơ Quan Pháp Lý:</strong> Trong trường hợp cần thiết để tuân thủ yêu cầu pháp lý hoặc bảo vệ quyền lợi của chúng tôi, chúng tôi có thể cung cấp thông tin cho cơ quan pháp lý hoặc tổ chức thực thi pháp luật.</li>
                                </ul>
                                <h2 id="info-security" className="text-xl font-semibold mt-4">5. Bảo Mật Thông Tin</h2>
                                <p>Chúng tôi áp dụng các biện pháp bảo mật hợp lý để bảo vệ thông tin cá nhân của bạn. Các biện pháp bảo mật này bao gồm:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Mã Hóa Dữ Liệu:</strong> Sử dụng công nghệ mã hóa để bảo vệ thông tin cá nhân trong quá trình truyền tải và lưu trữ.</li>
                                    <li><strong>Kiểm Soát Truy Cập:</strong> Giới hạn quyền truy cập vào thông tin cá nhân chỉ cho các nhân viên hoặc đối tác cần thiết để thực hiện nhiệm vụ của họ.</li>
                                    <li><strong>Đào Tạo Nhân Viên:</strong> Đào tạo nhân viên của chúng tôi về việc bảo vệ thông tin cá nhân và tuân thủ các quy định bảo mật.</li>
                                </ul>
                                <p>Tuy nhiên, không có hệ thống bảo mật nào hoàn hảo, và chúng tôi không thể đảm bảo bảo mật tuyệt đối. Bạn cũng nên thực hiện các biện pháp bảo mật cá nhân khi sử dụng trang web của chúng tôi.</p>
                                <h2 id="user-rights" className="text-xl font-semibold mt-4">6. Quyền Của Người Dùng</h2>
                                <p>Theo quy định pháp luật, bạn có các quyền sau liên quan đến thông tin cá nhân của mình:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Quyền Truy Cập:</strong> Bạn có quyền yêu cầu truy cập vào thông tin cá nhân của bạn mà chúng tôi đang lưu giữ.</li>
                                    <li><strong>Quyền Chỉnh Sửa:</strong> Bạn có quyền yêu cầu chỉnh sửa thông tin cá nhân của bạn nếu nó không chính xác hoặc không đầy đủ.</li>
                                    <li><strong>Quyền Xóa:</strong> Bạn có quyền yêu cầu xóa thông tin cá nhân của bạn nếu không còn cần thiết cho các mục đích mà chúng tôi thu thập.</li>
                                    <li><strong>Quyền Từ Chối:</strong> Bạn có quyền từ chối nhận thông tin tiếp thị hoặc quảng cáo từ chúng tôi.</li>
                                </ul>
                                <h2 id="cookies" className="text-xl font-semibold mt-4">7. Cookies và Công Nghệ Tương Tự</h2>
                                <p>Trang web của chúng tôi sử dụng cookies và các công nghệ tương tự để cung cấp trải nghiệm người dùng tốt hơn. Cookies là các tệp dữ liệu nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập trang web. Các công nghệ này giúp chúng tôi:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Nhận Diện Bạn:</strong> Để nhớ thông tin đăng nhập và cài đặt của bạn.</li>
                                    <li><strong>Cải Thiện Trải Nghiệm:</strong> Để cung cấp các chức năng và dịch vụ cá nhân hóa hơn.</li>
                                    <li><strong>Phân Tích và Theo Dõi:</strong> Để phân tích cách bạn sử dụng trang web và cải thiện các tính năng của chúng tôi.</li>
                                </ul>
                                <p>Bạn có thể điều chỉnh cài đặt trình duyệt của mình để từ chối cookies hoặc thông báo khi có cookie mới. Tuy nhiên, điều này có thể ảnh hưởng đến một số tính năng của trang web.</p>
                                <h2 id="policy-changes" className="text-xl font-semibold mt-4">8. Thay Đổi Chính Sách</h2>
                                <p>Chúng tôi có thể thay đổi chính sách bảo mật này theo thời gian. Mọi thay đổi sẽ được đăng tải trên trang web và có hiệu lực ngay khi được đăng tải. Chúng tôi khuyến khích bạn kiểm tra định kỳ để cập nhật những thay đổi trong chính sách bảo mật.</p>
                                <h2 id="contact" className="text-xl font-semibold mt-4">9. Liên Hệ</h2>
                                <p>Nếu bạn có bất kỳ câu hỏi hoặc thắc mắc nào về chính sách bảo mật này, xin vui lòng liên hệ với chúng tôi theo thông tin sau:</p>
                                <ul className="list-disc ml-5">
                                    <li><strong>Email:</strong> support@canthohub.vn</li>
                                    <li><strong>Địa Chỉ:</strong> 69 Lý Thái Tổ, Thành phố Cần Thơ, Việt Nam</li>
                                </ul>
                                <h2 id="effective-date" className="text-xl font-semibold mt-4">10. Ngày Có Hiệu Lực</h2>
                                <p>Chính sách bảo mật này có hiệu lực kể từ ngày 23 tháng 5 năm 2030.</p>
                            </div>

                            <div className="w-2/5 pl-4">
                                <nav className="p-4 sticky top-10">
                                    <h2 className="text-xl font-semibold mb-4">Nội dung chính sách</h2>
                                    <ul className="space-y-2">
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#intro">1. Giới thiệu</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#info-collection">2. Thông Tin Được Thu Thập</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#info-usage">3. Cách Sử Dụng Thông Tin</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#info-sharing">4. Chia Sẻ Thông Tin</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#info-security">5. Bảo Mật Thông Tin</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#user-rights">6. Quyền Của Người Dùng</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#cookies">7. Cookies và Công Nghệ Tương Tự</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#policy-changes">8. Thay Đổi Chính Sách</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#contact">9. Liên Hệ</Link>
                                        </li>
                                        <li className="border border-gray-300 rounded-lg p-2 bg-white">
                                            <Link href="#effective-date">10. Ngày Có Hiệu Lực</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
