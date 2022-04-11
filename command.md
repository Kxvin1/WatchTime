create .env
inside of psql:
    CREATE USER watch_time_app WITH PASSWORD 'watchtime';
    CREATE DATABASE watch_time WITH OWNER watch_time_app;
npx dotenv sequelize db:migrate
npx dotenv sequelize db:seed:all
