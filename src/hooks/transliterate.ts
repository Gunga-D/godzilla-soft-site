const a: { [key: string]: string } = {
  "Ё": "YO", "Й": "I", "Ц": "TS", "У": "U", "К": "K", "Е": "E", "Н": "N", "Г": "G", "Ш": "SH", "Щ": "SCH", "З": "Z", "Х": "H", "Ъ": "'",
  "ё": "yo", "й": "i", "ц": "ts", "у": "u", "к": "k", "е": "e", "н": "n", "г": "g", "ш": "sh", "щ": "sch", "з": "z", "х": "h", "ъ": "'",
  "Ф": "F", "Ы": "I", "В": "V", "А": "A", "П": "P", "Р": "R", "О": "O", "Л": "L", "Д": "D", "Ж": "ZH", "Э": "E",
  "ф": "f", "ы": "i", "в": "v", "а": "a", "п": "p", "р": "r", "о": "o", "л": "l", "д": "d", "ж": "zh", "э": "e",
  "Я": "Ya", "Ч": "CH", "С": "S", "М": "M", "И": "I", "Т": "T", "Ь": "'", "Б": "B", "Ю": "YU",
  "я": "ya", "ч": "ch", "с": "s", "м": "m", "и": "i", "т": "t", "ь": "'", "б": "b", "ю": "yu"
};

export function transliterate(word: string): string {
  return word.split('').map((char: string) => a[char] || char).join("");
}

export function getIdFromPath(value: string) {
  const params = value?.split("_")
  if (params !== undefined) {
    return (params[params.length-1])
  }
  return null
}

export function generatePathValue(title: string, itemID: number): string {
  const itemName = transliterate(title)
  return `${itemName?.replaceAll(" ", "_")}_${itemID}`
}

export function generateItemPath(categoryID: number, title: string, itemID: number): string {
  let catalogPath = ""
  switch (categoryID) {
    case 10001:
      catalogPath = "games"
      break
    case 10002:
      catalogPath = "subscriptions"
      break
    case 10004:
      catalogPath = "deposits"
      break
  }
  return `/${catalogPath}/${generatePathValue(title, itemID)}`
}
