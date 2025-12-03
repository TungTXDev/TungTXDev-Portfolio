# 🔑 Hướng dẫn Enable Google Analytics Data API

## ⚠️ Lỗi hiện tại:
```
Google Analytics Data API has not been used in project 107494268884 
before or it is disabled.
```

## ✅ Giải pháp:

### Cách 1: Dùng link trực tiếp (Nhanh nhất)
Click vào link này:
```
https://console.developers.google.com/apis/api/analyticsdata.googleapis.com/overview?project=107494268884
```

Sau đó click nút **"ENABLE"** màu xanh.

### Cách 2: Làm thủ công

1. **Truy cập Google Cloud Console**
   - Vào: https://console.cloud.google.com/
   - Chọn project: `tungtxdev-portfolio` (ID: 107494268884)

2. **Enable API**
   - Vào menu bên trái: **APIs & Services** > **Library**
   - Tìm kiếm: `Google Analytics Data API`
   - Click vào kết quả
   - Click nút **"ENABLE"**

3. **Đợi vài phút**
   - API cần thời gian để activate (1-5 phút)

4. **Test lại**
   ```bash
   cd api
   node test-api.js
   ```

## 🎯 Kết quả mong đợi:

Sau khi enable, bạn sẽ thấy:
```json
{
  "count": 1234,
  "cached": false
}
```

## 📝 Notes:

- Chỉ cần enable 1 lần duy nhất
- Miễn phí hoàn toàn
- Không cần credit card
- API có quota: 50,000 requests/day (quá đủ)

## ❓ Nếu vẫn lỗi:

### Lỗi: "Permission denied"
→ Kiểm tra Service Account đã được thêm vào GA chưa:
1. Vào [Google Analytics](https://analytics.google.com/)
2. Admin > Property Access Management
3. Thêm email: `ga4-api-tungtxdev-portfolio-se@tungtxdev-portfolio.iam.gserviceaccount.com`
4. Role: **Viewer**

### Lỗi: "Invalid credentials"
→ Kiểm tra file `.env`:
- `GA_PROPERTY_ID` đúng chưa
- `GA_CLIENT_EMAIL` đúng chưa
- `GA_PRIVATE_KEY` có đầy đủ không (bao gồm cả `\n`)

## 🚀 Sau khi enable xong:

1. Test API:
   ```bash
   cd api
   node test-api.js
   ```

2. Chạy frontend:
   ```bash
   npm run dev
   ```

3. Mở http://localhost:5173 và xem VisitorCounter!
