const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path');

const inputFile = path.join(__dirname, 'IGC_ItemSetType.xml');
const outputDir = path.join(__dirname, '..', '..', '..', 'client', 'src', 'utils', 'muItems');
const outputFile = path.join(outputDir, 'item_set_types.json');

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

        const setMap = {};
        
        // В вашем файле корень SetItemType
        const root = result.SetItemType;
        if (!root || !root.Section) {
            console.error("❌ Неверная структура XML. Ожидался тег <SetItemType> с вложенными <Section>");
            return;
        }

        // Превращаем в массив, если секция всего одна
        const sections = Array.isArray(root.Section) ? root.Section : [root.Section];

        sections.forEach(section => {
            const sectionId = section.Index;
            
            // Проверяем, есть ли предметы в этой секции
            if (!section.Item) return;

            const items = Array.isArray(section.Item) ? section.Item : [section.Item];

            items.forEach(item => {
                // Создаем ключ "тип_индекс" (например "0_2" для Ceto Riper)
                const key = `${sectionId}_${item.Index}`;
                
                setMap[key] = {
                    tier1: item.TierI || 0,
                    tier2: item.TierII || 0,
                    tier3: item.TierIII || 0,
                    tier4: item.TierIV || 0,
                    mixA: item.MixLevelA || 0,
                    mixB: item.MixLevelB || 0
                };
            });
        });

        // Создаем папку, если нет
        if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

        fs.writeFileSync(outputFile, JSON.stringify(setMap, null, 2));
        console.log(`✅ Успешно! Обработано предметов: ${Object.keys(setMap).length}`);
        console.log(`📍 Файл: ${outputFile}`);
    });
});
