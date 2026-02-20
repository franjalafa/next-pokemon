import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/app/pokemons/interfaces/simple-pokemon";

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon };
}

const initialState: PokemonsState = {
    favorites: {},
    // ...getInitialState(),
    // '1': {id: '1', name: 'bulbasaur'}
};

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState,
	reducers: {
        setFavoritePokemons ( state, action: PayloadAction<{ [key: string]: SimplePokemon }>){
            state.favorites = action.payload;
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>){
            const pokemon = action.payload;
            const { id } = pokemon;

            if ( !!state.favorites[id]) {
                delete state.favorites[id];
                // return;
            }

            state.favorites[id] = pokemon

            localStorage.setItem('favorite-pokemons', JSON.stringify( state.favorites ));
        }
    },
});

export const {toggleFavorite, setFavoritePokemons} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
