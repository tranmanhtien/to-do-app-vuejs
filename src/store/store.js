import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        toDos:[
            {
                id: 1,
                tittle: 'Quét nhà',
                completed: false,
                editting: false
            },
            {
                id: 2,
                tittle: 'Rửa bát',
                completed: true,
                editting: false
            },
            {
                id: 3,
                tittle: 'Nấu cơm',
                completed: false,
                editting: false
            }
        ]
    }
})