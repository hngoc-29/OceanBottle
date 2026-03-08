# 🌊 OceanBottle

**OceanBottle** là một web app cho phép bạn gửi **thông điệp bí mật trong chai** giống như thả thư ra đại dương 🌊🍾.

Bạn viết tin nhắn → hệ thống tạo **một link chia sẻ** → người khác mở link sẽ thấy **chai trôi trên biển** và mở ra để đọc thông điệp.

---

# ✨ Features

- 🍾 Message in a Bottle – gửi tin nhắn bằng link
- 🔐 Password Protection – có thể đặt mật khẩu cho tin nhắn
- 🔒 Client-side Encryption – mã hóa ngay trên trình duyệt
- 📱 QR Code Sharing – tạo QR code để chia sẻ
- 🌊 Ocean UI – giao diện đại dương với animation
- ⚡ Fast & Lightweight – chạy hoàn toàn phía client

---

# 🛠 Tech Stack

### Frontend
- React 19
- Vite
- React Router

### UI
- TailwindCSS
- shadcn/ui
- Radix UI
- Framer Motion

### Other
- QRCode
- MDX
- Geist Font

---

# 📦 Installation

Clone project:

```bash
git clone https://github.com/your-username/oceanbottle.git
cd oceanbottle
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

App sẽ chạy tại:

```
http://localhost:5173
```

---

# 🚀 Build Production

Build project:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

# 📁 Project Structure

```
src
 ├── components
 │   ├── ocean
 │   ├── bottle
 │   ├── ui
 │
 ├── crypto
 │   ├── message.ts
 │   ├── key.ts
 │
 ├── pages
 │   ├── home
 │   ├── viewer
 │
 ├── utils
 │   ├── base64.ts
 │   ├── url.ts
 │
 └── main.tsx
```

---

# 🔐 Security

- Tin nhắn được **mã hóa bằng Web Crypto API**
- Không có backend lưu dữ liệu
- Dữ liệu nằm trong **URL**

Điều này có nghĩa là:

- Không ai (kể cả server) có thể đọc nội dung
- Chỉ người có **link + password** mới mở được

---

# 🌊 Inspiration

Ý tưởng dựa trên concept:

> Message in a Bottle – gửi thông điệp ra đại dương và chờ ai đó tìm thấy.

OceanBottle biến ý tưởng này thành một trải nghiệm web tương tác.

---

# 📜 License

MIT License