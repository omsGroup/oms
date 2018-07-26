import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        author:'BWW',
        tabsData:''
    },
    mutations:{ 
    	saveTabs(state,msg){
    		localStorage.setItem('tabsData',JSON.stringify(msg))
    	},
    	setTabs(state){
    		state.tabsData=JSON.parse(localStorage.getItem('tabsData'))
    	},
    }
})
export default store
