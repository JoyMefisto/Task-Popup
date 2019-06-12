const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config');
const app = express();

app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.listen(process.env.PORT || config.port,
	() => console.log(`Server start on port ${config.port} ...`));

app.get('/default', (req, res) => {
	res.send(
		{
			"success": true,
			"data": {
				"label": "Оцените Вашу готовность рекомендовать «Газпромнефть-Корпоративные продажи» своим коллегам / партнерам?",
				"reasons": {
					"931": "Задержки документооборота",
					"938": "Неудобный личный кабинет / не хватает опций",
					"492": "Не устраивает тарифная политика",
					"872": "Текущие рабочие вопросы решаются медленно",
					"391": "Неудобная отчетность / нет нужных отчетов",
					"219": "Неудобные / долгие процедуры заключения договора",
					"183": "Сбои при работе с личным кабинетом",
					"252": "Мало дополнительных сервисов для водителей по топливным картам",
					"371": "Не устраивает работа менеджеров",
					"10": "Другое"
				}
			}
		}
	)
});

app.post('/finally', (req, res) => {
	console.log(req.body);

	res.send(
		{
			"success": !!req.body.length,
		}
	)
});
