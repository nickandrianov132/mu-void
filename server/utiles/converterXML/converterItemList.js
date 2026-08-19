const fs = require('fs');
const xml2js = require('xml2js');
const path = require('path'); // Добавляем модуль path
// 1. Путь к исходному XML (относительно этого скрипта или полный)
const inputFile = path.join(__dirname, 'IGC_ItemList.xml'); 
// 2. Путь к папке клиента
// ../../../ поднимается из server/utiles/converterXML в корень проекта, 
// а затем заходит в client/...
const outputDir = path.join(__dirname, '..', '..', '..', 'client', 'src', 'utils', 'muItems');
const outputFile = path.join(outputDir, 'item_list.json');
// Проверка: создаем папку, если её вдруг нет
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
const parser = new xml2js.Parser({
    explicitArray: false,
    mergeAttrs: true,
    attrValueProcessors: [(val) => isNaN(val) ? val : Number(val)]
});
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) return console.error("Ошибка чтения XML:", err);

    parser.parseString(data, (err, result) => {
        if (err) return console.error("Ошибка парсинга:", err);
        const optimizedData = {};
        const sections = result.ItemList.Section;

        sections.forEach(section => {
            const sectionId = section.Index;
            const items = Array.isArray(section.Item) ? section.Item : [section.Item];

            items.forEach(item => {
                const key = `${sectionId}_${item.Index}`;
                optimizedData[key] = {
                    ...item,
                    categoryName: section.Name,
                    categoryId: sectionId
                };
            });
        });
        // Запись файла по новому пути
        fs.writeFileSync(outputFile, JSON.stringify(optimizedData, null, 2));
        console.log(`✅ Успешно! Файл сохранен в: ${outputFile}`);
    });
});
