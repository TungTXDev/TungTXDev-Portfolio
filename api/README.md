# Portfolio Analytics API

Backend API để lấy số lượng visitors từ Google Analytics.

## Setup

### 1. Tạo Service Account trong Google Cloud Console

1. Truy cập [Google Cloud Console](https://console.cloud.google.com/)
2. Chọn project của bạn (hoặc tạo mới)
3. Vào **IAM & Admin** > **Service Accounts**
4. Click **Create Service Account**
5. Đặt tên (vd: `portfolio-analytics`)
6. Click **Create and Continue**
7. Không cần grant roles, click **Continue**
8. Click **Done**

### 2. Tạo Key cho Service Account

1. Click vào service account vừa tạo
2. Vào tab **Keys**
3. Click **Add Key** > **Create new key**
4. Chọn **JSON**
5. Click **Create** - file JSON sẽ được download

### 3. Thêm Service Account vào Google Analytics

1. Truy cập [Google Analytics](https://analytics.google.com/)
2. Vào **Admin** (góc dưới bên trái)
3. Trong cột **Property**, click **Property Access Management**
4. Click **+** (Add users)
5. Nhập email của service account (từ file JSON: `client_email`)
6. Chọn role: **Viewer**
7. Click **Add**

### 4. Lấy Property ID

1. Trong Google Analytics, vào **Admin**
2. Trong cột **Property**, click **Property Settings**
3. Copy **Property ID** (dạng: 123456789)

### 5. Cấu hình Environment Variables

1. Copy file `.env.example` thành `.env`:
   ```bash
   cp .env.example .env
   ```

2. Mở file JSON đã download, copy các giá trị:
   - `client_email` → `GA_CLIENT_EMAIL`
   - `private_key` → `GA_PRIVATE_KEY`
   - Property ID → `GA_PROPERTY_ID`

### 6. Cài đặt và chạy

```bash
# Cài đặt dependencies
npm install

# Chạy development
npm run dev

# Hoặc chạy production
npm start
```

API sẽ chạy tại: `http://localhost:3001`

## Endpoints

- `GET /api/visitor-count` - Lấy số lượng visitors
- `GET /api/health` - Health check

## Deploy

### Vercel (Khuyên dùng)

1. Tạo file `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "api/server.js"
    }
  ]
}
```

2. Deploy:
```bash
vercel
```

3. Thêm environment variables trong Vercel dashboard

### Railway / Render

1. Connect GitHub repo
2. Thêm environment variables
3. Deploy

## Bảo mật

- File `.env` đã được thêm vào `.gitignore`
- Không commit service account key lên Git
- Sử dụng environment variables cho production
