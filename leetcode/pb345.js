/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    const array = s.split('');
    const vowelsInString =array.filter(ch => vowel.includes(ch) > 0).reverse();

    
    let index = 0;
    return array.map(ch => {
        if (vowel.includes(ch)) {
            return vowelsInString[index ++];
        }
        return ch;
    }).join('');
};