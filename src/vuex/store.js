import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        author:'BWW',
        tabData:JSON.parse(localStorage.getItem('tabsData'))
    },
    mutations:{
    	saveTabs(state,msg){
    		localStorage.setItem(JSON.stringify(msg))
    	}
    }
})
export default store
