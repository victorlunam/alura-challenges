const dictionary = {
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat",
};

const MATCH_DICTIONARY_REGEX = /(ai|enter|imes|ober|ufat)/;

export const encrypt = (text) => {
  const textSplit = Array.from(text);

  return textSplit.reduce((acc, letter) => {
    return acc.concat(dictionary[letter] || letter);
  }, "");
};

export const decrypt = (text) => {
  const dictionaryEntries = Object.entries(dictionary);
  const textSplit = text.split(MATCH_DICTIONARY_REGEX);

  return textSplit.reduce((acc, group) => {
    const match = dictionaryEntries.find((item) => item[1] === group);
    const decode = match ? match[0] : group;

    return acc.concat(decode);
  }, "");
};
