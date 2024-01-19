<script>
export default {
    name: 'Topbar',
    data() {
        return {
            hour: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
        }
    }
}
</script>

<template>
    <div>
        <span>Orange F</span>
        <span>{{ this.hour }}</span>
    </div>
</template>

<style scoped>
div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

span {
    color: white;
    font-size: 10px;
}
</style>