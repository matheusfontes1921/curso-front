//SPREAD

const any = {
    abc: 'teste',
    def: 'teste 2',
    ghi: 'teste3',
}

const newAny = {
    /* spread que coleta todas as informações de any */
    ...any,
    jkl: 'teste 4',
}
console.log(newAny);


const list = [1, 151, 1548, 822, 78];
const newList=[54,897,9853,7426];
/* forma de juntar vários array utilizando spread */
const finalList = [
    ...list,
    ...newList,
]

console.log(list);
console.log(newList);
/* as três formas juntam os dois arrays, mas é melhor usar spread */
console.log(list.concat(newList));
console.log(list + newList);
console.log(finalList);
