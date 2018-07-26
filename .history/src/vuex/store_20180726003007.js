import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        author:'BWW',
        tabsData:'',
        currTabs:''
    },
    mutations:{ 
    	saveTabs(state,msg){
    		localStorage.setItem('tabsData',JSON.stringify(msg))
    	},
    	setTabs(state){
    		state.tabsData=JSON.parse(localStorage.getItem('tabsData'))
        },
        setCurrTabs(state){
            state.currTabs = localStorage.getItem('currTabs')
            console.log(localStorage.getItem('currTabs'), state.currTabs)
        }
    }
})
export default store
