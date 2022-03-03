const banner = [{
        id: 1,
        title: "Giảm giá chỉ một ngày",
        sale: "40%",
        description: "TRÊN MỖI MẶT HÀNG TRÊN $500",
        images: "banner1.jpg"
    },
    {
        id: 2,
        title: "Giảm giá chỉ một ngày",
        sale: "40%",
        description: "TRÊN MỖI MẶT HÀNG TRÊN $500",
        images: "banner2.jpg"
    },
    {
        id: 3,
        title: "Giảm giá chỉ một ngày",
        sale: "40%",
        description: "TRÊN MỖI MẶT HÀNG TRÊN $500",
        images: "banner3.jpg"
    },
]
const Product = [{
        "id": 1,
        "name": "Hoa Cúc",
        "images": "hoa-cúc.jpg",
        "price": "200",
        "sale_price": "0",
        "description": "Hoa cúc trắng này là hoa cúc ta, cánh hoa không nhiều như những bông cúc Tây mà nhà nhà người người vẫn hay mua về. Những cánh hoa màu trắng xếp cạnh nhau, xung quanh nhị hoa màu vàng sáng ấm áp. Cánh hoa mềm mại, sờ lên mịn màng như lụa.",
        "img": "hoa-cuc1.jpg"

    },
    {
        "id": 2,
        "name": "Hoa Hồng",
        "images": "hoa-hông.jpg",
        "price": "300",
        "sale_price": "200",
        "description": "Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng. Phần lớn có nguồn gốc bản địa châu Á, số ít còn lại có nguồn gốc bản địa châu Âu, Bắc Mỹ, và Tây Bắc Phi. Các loài bản địa, giống cây trồng và cây lai ghép đều được trồng làm cảnh và lấy hương thơm.[1] Đôi khi các loài này được gọi là tường vi.",
        "img": "hoa-hoong1.jpg"
    },
    {
        "id": 3,
        "name": "Hoa Hồng Cam",
        "images": "hoa-hông-cam.jpg",
        "price": "400",
        "sale_price": "300",
        "description": "Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng. Phần lớn có nguồn gốc bản địa châu Á, số ít còn lại có nguồn gốc bản địa châu Âu, Bắc Mỹ, và Tây Bắc Phi. Các loài bản địa, giống cây trồng và cây lai ghép đều được trồng làm cảnh và lấy hương thơm.[1] Đôi khi các loài này được gọi là tường vi.",
        "img": "hoa-hông.jpg"
    },
    {
        "id": 4,
        "name": "Hoa Hướng Dương",
        "images": "hoa-huong-duong.jpg",
        "price": "300",
        "sale_price": "0",
        "description": "Cây hướng dương có nguồn gốc từ Bắc Mỹ. Đây là loài cây thảo sống khoảng một năm, thân to thẳng có lông cứng, thường có đốm, cao 1-3 m. Lá to, thường mọc so le, có cuống dài, phiến lá hình trứng đầu nhọn, phía dưới hình tim, mép có răng cưa, hai mặt đều có lông trắng. Cụm hoa đầu lớn, đường kính 7-20 cm, bao chung hình trứng; Hoa hình lưỡi, ngoài màu vàng; các hoa lưỡng tính ở giữa màu tím hồng. Cây ra hoa vào mùa đông, mùa xuân. Thời gian ra hoa tại châu Âu thường là từ cuối tháng 6 / tháng 7 đến tháng 9.",
        "img": "hoa-huong-duong1.jpg"
    },
    {
        "id": 5,
        "name": "Hoa Lan",
        "images": "hoa-lan.jpg",
        "price": "700",
        "sale_price": "600",
        "description": "Hoa lan được người tiêu dùng ưa chuộng vì vẻ đẹp đặc sắc và các hình thức đa dạng của chúng. Cũng giống như cây lan, hoa lan hầu như có tất cả các màu trong cầu vồng và những kết hợp của các màu đó. Hoa lan nhỏ nhất chỉ bằng hạt gạo trong khi hoa lan lớn nhất có đường kính khoảng 1 m.Đa số các loại hoa lan được bán rộng rãi trên thị trường thường không có hương thơm nhưng trong tự nhiên có rất nhiều loại hoa lan có mùi thơm đặc trưng. Vanilla là một loại hoa lan mà hương thơm được dùng trong các loại ẩm thực của thế giới và có nguồn gốc từ México; trong khi đó có các loại hoa lan tỏa ra mùi như thịt bị hỏng để hấp dẫn các côn trùng.",
        "img": "hoa-cuc1.jpg"
    },
    {
        "id": 6,
        "name": "Hoa Tulip",
        "images": "hoa-tulip.jpg",
        "price": "800",
        "sale_price": "0",
        "description": "Hoa của hoa tulip thường có màu sắc rực rỡ, hình chuông hoặc hình ngôi sao và vô cùng đối xứng. Tất cả hoa tulip đều có sáu cánh hoa. Các cánh hoa có thể mịn, tua hoặc xù. Hoa có thể là đơn hoặc đôi.Đây là một trong những loài hoa dễ nhận biết và được yêu thích nhất trên thế giới. Những bông hoa tulip mang vẻ đẹp độc đáo và khác biệt. Cảm giác mà hoa tulip mang lại cho chúng ta chính là sự dễ chịu. Chúng không quá thanh lịch, quá lãng mạn, quá lớn, quá nhỏ, hoa tulip luôn luôn vừa phải.",
        "img": "hoa-tulip1.jpg"
    },
    {
        "id": 7,
        "name": "Bó Hoa",
        "images": "bó-hoa-cm.jpg",
        "price": "400",
        "sale_price": "0",
        "description": " Với đội ngũ nhân viên trẻ trung đầy nhiệt huyết và dày dặn kinh nghiệm, chúng tôi luôn nỗ lực hết sức mình để làm hài lòng quý khách hàng.Điện hoa tươi cam kết sản phẩm hoa sinh nhật được thực hiện dựa trên mẫu đã chọn. Miễn phí thiệp chúc mừng, băng zôn ( nếu có nội dung chúc mừng ).Sản phẩm được chuyển phát miễn phí trong khu vực nội thành.Thời gian giao hàng nhanh nhất có thể từ 30 phút kể từ khi khách hàng đặt hàng (đối với các đơn hàng gấp, tuỳ thuộc vào yêu cầu và địa chỉ được giao).Dễ dàng thanh toán online với thẻ nội địa, quốc tế, Visa, Master, Paypal… ngay tại websiteHoa tốt cam kết gửi hình ảnh thực tế sản phẩm của quý khách trước khi giao hàng 30 phút(qua zalo hoặc các phương tiện liên hệ khác). Sản phẩm của chúng tôi luôn mang những ý nghĩa tốt đẹp nhất gửi tới người nhận.",
        "img": "hoa-tulip1.jpg"
    },
    {
        "id": 8,
        "name": "Hoa Cúc",
        "images": "hoa-cuc1.jpg",
        "price": "200",
        "sale_price": "0",
        "description": "Hoa cúc trắng này là hoa cúc ta, cánh hoa không nhiều như những bông cúc Tây mà nhà nhà người người vẫn hay mua về. Những cánh hoa màu trắng xếp cạnh nhau, xung quanh nhị hoa màu vàng sáng ấm áp. Cánh hoa mềm mại, sờ lên mịn màng như lụa.",
        "img": "hoa-cuc1.jpg"
    },
    {
        "id": 9,
        "name": "Hoa Hồng",
        "images": "hoa-hồng.jpg",
        "price": "300",
        "sale_price": "200",
        "description": "Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng. Phần lớn có nguồn gốc bản địa châu Á, số ít còn lại có nguồn gốc bản địa châu Âu, Bắc Mỹ, và Tây Bắc Phi. Các loài bản địa, giống cây trồng và cây lai ghép đều được trồng làm cảnh và lấy hương thơm.[1] Đôi khi các loài này được gọi là tường vi.",
        "img": "hoa-hoong1.jpg"
    },
    {
        "id": 10,
        "name": "Hoa Hồng Cam",
        "images": "hoa-hông-cam.jpg",
        "price": "400",
        "sale_price": "300",
        "description": "Hồng hay hường là tên gọi chung cho các loài thực vật có hoa dạng cây bụi hoặc cây leo lâu năm thuộc chi Rosa, họ Rosaceae, với hơn 100 loài với màu hoa đa dạng, phân bố từ miền ôn đới đến nhiệt đới. Các loài này nổi tiếng vì hoa đẹp nên thường gọi là hoa hồng. Phần lớn có nguồn gốc bản địa châu Á, số ít còn lại có nguồn gốc bản địa châu Âu, Bắc Mỹ, và Tây Bắc Phi. Các loài bản địa, giống cây trồng và cây lai ghép đều được trồng làm cảnh và lấy hương thơm.[1] Đôi khi các loài này được gọi là tường vi.",
        "img": "hoa-hoong1.jpg"
    },
    {
        "id": 11,
        "name": "Hoa Hướng Dương",
        "images": "hoa-huong-duong1.jpg",
        "price": "300",
        "sale_price": "0",
        "description": "Cây hướng dương có nguồn gốc từ Bắc Mỹ. Đây là loài cây thảo sống khoảng một năm, thân to thẳng có lông cứng, thường có đốm, cao 1-3 m. Lá to, thường mọc so le, có cuống dài, phiến lá hình trứng đầu nhọn, phía dưới hình tim, mép có răng cưa, hai mặt đều có lông trắng. Cụm hoa đầu lớn, đường kính 7-20 cm, bao chung hình trứng; Hoa hình lưỡi, ngoài màu vàng; các hoa lưỡng tính ở giữa màu tím hồng. Cây ra hoa vào mùa đông, mùa xuân. Thời gian ra hoa tại châu Âu thường là từ cuối tháng 6 / tháng 7 đến tháng 9.",
        "img": "hoa-huong-duong1.jpg"
    },
    {
        "id": 12,
        "name": "Hoa Lan",
        "images": "hoa-lan.jpg",
        "price": "700",
        "sale_price": "600",
        "description": "Hoa lan được người tiêu dùng ưa chuộng vì vẻ đẹp đặc sắc và các hình thức đa dạng của chúng. Cũng giống như cây lan, hoa lan hầu như có tất cả các màu trong cầu vồng và những kết hợp của các màu đó. Hoa lan nhỏ nhất chỉ bằng hạt gạo trong khi hoa lan lớn nhất có đường kính khoảng 1 m.Đa số các loại hoa lan được bán rộng rãi trên thị trường thường không có hương thơm nhưng trong tự nhiên có rất nhiều loại hoa lan có mùi thơm đặc trưng. Vanilla là một loại hoa lan mà hương thơm được dùng trong các loại ẩm thực của thế giới và có nguồn gốc từ México; trong khi đó có các loại hoa lan tỏa ra mùi như thịt bị hỏng để hấp dẫn các côn trùng.",
        "img": "hoa-cuc1.jpg"
    },
    {
        "id": 13,
        "name": "Hoa Tulip",
        "images": "hoa-tulip1.jpg",
        "price": "800",
        "sale_price": "0",
        "description": "Hoa của hoa tulip thường có màu sắc rực rỡ, hình chuông hoặc hình ngôi sao và vô cùng đối xứng. Tất cả hoa tulip đều có sáu cánh hoa. Các cánh hoa có thể mịn, tua hoặc xù. Hoa có thể là đơn hoặc đôi.Đây là một trong những loài hoa dễ nhận biết và được yêu thích nhất trên thế giới. Những bông hoa tulip mang vẻ đẹp độc đáo và khác biệt. Cảm giác mà hoa tulip mang lại cho chúng ta chính là sự dễ chịu. Chúng không quá thanh lịch, quá lãng mạn, quá lớn, quá nhỏ, hoa tulip luôn luôn vừa phải.",
        "img": "hoa-tulip1.jpg"
    },
    {
        "id": 14,
        "name": "Bó Hoa",
        "images": "bó-hoa-cm.jpg",
        "price": "400",
        "sale_price": "0",
        "description": " Với đội ngũ nhân viên trẻ trung đầy nhiệt huyết và dày dặn kinh nghiệm, chúng tôi luôn nỗ lực hết sức mình để làm hài lòng quý khách hàng.Điện hoa tươi cam kết sản phẩm hoa sinh nhật được thực hiện dựa trên mẫu đã chọn. Miễn phí thiệp chúc mừng, băng zôn ( nếu có nội dung chúc mừng ).Sản phẩm được chuyển phát miễn phí trong khu vực nội thành.Thời gian giao hàng nhanh nhất có thể từ 30 phút kể từ khi khách hàng đặt hàng (đối với các đơn hàng gấp, tuỳ thuộc vào yêu cầu và địa chỉ được giao).Dễ dàng thanh toán online với thẻ nội địa, quốc tế, Visa, Master, Paypal… ngay tại websiteHoa tốt cam kết gửi hình ảnh thực tế sản phẩm của quý khách trước khi giao hàng 30 phút(qua zalo hoặc các phương tiện liên hệ khác). Sản phẩm của chúng tôi luôn mang những ý nghĩa tốt đẹp nhất gửi tới người nhận.",
        "img": "hoa-hồng-cưới.jpg"
    },
]
const banner_body = [{
    "id": 1,
    "title": "NGÀY LỄ",
    "name": "Những Món Quà",
    "description": "Dozen hoa bách hợp thân ái!",
    "images": "banner4.jpg"
}]