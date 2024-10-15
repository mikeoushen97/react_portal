import express from 'express';
import mysql from 'mysql';

const app = express();
const port = 3001; // или другой порт

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'my_database'
});

db.connect((err) => {
    if (err) {
        console.error('Ошибка подключения к базе данных:', err);
        return;
    }
    console.log('Подключение к MySQL установлено');
});

app.get('/api/products', (req, res) => {
    const sql = 'SELECT * FROM products';

    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Ошибка при получении данных' });
            return;
        }
        res.json(result);
    });
});

app.listen(port, () => {
    console.log(`Сервер работает на порту ${port}`);
});
