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

