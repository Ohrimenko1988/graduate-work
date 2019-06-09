# Варіанти запуску програми

## Запуск на хості в ручну

- встановити ```Node.js``` версії не нижче ```8.15.1```
- відкрити термінал та зайти в папку **```backend```**
- виконати команду ```npm install && npm run start```
- відкрити новий термінал та зайти в папку **```frontend```**
- виконати команду ```npm install && npm run start```

## Запуск на хості за допомогою скрипта

- встановити ```Node.js``` версії не нижче ```8.15.1```
- запустити скрипт **```bare-metal-deploy.sh```**

## Запуск за допомогою Docker

- встановити ```Docker версії``` не нижче ```1.17```
- виконати команду ```“docker run -p 3000:3000 iokhrime/graduate-work-frontend:latest && docker run -p 8080:8080 iokhrime/graduate-work-backend:latest”```

Після запуску програма буде доступні за адресою <http://localhost:3000>

Свіжа версія програми може бути отримана з "Github" репозиторію <https://github.com/Ohrimenko1988/graduate-work>
