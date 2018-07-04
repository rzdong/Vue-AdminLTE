<template>
    <div class="content-wrapper">
        content2
    </div>
</template>

<script>
import Data from '../../model/Data.js'
export default {
    name: "HelloWorld",
    data() {
        return {
        msg: "Welcome to Your Vue.js App"
        };
    },
    mounted: function(){
        console.log('123213')
        console.log(Data)
        Data.massage = '修改数据'
    },
    methods: {
        clicks: function() {
        }
    }
}
</script>


