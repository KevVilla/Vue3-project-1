<template>
    <div class="header">
        <h1>Rick and Morty</h1>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Personajes</a></li>
            <li><a href="#">Locaciones</a></li>
            <li><a href="#">Episodios</a></li>
        </ul>
    </div>
</template>
<script>

// import {ref} from 'vue'

export default {
    name:'RmHeader',
    setup() {
        return{

        }
    },
}
</script>
<style scoped>
    .header{
        color: white;
        background-color: #202329;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2em 1em;
    }
    ul{
        list-style: none;
        display: flex;
        align-items: center;
    }
    li{
        padding: 5px;
        margin-left: 10px;
        /* transition: all .3s; */
        transition: all 0.5s;
    }
    li:hover{
        transform: scale(1.2);
    }
    li a{
        text-decoration: none;
        transition: all 0s;
        color:white;
    }
    li:hover a{
        font-weight: bold;

    }
    
</style>