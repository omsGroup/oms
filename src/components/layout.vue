<template>
    <div class="layout-pages">
        <div class="layout-aside">aside</div>
        <div class="layout-content">content</div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}

</script>
<style lang="less">
.layout-pages{
    width: 100%;
    height:100%;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    .layout-aside{
        width: 25%;
        height: 100%;
        background: rgb(50, 64, 87);
    }
    .layout-content{
        width: 75%;
        flex-grow: 1;
    }
}

</style>
