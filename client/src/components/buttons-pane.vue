<template>
    <div>
        <el-button-group>
            <el-button v-for="pane in panes"
                       :key="pane.label"
                       :type="pane.label === current ? 'primary' : 'default'"
                       @click.native="current = pane.label"
            >
                {{pane.label}}
            </el-button>
        </el-button-group>
        <component :is="paneComp"></component>
    </div>
</template>

<script>
    export default {
        name: "buttons-pane",
        data() {
            return {
                current: this.value
            }
        },
        computed: {
            paneComp() {
                const pane = this.panes.find(pane => pane.label === this.current) || this.panes[0];
                if (pane) {
                    this.current = pane.label;
                    return pane.component;
                } else {
                    return false;
                }
            }
        },
        props: {
            panes: {},
            value: {}
        },
    }
</script>

<style scoped>

</style>
