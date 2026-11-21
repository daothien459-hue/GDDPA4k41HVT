# Uông Bí: Miền Non Thiêng & Đất Mỏ — Sách Ảnh Du Lịch (Ấn bản 18 Trang • Khổ 21×29 cm)

Dự án sách ảnh kỹ thuật số & bản in cao cấp **khổ 21×29 cm (Chuẩn A4 đứng: 210 × 297 mm, cô đọng đúng 18 trang đơn)** giới thiệu toàn diện cảnh quan, di sản văn hóa – tâm linh, lịch sử vùng than và sinh thái đại ngàn của **Thành phố Uông Bí, tỉnh Quảng Ninh** theo địa giới **10 đơn vị hành chính cấp xã (9 phường, 1 xã)** trước đợt sắp xếp năm 2025.

Ấn bản được thiết kế theo hệ lưới **Mosaic Tạp chí – Mỹ thuật (`flex-fill` không khoảng trống thừa)**, cân đối tỷ lệ khung hình dọc/ngang/toàn cảnh theo đúng kích thước gốc của **63 bức ảnh & tư liệu độc bản**.

---

## 1. Cấu trúc dự án

- [index.html](file:///c:/Users/Admin/Desktop/b/index.html) — Ấn bản sách ảnh tương tác **18 trang** chuẩn khổ 21×29 cm:
  - **📄 Trang đơn (21×29)**: Xem từng trang A4 đứng với tỷ lệ chuẩn $1 : \sqrt{2}$, lật trang 1 → 18.
  - **📖 Trang đôi (42×29)**: Xem 2 trang mở phẳng cạnh nhau như cầm cuốn sách thực tế (10 lượt mở trang đôi).
  - **📜 Cuộn đọc**: Cuộn mượt mà liên tục qua 18 trang nội dung.
- [css/book.css](file:///c:/Users/Admin/Desktop/b/css/book.css) — Hệ thống dàn trang báo chí – mỹ thuật (`Playfair Display`, `Noto Serif`, `Plus Jakarta Sans`), hệ lưới **Photo Mosaic co giãn lấp đầy 100% chiều cao trang** (`.photo-mosaic`, `.mosaic-row`, `.mosaic-split`) và thiết lập in ấn `@page { size: 210mm 297mm; margin: 0; }`.
- [js/book.js](file:///c:/Users/Admin/Desktop/b/js/book.js) — Bộ điều khiển đa chế độ đọc, ngăn kéo **Mục lục (18 trang)**, **Thư viện triển lãm 63 ảnh**, phóng to ảnh (`Lightbox`) kèm thông tin tác giả/giấy phép, và **Bản đồ phân vùng địa chính SVG tương tác**.
- [data/images-metadata.json](file:///c:/Users/Admin/Desktop/b/data/images-metadata.json) & [data/credits.js](file:///c:/Users/Admin/Desktop/b/data/credits.js) — Siêu dữ liệu gốc và giấy phép mở (CC0, CC BY, CC BY-SA, Public Domain) của toàn bộ **63 ảnh tư liệu độc bản** (đã loại bỏ hoàn toàn các ảnh trùng lặp) từ Wikimedia Commons & Thư viện Quốc gia Pháp.
- `assets/images/` — Thư mục chứa toàn bộ **63 ảnh chất lượng cao** (từ 1024px đến 5184px).
- [sach-anh-uong-bi-21x29.pdf](file:///c:/Users/Admin/Desktop/b/sach-anh-uong-bi-21x29.pdf) & [sach-anh-uong-bi-truoc-sap-nhap.pdf](file:///c:/Users/Admin/Desktop/b/sach-anh-uong-bi-truoc-sap-nhap.pdf) — Tệp PDF xuất bản khổ A4 đứng (210 × 297 mm, dung lượng ~87 MB) gồm **chuẩn xác 18 trang đơn**, sắc nét, không tràn trang, không khoảng trống thừa.

---

## 2. Mục lục 18 trang sách (Khổ 21×29 cm • 63 Ảnh độc bản)

| Trang | Nội dung chính | Điểm nhấn bố cục & hình ảnh |
|:---:|---|---|
| **01** | **Bìa sách trước (Front Cover)** | Đỉnh thiêng Chùa Đồng trong biển mây ngàn, biểu tượng Uông Bí |
| **02** | Lời tựa & Bức tranh toàn cảnh Uông Bí | Thơ thiền Trần Nhân Tông, thông số địa chính, toàn cảnh Yên Tử – Quốc lộ 18 – Phố thị |
| **03** | Atlas 9 Phường – 1 Xã & Sơ đồ SVG | Bảng 10 đơn vị hành chính trước 2025, bản đồ SVG tương tác & 3 bản đồ địa giới |
| **04** | Chương I: Đô thị điện – than & Sông nước Phương Nam | Timeline lịch sử, Nhiệt điện Uông Bí, Miệt vườn Phương Nam, Kho trung tâm 1930 |
| **05** | Chương I: Hào khí Bạch Đằng & Đình Đền Công | P. Trưng Vương (Điền Công cũ): 2 tranh thủy chiến 1288, cọc gỗ lim, sơ đồ & bãi cọc |
| **06** | Chương II: Non thiêng Yên Tử & Chùa Lân | Dãy Yên Tử trập trùng (X. Thượng Yên Công) & toàn cảnh Thiền viện Trúc Lâm |
| **07** | Chương II: Tam quan, Chính điện & Tháp Tịch Quang | Bố cục bất đối xứng: Tháp Tịch Quang dáng đứng cạnh Tam quan & tượng Phật đồng 5 tấn |
| **08** | Chương II: Phật hoàng Trần Nhân Tông & Tranh cổ | Đại tượng 138 tấn, chân dung Sơ Tổ, trích đoạn & toàn cuộn *Trúc Lâm Đại Sĩ xuất sơn đồ* |
| **09** | Chương II: Đường Tùng 700 năm & Bản Dao Thanh Y | Đường hành hương cổ, cáp treo, thung lũng Khe Sú – Làng Nương, mũ Dao Thanh Y 1957 |
| **10** | Chương II: Chùa Hoa Yên & Vườn Tháp Huệ Quang | Chùa Cả (535 m), cây đại cổ 700 năm, Tháp Tổ Huệ Quang (1309) & quần thể tháp đá |
| **11** | Chương II: Vượt dốc Phù Vân lên Chùa Đồng 1.068 m | Rừng di sản, tượng đá An Kỳ Sinh, toàn cảnh Chùa Đồng giữa biển mây & kiến trúc đao đồng |
| **12** | Chương III: Chùa Ba Vàng & Núi Thành Đẳng | Lưới 4 ảnh lớn P. Quang Trung: Toàn cảnh Bảo Quang Tự, Tam quan, Lầu Gió, Tượng Quán Thế Âm |
| **13** | Chương IV: Hồ Yên Trung & Lưu vực Sông Đá Bạc | Toàn cảnh hoàng hôn Hồ Yên Trung (P. Phương Đông), ráng chiều rừng thông & sông Đá Bạc |
| **14** | Chương V: Đỉnh Bình Hương & Phượng Hoàng | Đồi cỏ Vàng Danh – Bắc Sơn, thung lũng Vàng Danh toàn cảnh, đường sắt khổ hẹp & tàu mỏ |
| **15** | Tư liệu 1918 – 1942: Ký ức mỏ than Gaston Dupont | Bộ 11 ảnh archival lịch sử: Đầu máy Baldwin 1918, bản đồ 1930, cảng Port-Redon, hầm lò 1942 |
| **16** | Cẩm nang 3 cung đường & Phụ lục ảnh (1 – 32) | 3 thẻ lịch trình 1N / 2N1Đ / Di sản Bạch Đằng & danh mục 32 tư liệu ảnh đầu tiên |
| **17** | Phụ lục ảnh (33 – 63) & Thông tin xuất bản | Danh mục 31 tư liệu ảnh tiếp theo (3 cột gọn gàng) & ghi chú bản quyền Creative Commons |
| **18** | **Bìa sách sau (Back Cover)** | Lời kết "Uông Bí trong ký ức & tương lai", bảng đối chiếu 9 phường, 1 xã trước sáp nhập |

---

## 3. Cách mở và sử dụng

1. **Xem trên trình duyệt**:
   - Nhấp đúp mở trực tiếp [index.html](file:///c:/Users/Admin/Desktop/b/index.html) trong bất kỳ trình duyệt nào.
   - Chuyển đổi giữa 3 chế độ xem: **📄 Trang đơn (21×29)**, **📖 Trang đôi (42×29)**, hoặc **📜 Cuộn đọc**.
   - Nhấp vào từng ảnh để xem phóng to (`Lightbox`), mở **☰ Mục lục** hoặc **⊞ Thư viện ảnh (63)**.
2. **In ấn / Xuất PDF**:
   - Bấm **🖨 Xuất PDF (21×29)** (hoặc `Ctrl + P`), chọn **Save as PDF**, khổ **A4 dọc (Portrait)**, lề **None**.
   - Hoặc sử dụng trực tiếp tệp PDF hoàn chỉnh tại [sach-anh-uong-bi-21x29.pdf](file:///c:/Users/Admin/Desktop/b/sach-anh-uong-bi-21x29.pdf).
