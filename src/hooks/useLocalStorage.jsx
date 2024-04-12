import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;











// 1. «Гордість і упередження» - Джейн Остін

// 2. «Діти капітана Гранта» - Жюль Верн

// 3. «Рембо» - Девід Моррелл

// 4. «Мистецтво війни» - Сунь-цзи

// 5. «Гостя з майбутнього» - Кір Буличов

// 6. «Тореадори з Васюківки» - Всеволод Нестайко

// 7. «Анна з Зелених Дахів» - Люсі Мод Монтгомері

// 8. «Маленький принц» - Антуан де Сент-Екзюпері

// 9. «Ігри, у які грають люди» - Ерік Берн

// 10. «Чоловік на ім’я Уве» - Фредрік Бакман