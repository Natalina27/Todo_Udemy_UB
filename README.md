# Структура 

## Приложение "Todo List"

## Branches:
> 1. React element
```js
    const a = <h1>Hi</h1>
```
>> Создаются при помощи JSX
>> Легковесные обьекты Virtual DOM
>> ReactDOM.render() превращает React элементы
>> в обычные браузерные DOM элементы и рендерит их на странице

> 2. React Component
```js
    const Header = () => {return <h1> Hi </h1>};
```
>> Функции которые возвращают реакт элемент
>> Должны начинаться с большой буквы
>> Имя затем можно использовать в JSX как будто это HTML tag.

> 3. JSX
>> Позволяет использовать выражения { foo.bar }
>> Аттрибуты прописываются camelCase' ом  
>> class = className, for =  htmlFor
>> В свойство можно передавть любое значение
>> undefined, null, true и false в теле тегов игнорируются
>> не вызывая ошибок

> 4. React project structure
>> Один компонент - один файл
>> Помещаем все компоненты в папку components
>> Хорошие компоненты - независимые компоненты


