export default {
    promoNote: 'Легкий, быстрый, кастомизируемый календарь, написанный на чистом JavaScript, без сторонних зависимостей',
    installTitle: 'Установка',
    usageTitle: 'Использование',
    navExamples: 'Примеры',
    example: 'Пример',
    navDoc: 'Документация',
    navApi: 'API',
    chooseDate: 'Выберите дату',
    inSection: 'разделе',
    possibleSymbols: 'Возможные символы:',

    exampleBasicTitle: 'Инициализация с опциями по умолчанию',
    exampleBasicInlineTitle: 'Статичный календарь',
    exampleBasicInlineNote: 'Для того, чтобы календарь был постоянно видимый, нужно его проинициализировать не на текстовом поле, или передать параметр {param}',
    exampleRangeTitle: 'Выбор диапазона',
    exampleRangeNote: 'Для того, чтобы выбрать диапазон дат, передайте параметр {param}. После выбора обеих дат, можно скорректировать выбор просто перетаскивая активные даты.',
    exampleTimeTitle: 'Выбор времени',
    exampleTimeTitleFormat: 'Формат времени',
    exampleTimeRangeTitle: 'Настройка часов и минут',
    exampleTimeRangeNote: 'Время регулируется несколькими опциями, это {commonOptions}. Также можно настраивать шаг шкалы выбора времени с помощью {stepOptions}.',
    exampleTimeRangeNote2: 'Давайте попробуем ограничивать выбор часов с 9 до 18 и добавить шаг выбора минут в значение 5',
    exampleTimeFormatNote: 'Формат времени задается в объекте локализации или в опции {paramName}. Для отображения времени в 12-ти часовом варианте, добавьте {dateFormataa} или {dateFormatAA} в конец строки с форматом времени.',
    exampleTimeNote: 'Передайте {param} для выбора времени. По умолчанию устанавливается текущее время пользователя. Стартовое значение даты и времени можно регулировать с помощью параметра {startDate}',
    exampleCellContentTitle: 'Произвольное содержимое ячеек',
    exampleCellContentNote: 'Air Datepicker позволяет изменять содержимое ячеек как угодно. Содержание, классы и статус (активный/не доступный для выбора) регулируются с помощью опции {param}.',
    exampleCellContentNote_2: 'В следующем примере заменим содержимое ячеек из списка дат на произвольную эмоджи, плюс поменяем активный цвет фона таких ячеек',
    exampleButtonsTitle: 'Добавление кнопок',

    docsOptionsTitle: 'Опции',
    optsClasses: 'Добавляет дополнительные классы календарю.',
    optsInline: 'Делает календарь постоянно видимым.',
    optsLocale: 'Язык отображения календаря. Доступные локали находятся в директории {dir}.',
    optsLocale2: 'Подробнее со структурой локализации можно ознакомиться в соответствующем {link}.',
    optsStartDate: 'Устанавливает начальную дату отображения календаря.',
    optsFirstDay: 'Индекс дня, с которого начинается неделя. Возможные значение от 0 (воскресенье) до 6 (суббота). По умолчанию берется из локализации, если значение передать сюда, то оно будет иметь больший приоритет.',
    optsWeekends: 'Индексы дней, которые будут считаться выходными. Им будет добавлен класс {className}. По умолчанию это суббота и воскресенье.',
    optsDateFormat: 'Формат даты. С 3 версии формат даты основывается на стандарте {standardLink}. По умолчанию берется из текущей локали. Значение, переданное сюда, будет иметь больший приоритет.',
    optsDateFormatsTitle: 'Доступные символы:',
    optsDateFormatT: 'время в миллисекундах',
    optsDateFormatE: 'краткое названия дня недели, поле {fieldName} из локали',
    optsDateFormatEEEE: 'полное названия дня недели, поле {fieldName} из локали',
    optsDateFormatd: 'день месяца',
    optsDateFormatdd: 'день месяца с лидирующим нулем',
    optsDateFormatM: 'номер месяца',
    optsDateFormatMM: 'номер месяца с лидирующим нулем',
    optsDateFormatMMM: 'краткое наименование месяца, поле {fieldName} из локали',
    optsDateFormatMMMM: 'полное наименование месяца, поле {fieldName} из локали',
    optsDateFormatyy: 'сокращенный год из двух цифр',
    optsDateFormatyyyy: 'полный номер года',
    optsDateFormatyyyy1: 'первый год декады текущего года',
    optsDateFormatyyyy2: 'последний год декады текущего года',
    optsAltField: 'Дополнительное текстовое поле, куда будет записываться дата с форматом из поля {fieldName}',
    optsAltFieldDateFormat: 'Формат даты дополнительного поля',
    optsToggleSelected: 'Если {true}, то клик на активной ячейке снимет с нее выделение',
    optsKeyboardNav: 'Включает навигацию по календарю с помощью клавиатуры. Работает только в случае когда элемент, на котором инициализируется календарь, является текстовым полем.',
    optsKeyboardNavListTitle: 'Сочетания клавиш:',
    optsKeyboardNavMonthForward: 'переход на месяц вперед',
    optsKeyboardNavMonthBackward: 'переход на месяц назад',
    optsKeyboardNavYearForward: 'переход на год вперед',
    optsKeyboardNavYearBackward: 'переход на год назад',
    optsKeyboardNavDecadeForward: 'переход на 10 лет вперед',
    optsKeyboardNavDecadeBackward: 'переход на 10 лет назад',
    optsKeyboardNavView: 'смена представления, от дней до декад',
    optsKeyboardNavEsc: 'закрытие календаря',
    optsSelectedDates: 'Массив активных дат. Принимает как отдельные типы данных, так и смешанные. Если будет передан невалидный формат даты, то это значение будет проигнорировано',
    optsPosition: 'Позиционирование календаря относительно текстового поля. Первым значением задается основная ось позиционирования, вторым - положение на этой оси.',
    optsPosition2: ' Например {example} - установит позицию календаря справа вверху от текстового поля.',
    optsOffset: 'Отступ от текстового поля по основной оси.',
    optsView: 'Начальное представление календаря. Возможные значения:',
    optsViewDays: 'отображение дней одного месяца',
    optsViewMonths: 'отображения месяцев одного года',
    optsViewYears: 'отображение годов одной декады',
    optsMinView: 'Минимально возможное представление календаря. Используется, например, когда нужно предоставить только выбор месяца. Возможные значения такие же как и у {optsName}',
    optsShowOtherMonths: 'Если {trueField}, то в представлении дней будут отображаться даты из других месяцев.',
    optsSelectOtherMonths: 'Если {trueField}, то можно будет выбрать даты из других месяцев.',
    optsMoveToOtherMonthsOnSelect: 'Если {trueField}, то при выборе дат из другого месяца будет осуществлен переход к этому месяцу.',
    optsMinDate: 'Минимально возможная дата для выбора.',
    optsMaxDate: 'Максимально возможная дата для выбора.',
    optsDisableNavWhenOutOfRange: 'Нужно ли запрещать переходить на следующий или предыдущий месяц/год/декаду если они выходят за рамки минимальной или максимальной дат. ',
    optsDisableNavWhenOutOfRange2: 'Если {trueField}, то при наступлении такого сценария будут деактивироваться кнопки навигации календаря',
    optsMultipleDates: 'Если {trueField}, то можно будет выбрать неограниченное количество дат. Если передать число, то количество выбираемых дат будет ограничено этим числом.',
    optsMultipleDatesSeparator: 'Разделитель между датами - используется в режиме множественного выбора дат и в режиме выбора диапазона.',
    optsRange: 'Предоставляет возможность выбора диапазона дат. В качестве разделителя будет использовано значение из {fieldName}',
    optsDynamicRange: 'Если {trueField}, то после выбора дат в режиме диапазона, их можно будет изменить путем перетаскивания курсором мыши.',
    optsButtons: 'Эта опция позволяет добавить кнопки в интерфейс календаря. Можно добавить как две готовые кнопки, так и создать произвольную кнопку.',
    optsButtons2: 'Изначально доступны два варианта:',
    optsButtonsToday: 'кнопка «Сегодня» - при нажатии будет осуществлен переход к сегодняшней дате',
    optsButtonsClear: 'кнопка «Очистить» - при нажатии все активные даты будут деактивированы.',
    optsButtons3: 'Для того, чтобы создать свою кнопку нужно передать объект следующего вида:',
    optsButtons4: 'Пример произвольной кнопки',
    optsMonthsField: 'Поле из объекта локализации, которое будет использовано для отображения названий месяца в представлении {months}.',
    optsShowEvent: 'Событие, которому будет показан календарь.',
    optsAutoClose: 'Если {trueField}, то после выбора даты календарь будет скрыт.',
    optsPrevHtml: 'Контент кнопки «Назад» в навигации календаря',
    optsNextHtml: 'Контент кнопки «Вперед» в навигации календаря',
    optsNavTitles: 'Шаблоны заголовков в навигации календаря. Можно использовать HTML теги и символы из {formatDateField}. Также можно передать функцию в качестве значения - она получит экземпляр календаря в качестве аргумента, и должна будет вернуть строку.',
    optsNavTitles2: 'В случае, если передана функция, она будет вызываться каждый раз при смене представления, выбора даты или при переходе на другой месяц.',
    optsNavTitles3: 'Значения по умолчанию:',
    optsNavTitles4: 'Применение:',
    optsTimepicker: 'Включает возможность выбрать время.',
    optsDateTimeSeparator: 'Разделитьель между датой и временем.',
    optsOnlyTimepicker: 'Если нужно выбрать только время без конкретной даты.',
    optsTimeFormat: 'Формат времени. Так же как и {dateFormatField} опирается на {standardLink}. Если передать 12-часовой формат отображения часов, то ползунки времени будут автоматически подстроены под соответствующий режим.',
    optsTimeFormath: 'часы в 12-часовом формате',
    optsTimeFormathh: 'часы в 12-часовом формате с лидирующим нулем',
    optsTimeFormatH: 'часы в 24-часовом формате',
    optsTimeFormatHH: 'часы в 24-часовом формате с лидирующим нулем',
    optsTimeFormatm: 'минуты',
    optsTimeFormatmm: 'минуты с лидирующим нулем',
    optsTimeFormataa: 'период дня маленькими буквам',
    optsTimeFormatAA: 'период дня заглавными буквами',
    optsMinHours: 'Минимально допустимое к выбору значение часов.',
    optsMaxHours: 'Максимально допустимое к выбору значение часов.',
    optsMinMinutes: 'Минимально допустимое к выбору значение минут.',
    optsMaxMinutes: 'Максимально допустимое к выбору значение минут.',
    optsHoursStep: 'Шаг выбора часов.',
    optsMinutesStep: 'Шаг выбора минут.',
};
