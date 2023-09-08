Работа с Webpack

Запускаем сборку проекта:
npm run build   или 
npx webpack

Запуск webpack-dev-server:
 npm run start:dev
 
Запуск окружения development:
 npm run dev    

Запуск окружения production:
 npm run prod   
 
 Запуск JSON-server:
  npm run server


1. С помощью npm init мы создадим проект
2. В корне создаем папку src и добавим в неё index.html и index.js
3. Для работы с Webpack установить два пакета (webpack и webpack-cli) с помощью команды:
	npm install webpack webpack-cli --save-dev
4. Запускаем сборку проекта
	npx webpack
5.В самом проекте появится новая директория dist, в которой будет находиться main.js файл, сгенерированный webpack.
6.Также, можно создать скрипт в пакете package.json. Добавим в объект scripts следующую строку:
	"build" : "webpack"
7.Настало время для того, чтобы создать конфигурационный файл для вебпака.
В корне проекта создадим файл с названием webpack.config.js.
8.Конфигурации вебпака должны описываться
	module.exports = {
		entry: './src/index.js',
		output: {
			filename: 'main.js'
		}
	}
