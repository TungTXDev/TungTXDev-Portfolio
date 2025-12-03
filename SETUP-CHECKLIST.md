# 📋 Checklist Setup Google Analytics Visitor Counter

## ✅ Đã hoàn thành

- [x] Tạo backend API structure (`api/server.js`, `api/package.json`)
- [x] Cấu hình `.env` với credentials
- [x] Cập nhật VisitorCounter component để gọi API
- [x] Thêm `.gitignore` cho API files
- [x] Tạo `.env.example` files

## 🔄 Cần làm tiếp

### 1. Cài đặt dependencies cho API
```bash
cd api
npm install
```

### 2. Kiểm tra Service Account đã được thêm vào GA chưa
- [ ] Truy cập [Google Analytics](https://analytics.google.com/)
- [ ] Vào **Admin** > **Property Access Management**
- [ ] Kiểm tra email: `ga4-api-tungtxdev-portfolio-se@tungtxdev-portfolio.iam.gserviceaccount.com`
- [ ] Nếu chưa có, thêm với role **Viewer**

### 3. Test API locally
```bash
cd api
npm run dev
```

Sau đó mở browser: `http://localhost:3001/api/visitor-count`

Kết quả mong đợi:
```json
{
  "count": 1234,
  "cached": false
}
```

### 4. Test frontend với API
```bash
# Terminal 1: Chạy API
cd api
npm run dev

# Terminal 2: Chạy frontend
npm run dev
```

Mở `http://localhost:5173` và kiểm tra VisitorCounter có hiển thị số đúng không.

### 5. Deploy API (Chọn 1 trong 3)

#### Option A: Vercel (Khuyên dùng - Miễn phí)
```bash
# Cài Vercel CLI
npm i -g vercel

# Deploy
cd api
vercel

# Thêm environment variables trong Vercel dashboard:
# - GA_PROPERTY_ID
# - GA_CLIENT_EMAIL  
# - GA_PRIVATE_KEY
```

#### Option B: Railway
1. Truy cập [railway.app](https://railway.app)
2. Connect GitHub repo
3. Chọn folder `api`
4. Thêm environment variables
5. Deploy

#### Option C: Render
1. Truy cập [render.com](https://render.com)
2. New Web Service
3. Connect GitHub repo
4. Root Directory: `api`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Thêm environment variables

### 6. Cập nhật frontend với API URL production

Tạo file `.env` trong root project:
```env
VITE_API_URL=https://your-deployed-api-url.com
```

Hoặc cập nhật trong `src/components/VisitorCounter.jsx`:
```javascript
const API_URL = 'https://your-deployed-api-url.com'
```

### 7. Deploy frontend
```bash
npm run build
# Deploy dist folder lên Netlify/Vercel/etc
```

## 🐛 Troubleshooting

### Lỗi: "Failed to fetch visitor count"
- Kiểm tra API có đang chạy không
- Kiểm tra CORS settings
- Kiểm tra network tab trong DevTools

### Lỗi: "Error fetching analytics data"
- Kiểm tra Service Account đã được thêm vào GA chưa
- Kiểm tra Property ID có đúng không
- Kiểm tra private key có đúng format không (phải có `\n`)

### Lỗi: "Cannot find module '@google-analytics/data'"
```bash
cd api
npm install
```

## 📝 Notes

- API có cache 5 phút để tránh gọi GA API quá nhiều
- Frontend có fallback về localStorage nếu API lỗi
- Không commit file `.env` lên Git
- Property ID hiện tại: `13086930824`

## 🎯 Next Steps

1. Test API locally ✅
2. Verify GA permissions ✅
3. Deploy API to production
4. Update frontend with production API URL
5. Test end-to-end
6. Monitor API logs

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
- Console logs trong browser (F12)
- API logs trong terminal
- Google Analytics permissions
- Environment variables
