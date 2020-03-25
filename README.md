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

> 5. Props
>> Props - свойства компонентов
>> Обьект props передается в каждый компонент
```js
    const Comp = (props) => {
        return (<i>{ props.name }</i>);
    }
```
>> Можно передавать любые значения (не только строки)

> 6. Arrays like props
>> Массив можно передать как свойство
>> В JSX можно вставлять массивы эллементов (не только по одному)
>> Можно передать все свойства обьекта в компонент {...}
>> by Object Spread operator ( не перечисляя каждое)

> 7. Collections and keys
>> Каждому JSX элементу в массиве нужно уникальное свойство key
>> Реакт использует  key  чтобы эффективно сравнивать элементы при обновлении
>> Не стоит делать ключи из индексов массива

> 8. CSS - Bootstrap or Material UI
>> Bootstrap можно подключать в index.html
>> CSS для компонентов удобно хранить в отдельных файлахЖ
>>1 компонент - 1 css файл
>> WebPack поддерживает импорт CSS файлов из Javascript модулей
>> MUI :
[MUI Documentation](https://material-ui.com/)
[Video tutorial course](https://www.youtube.com/watch?v=xm4LX5fJKZ8)



