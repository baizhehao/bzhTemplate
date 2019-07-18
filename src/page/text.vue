<template>
    <div>
        <helloworld/>
        <button @click="textGetApi">get测试</button>
        <button @click="textPostApi">post测试</button>
    </div>
</template>

<script>

import helloworld from '../components/text/HelloWorld';

export default {
    components:{
        helloworld
    },
    methods:{
        textGetApi(){
            this.$store.dispatch('textAct');
        },
        textPostApi(){
            this.$store.dispatch('textPostAct',{a:3,b:5})
        }     
    }
}
</script>

<style scoped>

</style>
