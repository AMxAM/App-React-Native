# ===========================
# Etapa 1 - Build
# ===========================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx expo export --platform web

# ===========================
# Etapa 2 - Producción
# ===========================
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]