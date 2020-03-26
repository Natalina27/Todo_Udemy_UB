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

> 9. Project Structure improving
>> Файлы компонента удобно хранить в отдельной папке
>> Кроме JS и CSS у компонента могут быть файлы с юнит тестами и другими ресурсами
>> Если в папке есть index.js то он импортируется по умолчанию

> 10. Class component
>> Классы используются когда нужно хранить состояние
>> Класссы наследуют React.Component
>> Method render() возвращает элемент (как в функциональном компоненте)
>> props  доступны через this.props 

> 11. Event handling
>> Первым делом надо добавить свойство onClick (onMouseOver, onBlur etc.) к нужному элементу
> и передать туда функцию 
>> Обработчики должны находиться на одном уровне со state
>> Убедиться что this сохранит правильное значение внутри функции (типичная ошибка - arrow func)

> 12. state - состояние компонента
>> Состояние хранится в поле state
>> this.state инициализируется в конструкторе или в теле класса
>> После инициализации state нельзя менять (только читать)
>> Чтобы обновить state - setState()

> 13. setState()
>> 
