<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.card{
    padding: 1em;
    background: $white-100;
    box-shadow: 0 0 16pt rgba(0,0,0,0.05);
    border-radius: 16px;
}
</style>