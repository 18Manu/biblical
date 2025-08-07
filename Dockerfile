# Stage 1 - Build Frontend
FROM node:20 as frontend
WORKDIR /app
COPY client ./client
RUN cd client && npm install && npm run build

# Stage 2 - Backend
FROM node:20-alpine
WORKDIR /app

COPY server ./server
COPY package*.json ./
RUN npm install

# Copia frontend compilado
COPY --from=frontend /app/client/dist ./public

# Seguridad
RUN npm install helmet cors express

EXPOSE 5000
CMD ["node", "server/app.js"]
