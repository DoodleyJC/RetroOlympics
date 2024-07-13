FROM node:20-alpine


WORKDIR /workspaces/frontend

COPY package.json package-lock.json ./
COPY src src
COPY public public

RUN ["npm", "install"]
EXPOSE 3000:3000
CMD ["npm", "run", "dev"]