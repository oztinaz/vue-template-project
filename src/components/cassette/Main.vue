<script setup lang="ts">
import { computed } from 'vue';
import Label from './Label.vue'
import Tape from './Tape.vue'
import Trapezoid from './Trapezoid.vue'

const props = defineProps<{
    label: string
}>()

const label = computed((): string => {
    return props.label
})
</script>

<template>
    <div class="cassette">
        <div class="label-container">
            <Label :label="label" />
        </div>
        <div class="tape-holder">
            <div class="left-line">
                <svg >
                    <line x1="10" y1="0" x2="0" y2="130" style="stroke:rgba(71, 24, 24, 0.856);stroke-width:2; position: absolute;" />
                </svg> 
            </div>
            <div class="right-line">
                <svg >
                    <line x1="289" y1="0" x2="300" y2="130" style="stroke:rgba(71, 24, 24, 0.856);stroke-width:2; position: absolute;" />
                </svg> 
            </div>
            <div class="bottom-line">
                <svg  width="470">
                    <line x1="0" y1="0" x2="470" y2="0" style="stroke:rgba(71, 24, 24, 0.856);stroke-width:2; position: absolute;" />
                </svg> 
            </div>
            <div class="tape-container">
                <Tape :length="50"/>
            </div>
            <div class="tape-container">
                <Tape :length="20"/>
            </div>
        </div>
        <div class="trapezoid-container">
            <Trapezoid />
        </div>
    </div>
</template>

<style scoped>
.cassette {
    background: rgba(68, 68, 68, 0.521);
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    z-index: 0;
    height: 300px;
    width: 500px;
}

.label-container {
    position: absolute;
    margin-right: 20px;
    width: 455px;
}

.tape-holder {
    position: absolute;
    align-items: center;
    display: flex;
    gap: 30px;
    justify-content: center;
    padding-top: 20px;
    z-index: -1;
}

.tape-container {
    display: grid;
    place-items: center;
    height: 225px;
    width: 225px;
}

.trapezoid-container {
    margin-top: 230px
}

.bottom-line {
    width: 500px;
    margin-top: 400px;
    position: absolute;
}

.left-line {
    margin-top: 140px;
    margin-left: -198px;
    position: absolute;
}

.right-line {
    margin-top: 140px;
    margin-left: 140px;
    position: absolute;
}
</style>