FROM node:20

WORKDIR /app

COPY . .

RUN npm install
RUN npx prisma migrate dev --name init


EXPOSE 3000

# npm run start:dev
CMD ["npm", "run", "start:dev"]