import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    /**
     * mapState:辅助函数 
     * 通过以下方式访问：  this.$store.state
     * 1. 箭头函数：count: state=>state.count;
     * 2. 字符串： countAlias:'count';
     * 3. 里面使用this：countLocatState(state){return state.count + this.localCount};
     */
    state:{

    },
    /** 相当state的计算属性 有缓存； 
     * 1. state为第一个参数；
     * 2. 其他的getter可以作为第二参数；
     * 访问方式：
     * 1. this.$store.getters  属性；
     * 2. this.$store.getters.getTodoById(2) 方法；
     * 3. ...mapGetters(['doneTodosCount','anotherGetter'])
     *  */
    getters:{

    },
    /**
     * stote状态改变的唯一方法提交 mutation；
     * 1. state为第一个参数；
     * 2. 第二参数在commit的'额外参数'；
     * 访问方式：
     * 1. this.$store.commit('名字','额外参数');
     * 2. 以对象的方式提交,及commit的参数是个对象；({type:'名字','amount:额外参数'})
     * 3. ...mapMutations(['incrementBy' ])// 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`  数组；
     * 4. ...mapMutations({add: 'increment'})// 将 `this.add()` 映射为 `this.$store.commit('increment')`   对象；
     */
    mutations:{

    },
    /**
     * Action 提交的是 mutation;    
     * Action 可以包含任意异步操作;
     */
    actions:{

    }
})