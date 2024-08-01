import { Account, AccountInfo } from "@type/taikhoan"
import { JobPost, Career, Level, Form, Experience } from "@type/vieclam"
import { Province, District, Ward, Post } from "@type/master"

export const user: Account = {
    id: 1,
    full_name: "Lan Lan",
    avatar_image: {
        id: 1,
        type: "IMAGE",
        url: "/vieclam/avartar.png"
    }
}
export const userInfo: AccountInfo = {
    ...user,
    email: "lanlan@vhec.com",
    phone: "0123456789",
    password: "12345",
    birthdate: new Date(),
    status: "ACTIVE",
    role: "USER"
}
export const carrerList: Career[] = [
    { id: 1, name: "Software Engineer" },
    { id: 2, name: "Data Scientist" },
    { id: 3, name: "Mobile Developer" },
    { id: 4, name: "Network Administrator" },
    { id: 5, name: "Cybersecurity Analyst" },
    { id: 6, name: "Cloud Solutions Architect" },
    { id: 7, name: "UX/UI Designer" },
    { id: 8, name: "Web Developer" },
    { id: 9, name: "DevOps Engineer" },
    { id: 10, name: "AI Specialist" }
]
export const experienceList: Experience[] = [
    { id: 1, name: "Không Yêu Cầu" },
    { id: 2, name: "5 Năm Kinh Nghiệm" },
    { id: 3, name: "2 Năm Kinh Nghiệm" },
    { id: 4, name: "10 Năm Kinh Nghiệm" },
]
export const provinceList: Province[] = [
    { id: 1, name: "Cần Thơ" },
    { id: 2, name: "Thành Phố Hồ Chí Minh" },
    { id: 3, name: "Đà Nẵng" },
]
export const districtList: District[] = [
    { id: 1, name: "Quận Ninh Kiều", province_id: 1 },
    { id: 2, name: "Quận Bình Thủy", province_id: 1 },
    { id: 3, name: "Quận Cái Răng", province_id: 1 },
    { id: 4, name: "Quận 1", province_id: 2 },
    { id: 5, name: "Quận 2", province_id: 2 },
    { id: 6, name: "Quận Sơn Trà", province_id: 3 },
    { id: 7, name: "Quận Hải Châu", province_id: 3 },
]
export const wardList: Ward[] = [
    { id: 1, name: "Phường An Cư", district_id: 1 },
    { id: 2, name: "Phường An Hòa", district_id: 1 },
    { id: 3, name: "Phường Bình Thủy", district_id: 2 },
    { id: 4, name: "Phường Bùi Hữu Nghĩa", district_id: 2 },
    { id: 5, name: "Phường Hưng Phú", district_id: 3 },
    { id: 6, name: "Phường Lê Bình", district_id: 3 },
    { id: 7, name: "Phường Bến Nghé", district_id: 4 },
    { id: 8, name: "Phường Bến Thành", district_id: 4 },
    { id: 9, name: "Phường An Phú", district_id: 5 },
    { id: 10, name: "Phường Bình An", district_id: 5 },
    { id: 11, name: "Phường Bình Hiên", district_id: 6 },
    { id: 12, name: "Phường Hòa Thuận Đông", district_id: 6 },
    { id: 13, name: "Phường An Hải Bắc", district_id: 7 },
    { id: 14, name: "Phường An Hải Đông", district_id: 7 }
]
export const jobPost: JobPost = {
    id: 1,
    company_name: "Viet Nam Hi-Tech Engineering Company",
    company_cover_image: {
        id: 2,
        type: "IMAGE",
        url: "/vieclam/Company_Img.png"
    },
    quantity: 5,
    career: carrerList[2],
    level: Level.INTERN,
    form: Form.FULL_TIME,
    experience: experienceList[0],
    apply_date_from: new Date(2024,2,10),
    apply_date_to: new Date(2024,10,15),
    address: {
        id: 1,
        province: provinceList[0],
        district: districtList[2],
        ward: wardList[4],
        address: "69 Đường Lý Thái Tổ"
    },
    job_description: "Hỗ trợ các dự án hiện tại của công ty theo sự hướng dẫn của quản lý và đồng nghiệp.Tham gia vào các buổi họp nhóm và đóng góp ý kiến, ý tưởng sáng tạo.Thực hiện nghiên cứu, thu thập và phân tích dữ liệu liên quan đến dự án.Hỗ trợ các công việc hành chính, tổ chức và quản lý tài liệu.Thực hiện các nhiệm vụ khác theo yêu cầu nhằm hỗ trợ hoạt động hàng ngày của công ty.",
    requirement: "Trên 1-2 năm kinh nghiệm làm việc với NodeJS và ReactJS. Có kinh nghiệm làm việc với mô hình Agile; làm việc với Database NoSQL: MongoDB hoặc Firestore. Có kinh nghiệm với điện toán đám mây, một trong: Google Cloud, Firebase, AWS, kiến trúc hệ thống microservice. Khả năng đọc hiểu Tiếng Anh tốt, độ tuổi từ 23 - 30.",
    benefits: "Được làm việc với những công nghệ hot nhất. Tham gia xây dựng hệ thống lớn. Được cung cấp thiết bị làm việc đầy đủ, hiện đại. Được hưởng đầy đủ chế độ phúc lợi như BHXH, thưởng lễ Tết, lương tháng 13, du lịch hàng năm.... Phụ cấp gửi xe, phụ cấp đi lại,... Văn phòng làm việc tiện nghi; cung cấp trà, cafe và có tủ đồ ăn uống, bánh kẹo hàng ngày. Tham gia các CLB chạy, đá bóng, boardgame, văn nghệ .... Nghỉ T7, CN và nhiều chế độ cực hấp dẫn.oán đám mây, một trong: Google Cloud, Firebase, AWS, kiến trúc hệ thống microservice. ",
}
export const jobPostSeeding: Post = {
    id: 1,
    title: "LẬP TRÌNH VIÊN FLUTTER",
    category: "JOB",
    user: user,
    status: "APPROVED",
    job_post: jobPost,
    created_at: new Date(),
    updated_at: new Date(),
}
export const newsPostSeeding:Post = {
    id : 2 ,
    title : "Tuyển dụng Flutter tại Việt Nam" ,
    content : "Sẽ là thật tuyệt nếu rơi vào một chiều mưa, em ôm anh thật chặt và hỏi em tìm được việc chưa. Nếu chưa thì về team Avada Group nha, chúng mình đang tìm kiếm đồng đội Full Stack Nodejs + Reactjs. Thu nhập: 12 - 25 triệu Yêu cầu: - Trên 1-2 năm kinh nghiệm làm việc với NodeJS và ReactJS - Có kinh nghiệm làm việc với mô hình Agile; làm việc với Database NoSQL: MongoDB hoặc Firestore - Có kinh nghiệm với điện toán đám mây, một trong: Google Cloud, Firebase, AWS, kiến trúc hệ thống microservice - Khả năng đọc hiểu Tiếng Anh tốt, độ tuổi từ 23 - 30. Quyền lợi: - Được làm việc với những công nghệ hot nhất - Tham gia xây dựng hệ thống lớn - Được cung cấp thiết bị làm việc đầy đủ, hiện đại - Được hưởng đầy đủ chế độ phúc lợi như BHXH, thưởng lễ Tết, lương tháng 13, du lịch hàng năm... - Phụ cấp gửi xe, phụ cấp đi lại,... - Văn phòng làm việc tiện nghi; cung cấp trà, cafe và có tủ đồ ăn uống, bánh kẹo hàng ngày - Tham gia các CLB chạy, đá bóng, boardgame, văn nghệ ... - Nghỉ T7, CN và nhiều chế độ cực hấp dẫn. Địa chỉ làm việc: Trần Phú, Hà Đông, Hà Nội Ứng tuyển ngay: Gửi CV vào mail anhvn@avadagroup.com (Tiêu đề ghi rõ NodeJS & ReactJS Developer - Họ và tên)" ,
    category : "NEWS" ,
    user : user ,
    status : "APPROVED" ,
    created_at : new Date(2024,3,5,12,30) ,
    updated_at : new Date() ,
    post_image : [
        { id : 3, type: "IMAGE", url: "/avadagroup.png" }
    ] ,
    likes_count : 200000 ,
    comments_count : 2104 
}