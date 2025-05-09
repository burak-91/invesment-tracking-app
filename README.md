# Yatırım Takip Uygulaması

Bu proje, farklı platformlardaki yatırımlarınızı tek bir yerden takip etmenizi sağlayan bir web uygulamasıdır.

## Proje Yapısı

Proje iki ana bölümden oluşur:

- `frontend/`: React tabanlı web arayüzü
- `backend/`: Spring Boot tabanlı API servisleri

## Özellikler

- Farklı yatırım türlerini (kripto, hisse, döviz, altın) takip etme
- Yatırım ekleme ve silme
- Portföy değeri ve kar/zarar takibi
- Varlık dağılımı grafikleri
- Güncel fiyat bilgileri
- Kullanıcı kimlik doğrulama
- Gerçek zamanlı fiyat güncellemeleri

## Teknolojiler

### Frontend
- React
- TypeScript
- Material-UI
- React Query
- Recharts
- React Router

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- H2 Database
- JWT
- Maven

## Kurulum

### Frontend

```bash
cd frontend
npm install
npm start
```

### Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

## Geliştirme

1. Frontend geliştirme sunucusu http://localhost:3000 adresinde çalışır
2. Backend API servisleri http://localhost:8080 adresinde çalışır
3. H2 veritabanı konsoluna http://localhost:8080/h2-console adresinden erişilebilir

## API Dokümantasyonu

Detaylı API dokümantasyonu için backend klasöründeki README.md dosyasına bakın.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 