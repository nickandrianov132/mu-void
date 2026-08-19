const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');

const inputFile = path.join(__dirname, 'IGC_HarmonyItem_Option.xml');
const outputDir = path.join(__dirname, '..', '..', '..', 'client', 'src', 'utils', 'muItems');
const outputFile = path.join(outputDir, 'item_harmony_options.json');

const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true,
    attrValueProcessors: [(val) => isNaN(val) ? val : Number(val)]
});

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) return console.error("Ошибка чтения XML:", err);

    // Очистка от комментариев и возможных некорректных символов
    const cleanXml = data
        .replace(/<!--[\s\S]*?-->/g, '') // Убираем комментарии
        .replace(/&(?!amp;|lt;|gt;|quot;|apos;)/g, '&amp;'); // Фиксим амперсанды

    parser.parseString(cleanXml, (err, result) => {
        if (err) {
            console.error("❌ Ошибка парсинга:", err.message);
            return;
        }

       const types = result.HarmonySystem?.Type;

       if (!types) {
        return console.log("Не удалось найти структуру HarmonySystem/Type");
       }

       const optimizedData = {};
       const TypesArray = Array.isArray(types) ? types : [types];

       TypesArray.forEach(typeElement => {
        const typeId = typeElement.ID;  // 1 = Physical; 2 = Magical ....
        let options = typeElement.Option;

        if (!options) return;
        if (!Array.isArray(options)) options = [options];

        options.forEach(option => {
            const optionAttrs = option.$ || option;
            const optionIndex = optionAttrs.Index;
            const typeId = typeElement.$ ? typeElement.$.ID : typeElement.ID;

            const globalKey = `${typeId}_${optionIndex}`;
            const levels = {};

            let effects = option.Effect;

            if (effects) {
                if (!Array.isArray(effects)) effects = [effects];

                effects.forEach((effect, i) => {
                    const effectAttrs = effect.$ || effect;


                    const valueKey = `Value${i}`;
                    const moneyKey = `ReqMoney${i}`;

                    if (effectAttrs[valueKey] !== undefined) {
                        levels[i] = {
                            value: parseInt(effectAttrs[valueKey]) || 0,
                            reqMoney: parseInt(effectAttrs[moneyKey]) || 0
                        };
                    }
                });
            }

            optimizedData[globalKey] = {
                typeId: parseInt(typeId),
                index: parseInt(optionIndex),
                name: optionAttrs.Name,
                reqLevel: parseInt(optionAttrs.ReqLevel) || 0,
                levels: levels
            }
        })
    //     options.forEach(option => {
    //         const optionIndex = option.Index;
    //         // уникальный ключ TypeID_OptionIndex (например 1_1 для Min Attack Damage)
    //         const globalKey = `${typeId}_${optionIndex}`;

    //         const levels = {};

    //         // Циклом собираем все EffectValueX & ReqMoneyX (от 0 до 15)
    //         for (let i = 0; i <= 15; i++) {
    //             const tagName = `EffectValue${i}`;

    //             const optionAttributes = option.$ || option;

    //             // проверяем, существует ли уровень заточки в XML строке
    //             if (optionAttributes[valueKey] !== undefined) {
    //                 levels[i] = {
    //                     value: optionAttributes[valueKey],
    //                     reqMoney: optionAttributes[moneyValue] || 0
    //                 };
    //             }
    //         }

    //         // формируем итоговый обьект для фронтенда
    //         optimizedData[globalKey] = {
    //             typeId: typeId,
    //             optionIndex: optionIndex,
    //             name: option.Name,
    //             reqLevel: option.ReqLevel || 0,
    //             levels: levels
    //         }
    //     })
    })

        // Создаем папку, если нет
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(outputFile, JSON.stringify(optimizedData, null, 2));
        console.log(`✅ Успешно! Обработано предметов: ${Object.keys(optimizedData).length}`);
        console.log(`📍 Файл: ${outputFile}`);
    });
});
