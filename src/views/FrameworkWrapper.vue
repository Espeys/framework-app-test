<template>
    <div>
        <h1>This is inside the framework wrapper!</h1>
        <div>
            <router-link :to="{name: 'fw-main-1'}">Fw 1</router-link>
            <router-link :to="{name: 'fw-main-2'}" style="margin-left:  12px;">Fw 2</router-link>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<script setup lang="ts"></script>