import characters from '~/assets/characters.json'

export const getCharacters = () => {
    let counter = 0;
    characters.forEach(item => {
        counter++
    });
    const charactersArray = Array.from(counter)
    return charactersArray.map((_, index) => index + 1)
}

const getCharactersOptions = async () => {
    let charactersOptiones = getCharacters()
}