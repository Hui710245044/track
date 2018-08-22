<template>
    <div>
        <ui-search @search="search" :search_data="search_data"></ui-search>

        <ui-table :tableData="tableData.rows"></ui-table>

        <ui-page></ui-page>

    </div>
</template>
<script>
    import uiSearch from './ui-search'

    export default {
        data() {
            return {
                search_data: {
                    page: 1,
                    pageSize: 20,
                    channel: '',
                    transport: '',
                    online: '',
                    vot: '',
                    track: '',
                },
                tableData: [],
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                // console.log(this.search_data);
                this.$http.get('/track-list', {
                    params: this.search_data
                }).then(res => {
                    this.tableData = res.data;
                })
            },
            search() {
                this.init();
            },
        },
        components: {
            uiSearch,
            uiTable: require('./ui-table.vue').default,
            uiPage: require('./ui-page.vue').default,
        }
    }
</script>