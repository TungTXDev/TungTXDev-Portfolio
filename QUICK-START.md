# 🚀 Quick Start Guide

## Bước 1: Cài đặt API
```bash
cd api
npm install
```

## Bước 2: Chạy API
```bash
npm run dev
```

Bạn sẽ thấy:
```
Analytics API server running on port 3001
```

## Bước 3: Test API
Mở terminal mới:
```bash
cd api
npm test
```

Hoặc mở browser: `http://localhost:3001/api/visitor-count`

## Bước 4: Chạy Frontend
Terminal mới:
```bash
npm run dev
```

Mở `http://localhost:5173` và kiểm tra VisitorCounter ở góc phải trên.

## ✅ Nếu thành công

Bạn sẽ thấy:
- API trả về số visitors từ Google Analytics
- VisitorCounter hiển thị số đó với animation đếm
- Console không có lỗi

## ❌ Nếu có lỗi

### Lỗi 1: "Cannot find module"
```bash
cd api
npm install
```

### Lỗi 2: "Failed to fetch visitor count"
- Kiểm tra API có chạy không: `http://localhost:3001/api/health`
- Kiểm tra Service Account đã được thêm vào GA chưa

### Lỗi 3: "Error fetching analytics data"
Kiểm tra trong Google Analytics:
1. Admin > Property Access Management
2. Tìm email: `ga4-api-tungtxdev-portfolio-se@tungtxdev-portfolio.iam.gserviceaccount.com`
3. Nếu chưa có, click "+" để thêm với role "Viewer"

## 📦 Deploy

### Deploy API (Vercel)
```bash
cd api
vercel
```

Thêm environment variables trong Vercel dashboard.

### Deploy Frontend
```bash
npm run build
```

Upload folder `dist` lên Netlify/Vercel.

Cập nhật `.env`:
```
VITE_API_URL=https://your-api-url.vercel.app
```

## 🎯 Done!

Visitor counter bây giờ sẽ hiển thị số lượng thực tế từ Google Analytics!
