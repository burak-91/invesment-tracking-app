# Yatırım Takip Uygulaması - Frontend

Bu proje, yatırımlarınızı takip etmenizi ve kar/zarar durumunuzu görüntülemenizi sağlayan bir web uygulamasıdır.

## Özellikler

- Farklı yatırım türlerini (kripto, hisse, döviz, altın) takip etme
- Yatırım ekleme ve silme
- Portföy değeri ve kar/zarar takibi
- Varlık dağılımı grafikleri
- Güncel fiyat bilgileri

## Teknolojiler

- React
- TypeScript
- Material-UI
- React Query
- Recharts
- React Router

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/investment-tracker.git
cd investment-tracker/frontend
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

Uygulama http://localhost:3000 adresinde çalışacaktır.

## Ortam Değişkenleri

`.env` dosyasında aşağıdaki değişkenleri ayarlayabilirsiniz:

```
REACT_APP_API_BASE_URL=http://localhost:8080
```

## API Entegrasyonu

Uygulama, aşağıdaki API endpoint'lerini kullanır:

- `POST /auth/login`: Kullanıcı girişi
- `POST /auth/register`: Yeni kullanıcı kaydı
- `GET /investments`: Yatırımları listele
- `POST /investments`: Yeni yatırım ekle
- `GET /portfolio/summary`: Portföy özeti
- `GET /prices/current`: Güncel fiyatlar
